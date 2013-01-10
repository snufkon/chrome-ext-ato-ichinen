$(document).ready(function() {
    iconManager.setCanvas('canvas');
    iconManager.drawOffIcon();
    iconManager.setPeriodNumBadge();
});

chrome.browserAction.onClicked.addListener(function(tab) {
    iconManager.setPeriodNumBadge();
    
    if(statusManager.getStatus()) {
	iconManager.drawOffIcon();
    } else {
	iconManager.drawOnIcon();
    }
    statusManager.changeStatus();

    if(!urlManager.isGoogle(tab.url)) { return; }
    if(statusManager.getStatus()) {
	updateToSpecifiedPeriod(tab);
    } else {
	updateToAnyTime(tab);
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status != "loading") { return; }
    if (!statusManager.getStatus()) { return; }
    if (!urlManager.isGoogle(tab.url)) { return; }
    if (urlManager.getParam(tab.url, "as_qdr")) { return; }
    if (urlManager.getParam(tab.url, "url")) { return; }
    updateToSpecifiedPeriod(tab);
});

function updateToSpecifiedPeriod(tab) {
    var num = localStorage['periodNum'] ? localStorage['periodNum'] : 1;
    var name = localStorage['periodName'] ? localStorage['periodName'] : '年';
    var periodUnitMap = {'年': 'y', '月': 'm', '週': 'w', '日': 'd', '時': 'h', '分': 'm', '秒': 's'};
    var asQdrValue = periodUnitMap[name] + num;
    chrome.tabs.update(tab.id, {url:tab.url + "&as_qdr=" + asQdrValue});
}

function updateToAnyTime(tab) {
    var url = tab.url;
    var asQdrPattern = "&as_qdr=[snhdwmy]\\d";
    var tbsPattern = "&tbs=qdr:[snhdwmy]\\d";
    url = url.replace(new RegExp(asQdrPattern, "g"), "");
    url = url.replace(new RegExp(tbsPattern, "g"), "");
    chrome.tabs.update(tab.id, {url:url});
}



