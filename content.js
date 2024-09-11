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
    downloadFile();
}

let isDownloading = false;
async function downloadFile() {

    await delay(2000);

    let check = await filterData();
    if(!check){
        location.reload();
        chrome.runtime.sendMessage({action: "startHandle"}, function(response) {});
    };

    let btnClass = '.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x1t137rt.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xo1l8bm.x140t73q.x19bke7z.x1y1aw1k.xwib8y2.x1swvt13.x1pi30zi';
    let btnCloseClass = '.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x1t137rt.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xo1l8bm.xbsr9hj.x1v911su.x1y1aw1k.xwib8y2.x1ye3gou.xn6708d';


    let btnCreateFile = getInp(btnClass);
    btnCreateFile.click();
    await delay(5000);
    let classModel = '.x9f619.xxc7z9f.x13faqbe.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1ine8nr.xmi5d70.x1fvot60.xo1l8bm.xxio538.x1gzqxud.xbsr9hj.x2lah0s.xyamay9.x1l90r2v.x1swvt13.x1pi30zi.x1mbqufl.x6o7n8i.xw7d9y7.x12w9bfk.x1hc1fzr.x1q2yuad';
    let btnDownloadClass = '.x1xqt7ti.x1fvot60.xk50ysn.xxio538.x1heor9g.xuxw1ft.x6ikm8r.x10wlt62.xlyipyv.x1h4wwuj.xeuugli';
    let btnDownload = document.querySelector(classModel + ' ' + btnDownloadClass);
    let btnClose = document.querySelector(classModel + ' ' + btnCloseClass);
    console.log(btnDownload,btnClose);
    if (btnDownload && !isDownloading) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(async (mutation) => {
                if (mutation.attributeName === 'class' && !isDownloading) {
                    console.log('toggle class');
                    isDownloading = true;
                    btnDownload.click();
                    observer.disconnect();
                    await delay(5000);
                    isDownloading = false;
                        chrome.runtime.sendMessage({action: "startHandle"}, function(response) {});
                    btnClose.click();
                }
            });
        });

        observer.observe(btnDownload, { attributes: true });
    }
}

async function filterData() {
    let listInp = getInp('.x78zum5.xdt5ytf.x1iyjqo2 .x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.x78zum5.xdl72j9.xdt5ytf.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt', true);
    await delay(200);

    // Chọn trang
    if(!listInp[0]) return false;
    listInp[0].click();
    await delay(1000);
    let listPage = document.querySelectorAll('.x1iyjqo2.x1iorvi4.x150jy0e.xjkvuk6.x1e558r4.x1t137rt.x78zum5.xdt5ytf.xu3tz18.x1oux0zi .x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.x78zum5.xdl72j9.xdt5ytf.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt');
    await delay(200);
    if(!listPage[0]) return false;
    listPage[0].click();


    await delay(200);
    // // Chế độ xem hàng ngày
    listInp[3].click();

    await delay(200);
    // // Cấp độ bài viết
    listInp[5].click();
    await delay(200);

    // Select khoảng ngày
    let selectKhoangNgay = getInp('.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x16tdsg8.xggy1nq.x1ja2u2z.x6s0dn4.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x3nfvp2.xdl72j9.x1q0g3np.x2lah0s.x193iq5w.x1n2onr6.x1hl2dhg.x87ps6o.xxymvpz.xlh3980.xvmahel.x1lku1pv.x1g40iwv.x1g2r6go.x16e9yqp.x12w9bfk.x15406qy.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1q00v2l.xaatb59.x1qgsegg.xo1l8bm.xbsr9hj.x1djdxrh.x1y1aw1k.xwib8y2.x1ye3gou.xn6708d.xh8yej3');
    await delay(200);
    selectKhoangNgay.click();
    await delay(200);
    let popUpFT = document.querySelector('.x9f619.xw2csxc.x1odjw0f.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1kmqopl.xyamay9.x1l90r2v.x1swvt13.x1pi30zi');
    if(!popUpFT) return false;
    let bayngay = popUpFT.querySelectorAll(".x6s0dn4.x78zum5.x1q0g3np.xozqiw3.x2lwn1j.xeuugli.x1iyjqo2.x19lwn94.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1iorvi4.xjkvuk6.xurb0ha.x1sxyh0.xp7jhwk.x1n0m28w")[2];
    bayngay.click();

    listInp[1].click();
    await delay(500);
    
    // Số liệu đặt sẵn
    let listSolieu = document.querySelectorAll('.x1iyjqo2.x1iorvi4.x150jy0e.xjkvuk6.x1e558r4.x1t137rt.x6ikm8r.x1odjw0f.x1k0if8d.xdm93yi .x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.x78zum5.xdl72j9.xdt5ytf.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt');
    for (let i = 0; i < listSolieu.length - 1; i++) {
        listSolieu[i].click();
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