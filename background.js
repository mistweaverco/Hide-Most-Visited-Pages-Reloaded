var urls = [
  "chrome://newtab/", 
  "chrome-search://local-ntp/local-ntp.html"
];

var sendTabMessage = function (tab) {
  if(urls.indexOf(tab.url) != -1) {
    chrome.tabs.sendMessage(tab.id, "activate");
  }
};

var onTabShow = function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    sendTabMessage(tab);
  }
};

var onDOMContentLoaded = function () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    sendTabMessage(tabs[0]);
  });
};

// Remove HMVPR when creating new tab
chrome.tabs.onUpdated.addListener(onTabShow);

// Remove HMVPR when refreshing the new tab page
chrome.webNavigation.onDOMContentLoaded.addListener(function(event) { 
  onDOMContentLoaded();
});

// Remove HMVPR on initial startup
document.addEventListener("DOMContentLoaded", function(event) { 
  onDOMContentLoaded();
});