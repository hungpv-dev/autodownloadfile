chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.action) {
        case "getCookies": {
            chrome.cookies.getAll({ domain: request.domain }, function (cookies) {
                sendResponse({ cookies: cookies });
            });
            return true;
        }
        case "buttonClicked": {
            chrome.downloads.onChanged.addListener(function (downloadDelta) {
                if (downloadDelta.state && downloadDelta.state.current === "complete") {
                    chrome.downloads.search({ id: downloadDelta.id }, function (downloads) {
                        if (downloads && downloads.length > 0) {
                            let downloadedFile = downloads[0];
                            chrome.tabs.sendMessage(sender.tab.id, {
                                action: "fileDownloaded",
                                filePath: downloadedFile.filename
                            });
                        }
                    });
                }
            });
            return true;
        }
        case "readFile": {
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
    }
});