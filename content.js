chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fileDownloaded") {
        chrome.runtime.sendMessage({action: "readFile", filePath: message.filePath}, (response) => {
            if (response.success) {
                uploadToServer(response.fileContent, message.filePath);
            } else {
                console.error('Lỗi khi đọc file:', response.error);
            }
        });
    }
});

let isUploading = false;

function uploadToServer(fileContent, fileName) {
    if (isUploading) {  
        return;
    }
    isUploading = true;
    
    let blob = new Blob([fileContent], {type: 'application/octet-stream'});
    let formData = new FormData();
    formData.append('file', blob, fileName.split('/').pop());
    
    fetch('https://admin.rovegl.com/admin/import-media-data-test', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        isUploading = false;
    })
    .catch(error => {
        console.error(error);
        isUploading = false;
    });
}