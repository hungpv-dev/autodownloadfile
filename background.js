chrome.downloads.onChanged.addListener((downloadDelta) => {
    if (downloadDelta.state && downloadDelta.state.current === "complete") {
        chrome.downloads.search({ id: downloadDelta.id }, (results) => {
            if (results.length && results[0].state === "complete") {
                chrome.downloads.search({ id: downloadDelta.id }, function (downloads) {
                    if (downloads && downloads.length > 0) {
                        let downloadedFile = downloads[0];
                        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                            if (tabs.length > 0) {
                                chrome.tabs.sendMessage(tabs[0].id, {
                                    action: "fileDownloaded",
                                    filePath: downloadedFile.filename
                                });
                            }
                        });
                    }
                });

                return true;
            }
        });
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "readFile") {
        fetch('file://' + request.filePath)
            .then(response => response.arrayBuffer())
            .then(buffer => {
                sendResponse({ success: true, fileContent: buffer });
            })
            .catch(error => {
                sendResponse({ success: false, error: error.toString() });
            });
        return true;
    }
});

