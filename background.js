processTabAction = function ( tab ) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if ( tabs && tabs[0] && tabs[0].url == "chrome://newtab/" ) {
      chrome.tabs.sendMessage(tabs[0].id, "activate");
    }
  });
};

handleTabUrlChange = function ( tabId, changeInfo, tab ) {
  processTabAction(tab);
};

chrome.tabs.onUpdated.addListener(handleTabUrlChange);
chrome.webNavigation.onDOMContentLoaded.addListener(handleTabUrlChange);
