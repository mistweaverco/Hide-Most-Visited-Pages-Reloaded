(function(window, document) {
        var onDOMContentLoaded, onTabShow, sendTabMessage, urls;

        urls = ["chrome://newtab/", "chrome-search://local-ntp/local-ntp.html"];

        sendTabMessage = function(tab) {
                var iof;
                iof = urls.indexOf(tab.url);
                if (iof !== -1)
                        chrome.tabs.sendMessage(tab.id, "activate");
        };

        onTabShow = function(tabId, changeInfo, tab) {
                if (changeInfo.status === "complete")
                        sendTabMessage(tab);
        };

        chrome.tabs.onUpdated.addListener(onTabShow);
})(window, document);
