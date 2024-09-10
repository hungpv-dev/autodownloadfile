chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.action) {
        case "processData": {
            downloadFile();
            sendResponse({ status: "ok" });
            break;
        }
    }
});

function downloadFile() {
    let pr1 = '.x9f619.x78zum5.x1iyjqo2.x5yr21d.x2lwn1j.x1n2onr6.xh8yej3';
    let pr2 = '.x1iorvi4.x150jy0e.xjkvuk6.x1e558r4.x9f619';
    let pr3 = '.x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.x78zum5.xdl72j9.xdt5ytf.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt';

    let modalDownload = document.querySelector(`${pr1} ${pr2}`);
    let btnXuat = document.querySelector('.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1q00v2l.xaatb59.x1qgsegg.xo1l8bm.xbsr9hj.x1djdxrh.x1y1aw1k.xwib8y2.x1ye3gou.xn6708d.x1d52u69');
    if(!modalDownload){
        btnXuat.click();
    };
    setTimeout(() => {
        let btnDownloads = document.querySelectorAll(`${pr1} ${pr2} ${pr3}`);
        btnDownloads.forEach((item, key) => {
            if (key == 1) {
                item.click();
                chrome.runtime.sendMessage({action: "buttonClicked"});
            }
        });
    })
}
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
        console.log(data);
        isUploading = false;
    })
    .catch(error => {
        console.error(error);
        isUploading = false;
    });
}