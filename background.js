processTabAction = function ( tab ) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0].url == "chrome://newtab/" ) {
      chrome.tabs.sendMessage(tabs[0].id, "activate");
    }
  });
};

handleTabUrlChange = function ( tabId, changeInfo, tab ) {
  processTabAction(tab);
};

chrome.tabs.onUpdated.addListener(handleTabUrlChange);

// try to fix on first load
try {
  handleTabUrlChange();
}
catch (ex) {}
