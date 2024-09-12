let form = document.getElementById('form-download');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    handleStart();
});
function handleStart(){
    let giay = 1 * 60;
    chrome.storage.local.get(['time-download-file'], function (result) {
        const downloadList = result['time-download-file'] || {
            time: 0,
            stop: true,
            status: 1
        };
        downloadList.time = giay;
        downloadList.stop = false;
        downloadList.status = 0;
        chrome.storage.local.set({ 'time-download-file': downloadList }, function () {});
    });
}

// Thêm listener để nhận message từ background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "updateTable") {
        updateTable();
        sendResponse({status: "success"});
        return true;
    }else if(request.action === "startHandle"){
        handleStart();
        sendResponse({status: "success"});
        return true;
    }
});



function updateTable() {
    chrome.storage.local.get(['time-download-file'], function (result) {
        const downloadList = result['time-download-file'] || {
            time: 0,
            stop: true,
            status: 1
        };
        const { minutes, seconds } = convertSecondsToMinutesSeconds(downloadList.time);
        let time = document.getElementById("time");
        time.innerHTML = `${minutes}m ${seconds}s`;
    });
}

function convertSecondsToMinutesSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return { minutes, seconds: remainingSeconds };
}