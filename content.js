chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "checkReady") {
        sendResponse({ ready: true });
    } else if (message.action === "startDownload") {
        openModal();
        sendResponse({ status: "started" });
    }
    return true;
});

function openModal() {
    let btnOpenPopup = document.querySelector('.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1q00v2l.xaatb59.x1qgsegg.xo1l8bm.xbsr9hj.x1djdxrh.x1y1aw1k.xwib8y2.x1pi30zi.x1ye3gou');
    btnOpenPopup.click();
    createFile();
}

function createFile() {
    setTimeout(() => {
        let classPopup = '.x78zum5.xdt5ytf.x1t137rt.x71s49j.x1n2onr6.x1ja2u2z.x3oybdh.xofcydl.x6o7n8i.x1mow4s6.x12w9bfk';
        let btnCreateFile = document.querySelector(classPopup + ' ' + '.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x1t137rt.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xo1l8bm.x140t73q.x19bke7z.x1y1aw1k.xwib8y2.x1swvt13.x1pi30zi');
        if (btnCreateFile) {
            btnCreateFile.click();
            downloadFile();
        }
    }, 1000);
}
let isDownloading = false;
function downloadFile() {
    setTimeout(() => {
        let classPopup = '.x9f619.xxc7z9f.x13faqbe.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1ine8nr.xmi5d70.x1fvot60.xo1l8bm.xxio538.x1gzqxud.xbsr9hj.x2lah0s.xyamay9.x1l90r2v.x1swvt13.x1pi30zi.x1mbqufl.x6o7n8i.xw7d9y7.x12w9bfk.x1hc1fzr.x1q2yuad';
        let btnClass = '.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x1h6gzvc.x1t137rt.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xo1l8bm.x19yxgo3.x60d0xz.x1y1aw1k.xwib8y2.x1swvt13.x1pi30zi';
        let btnCloseClass = '.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x1t137rt.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xo1l8bm.xbsr9hj.x1v911su.x1y1aw1k.xwib8y2.x1ye3gou.xn6708d';
        let btnDownload = document.querySelector(classPopup + ' ' + btnClass);
        let btnClose = document.querySelector(classPopup + ' ' + btnCloseClass);
        if (btnDownload && !isDownloading) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class' && !isDownloading) {
                        isDownloading = true;
                        btnDownload.click();
                        observer.disconnect();
                        setTimeout(() => {
                            isDownloading = false;
                            chrome.runtime.sendMessage({action: "startHandle"}, function(response) {});
                        }, 5000);
                        btnClose.click();
                    }
                });
            });

            observer.observe(btnDownload, { attributes: true });
        }
    }, 5000);
}