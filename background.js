chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        'time-download-file': {
            time: 0,
            stop: true,
            status: 1
        }
    }, function () { });
    chrome.alarms.create('loadingFile', { periodInMinutes: 1 / 60 });
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "processData") {
        chrome.downloads.search({
            orderBy: ['-startTime'],
            limit: 1
        }, (results) => {
            if (results && results.length > 0) {
                const latestDownload = results[0];
                uploadFile(latestDownload.filename);
            }
        });
    }
});
chrome.downloads.onChanged.addListener((downloadDelta) => {
    if (downloadDelta.state?.current === "complete") {
        chrome.downloads.search({
            orderBy: ['-startTime'],
            limit: 1
        }, ([latestDownload]) => {
            if (latestDownload?.state === "complete") {
                uploadFile(latestDownload.filename);
            }
        });
    }
});
async function uploadFile(filename) {
    try {
        const fileContent = await readFileAsArrayBuffer(filename);
        await uploadToServer(fileContent, filename.split('\\').pop().split('/').pop());
    } catch (error) {
        console.error('Lỗi khi đọc hoặc tải lên file:', error);
    }
}
async function readFileAsArrayBuffer(filename) {
    const response = await fetch('file://' + filename);
    const arrayBuffer = await response.arrayBuffer();
    const fileContent = new TextDecoder().decode(arrayBuffer);
    return fileContent;
}
let isUploading = false;
async function uploadToServer(fileContent, fileName) {
    if (isUploading) return;
    isUploading = true;

    try {
        const formData = new FormData();
        formData.append('file', new Blob([fileContent], { type: 'application/octet-stream' }), fileName);

        const response = await fetch('https://admin.rovegl.com/admin/import-media-data-test', {
            method: 'POST',
            body: formData
        });

        const responseText = await response.text();
        try {
            const data = JSON.parse(responseText);
            console.log(data);
        } catch (error) {
            console.error(responseText);
        }
    } catch (error) {
        console.error('Lỗi khi tải lên:', error);
    } finally {
        isUploading = false;
    }
}


chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'loadingFile') {
        loadingFile();
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "startHandle") {
        handleStart();
        sendResponse({status: "success"});
        return true;
    }
});
function handleStart() {
    let giay = 10 * 60;
    chrome.storage.local.get(['time-download-file'], function (result) {
        const downloadList = result['time-download-file'] || {
            time: 0,
            stop: true,
            status: 1
        };
        downloadList.time = giay;
        downloadList.stop = false;
        downloadList.status = 0;
        chrome.storage.local.set({ 'time-download-file': downloadList }, function () {
            // Gọi hàm startDownload ngay sau khi cập nhật storage
            // startDownload();
        });
    });
}
function startDownload() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs.length === 0) {
            console.error("Không tìm thấy tab nào đang hoạt động.");
            return;
        }
        chrome.tabs.sendMessage(tabs[0].id, {action: "checkReady"}, function(response) {
            if (chrome.runtime.lastError) {
                console.error("Lỗi:", chrome.runtime.lastError.message);
            } else if (response && response.ready) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "startDownload"}, function(response) {
                    if (response && response.status === "started") {
                        console.log("Quá trình tải xuống đã bắt đầu");
                    }   
                });
            }
        });
    });
}
function loadingFile() {
    chrome.storage.local.get(['time-download-file'], function (result) {
        let downloadTime = result['time-download-file'] || {
            time: 0,
            stop: true,
            status: 1
        };
        if (downloadTime.time > 0) {
            downloadTime.time -= 1;
        } else {
            downloadTime.time = 0;
            downloadTime.stop = true;
        }
        chrome.storage.local.set({ 'time-download-file': downloadTime }, function () {
            chrome.runtime.sendMessage({ action: "updateTable", data: downloadTime }, function (response) {
                if (chrome.runtime.lastError) {
                    // console.log("Lỗi khi gửi tin nhắn:", chrome.runtime.lastError.message);
                }
            });
            if (downloadTime.time == 0 && downloadTime.status == 0) {
                downloadTime.stop = false;
                downloadTime.status = 1;
                chrome.storage.local.set({ 'time-download-file': downloadTime }, function () {
                    startDownload();
                });
            }
        });
    });
}