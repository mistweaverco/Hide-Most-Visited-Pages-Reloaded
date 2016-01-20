var foo = false;
processTabAction = function ( tab ) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0].url == "chrome://newtab/" ) {
      chrome.tabs.sendMessage(tabs[0].id, "activate");
    }
    if (tabs[0].url == "chrome-search://local-ntp/local-ntp.html" ) {
      chrome.tabs.update(tabs[0].id, {url: "https://www.google.com/webhp"}, function(){
        if ( foo === false ) {
          foo = true;
          chrome.tabs.reload(tabs[0].id);
        }
      });
    }
  });
};

handleTabUrlChange = function ( tabId, changeInfo, tab ) {
  processTabAction(tab);
};

chrome.tabs.onUpdated.addListener(handleTabUrlChange);
