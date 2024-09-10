// document.getElementById('downloadBtn').addEventListener('click', function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {action: "downloadFile"}, function(response) {
//             if (chrome.runtime.lastError) {
//                 console.error("Lỗi:", chrome.runtime.lastError.message);
//             } else if (response && response.status === "started") {
//                 console.log("Quá trình tải xuống đã bắt đầu");
//             }
//         });
//     });
// });