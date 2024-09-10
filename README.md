function getCookies() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ action: "getCookies", domain: ".facebook.com" }, function (response) {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(response.cookies);
            }
        });
    });
}

function formatCookies(cookies) {
    let obj = {};
    cookies.forEach(cookie => {
        obj[cookie.name] = cookie.value;
    });
    let str = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');

    return { cookieObj: obj, cookieStr: str };
}