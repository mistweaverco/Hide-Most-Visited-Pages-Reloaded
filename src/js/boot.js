(function(window, document) {
        var failureCounter = 0;
        var failureRetryTimeoutInMs = 200;
        var maxFailures = 10;

        var domready = function(cb) {
                if (document.readyState === "complete")
                        return window.setTimeout(cb, 1);
                else
                        document.addEventListener("DOMContentLoaded", cb);
        };

        var alsoHideConfig = new Map();

        alsoHideConfig.set("logo", {
                selector: "#lga",
                modus: "invisible"
        });
        alsoHideConfig.set("searchbar", {
                selector: "#f",
                modus: "remove"
        });
        alsoHideConfig.set("navbar", {
                selector: "#mngb",
                modus: "remove"
        });
        alsoHideConfig.set("promo", {
                selector: "#prm-pt",
                modus: "remove"
        });
        alsoHideConfig.set("cssSelectors", {
                values: ""
        });

        var modEl = function(selector, modus, callback) {
                var ex, i, len, pNode, targetNode, targetNodes;
                targetNodes = document.querySelectorAll(selector);
                for (i = 0, len = targetNodes.length; i < len; i++) {
                        targetNode = targetNodes[i];
                        try {
                                switch (modus) {
                                case "remove":
                                case void 0:
                                        pNode = targetNode.parentNode;
                                        pNode.removeChild(targetNode);
                                        break;
                                case "invisible":
                                        targetNode.style.visibility = "hidden";
                                        break;
                                case "hide":
                                        targetNode.style.display = "none";
                                }
                        } catch (error) {
                                ex = error;
                                if (callback)
                                        callback(ex);
                                return;
                        }
                        if (callback)
                                callback();
                }
        };

        var forEachKeyCb = function(key) {
                var el = alsoHideConfig.get(key);
                if (el && el.selector)
                        modEl(el.selector, el.modus);
        };

        var forEachHideOptionCb = function(entries) {
                var keys = Object.keys(entries);
                keys.forEach(function(key) {
                        if (entries[key] === true)
                                forEachKeyCb(key);
                });
        };

        var appendCssStyle = function(d) {
                var css = document.createElement("style");
                css.innerHTML = d;
                document.body.appendChild(css);
        };

        var runCustomJavascript = function(d) {
                var js = document.createElement("script");
                js.innerHTML = d;
                document.body.appendChild(js);
        };

        var alsoHideConfigKeys = Array.from(alsoHideConfig).map(function(k){return k[0];});

        var onHideMostVisitedCb = function(err) {
                var t;
                if (!err) {
                        chrome.storage.sync.get(alsoHideConfigKeys, forEachHideOptionCb);
                        chrome.storage.sync.get(["javascript", "css"], function(results) {
                                if (!results)
                                        return;
                                if (results.css && results.css.length)
                                        appendCssStyle(results.css);
                                if (results.javascript && results.javascript.length)
                                        runCustomJavascript(results.javascript);
                        });
                } else {
                        if (failureCounter < maxFailures) {
                                t = window.setTimeout(hideMostVisited, failureRetryTimeoutInMs);
                        }
                        failureCounter++;
                }
        };

        var hideMostVisited = function() {
                modEl("#most-visited", "remove", onHideMostVisitedCb);
        };

        var boot = function() {
                hideMostVisited();
        };

        chrome.runtime.onMessage.addListener(function(msg) {
                if (msg !== "activate")
                        return;
                domready(boot);
        });
})(window, document);
