chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.action) {
        case "fileDownloaded": {
            chrome.runtime.sendMessage({action: "readFile", filePath: request.filePath}, (response) => {
                if (response.success) {
                    uploadToServer(response.fileContent, request.filePath);
                } else {
                    console.error('Lỗi khi đọc file:', response.error);
                }
            });
        }
    }
});
let isUploading = false;

function uploadToServer(fileName,fileContent) {
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
        console.log(data);
        isUploading = false;
    })
    .catch(error => {
        console.error(error);
        isUploading = false;
    });
}