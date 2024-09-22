chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "checkReady") {
        sendResponse({ ready: true });
    } else if (message.action === "startDownload") {
        openModal();
        sendResponse({ status: "started" });
    }
    return true;
});

var btnCloseClass = '.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x1t137rt.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xo1l8bm.xbsr9hj.x1v911su.x1y1aw1k.xwib8y2.x1ye3gou.xn6708d';
    var buttonDownloadTrueClass = '.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x1t137rt.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xo1l8bm.x140t73q.x19bke7z.x1y1aw1k.xwib8y2.x1swvt13.x1pi30zi';
var classModel = '.x9f619.xxc7z9f.x13faqbe.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1ine8nr.xmi5d70.x1fvot60.xo1l8bm.xxio538.x1gzqxud.xbsr9hj.x2lah0s.xyamay9.x1l90r2v.x1swvt13.x1pi30zi.x1mbqufl.x6o7n8i.xw7d9y7.x12w9bfk.x1hc1fzr.x1q2yuad';
var btnDownloadClass = '.x1xqt7ti.x1fvot60.xk50ysn.xxio538.x1heor9g.xuxw1ft.x6ikm8r.x10wlt62.xlyipyv.x1h4wwuj.xeuugli';
var i = 0;
setInterval(async function () {
    let btnDownloadTrue = document.querySelector(classModel + ' ' + buttonDownloadTrueClass);
    let btnClose = document.querySelector(classModel + ' ' + btnCloseClass);
    await delay(500);
    if (btnDownloadTrue && !isDownloading) {
        console.log('send action');
        btnDownloadTrue.click();
        isDownloading = true;
        setTimeDownload();
        await delay(5000);
        btnClose.click();
    }
}, 1000);

async function openModal() {
    try {
        let btnOpenPopup = document.querySelectorAll("#mediaManagerExportInsightsButton .x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r");
        await delay(200);
        btnOpenPopup.forEach(element => {
            let text = element.querySelector('.x1xqt7ti.x1fvot60.xk50ysn.xxio538.x1heor9g.xuxw1ft.x6ikm8r.x10wlt62.xlyipyv.x1h4wwuj.xeuugli');
            if (text) {
                element.click();
                downloadFile();
            }
        });
    } catch (error) {
        location.reload();
        chrome.runtime.sendMessage({ action: "startHandle" }, function (response) { });
    }
}


var isDownloading = false;
async function downloadFile() {

    try {
        await delay(3000);

        let check = await filterData();
        if (!check) {
            location.reload();
            chrome.runtime.sendMessage({ action: "startHandle" }, function (response) { });
        };

        let btnClass = '.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x1t137rt.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xo1l8bm.x140t73q.x19bke7z.x1y1aw1k.xwib8y2.x1swvt13.x1pi30zi';
        

        let btnCreateFile = getInp(btnClass);
        btnCreateFile.click();
    } catch (e) {
        location.reload();
        setTimeDownload();
    }
}

async function filterData() {
    let listInp = getInp('.x78zum5.xdt5ytf.x1iyjqo2 .x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.x78zum5.xdl72j9.xdt5ytf.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt', true);
    await delay(200);

    // Chọn trang
    if (!listInp[0]) return false;
    listInp[0].click();
    await delay(1000);
    let listPage = document.querySelectorAll('.x1iyjqo2.x1iorvi4.x150jy0e.xjkvuk6.x1e558r4.x1t137rt.x78zum5.xdt5ytf.xu3tz18.x1oux0zi .x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.x78zum5.xdl72j9.xdt5ytf.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt');
    await delay(200);
    for (let i = 0; i < listPage.length; i++) {
        if (listPage[i].getAttribute('aria-selected') === "false") {
            listPage[i].click();
        };
        await delay(200);
    }

    await delay(200);
    // // Chế độ xem hàng ngày
    listInp[3].click();

    await delay(200);
    // // Cấp độ bài viết
    listInp[5].click();
    await delay(200);

    // Select khoảng ngày
    let selectKhoangNgay = getInp('.x1lcm9me.x1yr5g0i.xo71vjh.x5pf9jr.x78zum5.xdt5ytf.x1iyjqo2 .x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go');
    await delay(200);
    selectKhoangNgay.click();
    await delay(200);
    let popUpFT = document.querySelector('.x9f619.xw2csxc.x1odjw0f.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1kmqopl.xyamay9.x1l90r2v.x1swvt13.x1pi30zi');
    if (!popUpFT) return false;
    let bayngay = popUpFT.querySelectorAll(".x6s0dn4.x78zum5.x1q0g3np.xozqiw3.x2lwn1j.xeuugli.x1iyjqo2.x19lwn94.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1iorvi4.xjkvuk6.xurb0ha.x1sxyh0.xp7jhwk.x1n0m28w")[2];
    bayngay.click();

    listInp[1].click();
    await delay(500);

    // Số liệu đặt sẵn
    let listSolieu = document.querySelectorAll('.x1iyjqo2.x1iorvi4.x150jy0e.xjkvuk6.x1e558r4.x1t137rt.x6ikm8r.x1odjw0f.x1k0if8d.xdm93yi .x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk');
    for (let i = 0; i < listSolieu.length; i++) {
        if (listSolieu[i].getAttribute('aria-selected') === "false") {
            listSolieu[i].click();
        };
        await delay(200);
    }
    listInp[1].click();
    await delay(1000);
    return true;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getInp(classInp, all = false) {
    let classPopup = '.x1gzqxud.x1lcm9me.x1yr5g0i.xrt01vj.x1xp1s0c.x5yr21d.xh8yej3.x78zum5.xdt5ytf.xqui1pq';
    if (all) {
        return document.querySelectorAll(classPopup + ' ' + classInp);
    }
    return document.querySelector(classPopup + ' ' + classInp);
}

function setTimeDownload() {
    let time = 10 * 60;
    const downloadList = {
        time: time,
        stop: false,
        status: 0
    };
    chrome.storage.local.set({ 'time-download-file': downloadList }, function () { });
}