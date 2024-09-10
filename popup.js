let form = document.getElementById('form-download');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let data = {};

    // Gửi tin nhắn đến background script
    chrome.runtime.sendMessage({ action: "processData", data: data }, function(response) {
        if (chrome.runtime.lastError) {
            console.log("Lỗi khi gửi thông điệp:", chrome.runtime.lastError.message);
        } else {
            console.log("Tin nhắn đã được gửi thành công đến background script");
        }
    });
});