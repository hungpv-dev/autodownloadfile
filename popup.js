let form = document.getElementById('form-download');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let data = {};

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (!tabs[0].url || tabs[0].url.startsWith("chrome://") || tabs[0].url.startsWith("chrome-extension://")) {
            return;
        }
        chrome.tabs.sendMessage(tabs[0].id, { action: "processData", data: data }, function (response) {
            if (chrome.runtime.lastError) {
                console.log("Lỗi khi gửi thông điệp:", chrome.runtime.lastError.message);
            } 
        });
    });
});