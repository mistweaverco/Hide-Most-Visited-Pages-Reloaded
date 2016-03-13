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

chrome.tabs.onUpdated.addListener(onTabShow);

document.addEventListener("DOMContentLoaded", function(event) { 
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    sendTabMessage(tabs[0]);
  });
});