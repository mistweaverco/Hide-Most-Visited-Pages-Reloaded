(function(window, document) {
        var saveAll;

        var EDITORS = [
                ["css", ace.edit('cssEditor')],
                ["javascript", ace.edit('javascriptEditor')]
        ];
        EDITORS.forEach(function(editorConfig) {
                var ed, syntax;
                ed = editorConfig[1];
                syntax = editorConfig[0];
                ed.setTheme("ace/theme/monokai");
                ed.getSession().setMode("ace/mode/" + syntax);
                ed.$blockScrolling = Infinity;
                ed.setOptions({
                        fontFamily: "Source Code Pro",
                        fontSize: "12pt"
                });
                ed.commands.addCommand({
                        name: 'saveFile',
                        bindKey: {
                        win: 'Ctrl-S',
                        mac: 'Command-S',
                        sender: 'editor|cli'
                        },
                        exec: function(env, args, request) {
                                saveAll();
                        }
                });
        });

        var setOption = function(key, value, cb) {
                var typeOfCallback, val;
                typeOfCallback = typeof cb;
                if (typeOfCallback !== 'function') {
                        cb = function() {};
                }
                val = {};
                val[key] = value;
                chrome.storage.sync.set(val, cb);
        };

        var getOption = function(key, cb) {
                var typeOfKey;
                typeOfKey = typeof key;
                if (typeOfKey === 'string') {
                        key = [key];
                }
                chrome.storage.sync.get(key, function(res) {
                        cb(res);
                });
        };

        saveAll = function() {
                var ed;
                // CSS Edtior
                ed = EDITORS[0][1];
                setOption("css", ed.getValue());
                // JavaScript Edtior
                ed = EDITORS[1][1];
                setOption("javascript", ed.getValue());
        };

        getById = function(id) {
                return document.getElementById(id);
        };

        getById('HideOption-logo').addEventListener('click', function(){
                setOption("logo", this.checked);
        });

        getById('HideOption-searchbar').addEventListener('click', function(){
                setOption("searchbar", this.checked);
        });

        getById('HideOption-navbar').addEventListener("click", function(){
                setOption("navbar", this.checked);
        });

        getById('HideOption-promo').addEventListener("click", function(){
                setOption("promo", this.checked);
        });

        chrome.storage.sync.get(['logo', 'searchbar', 'navbar', 'promo'], function(dataObject) {
                var el, key;
                for (key in dataObject) {
                        try {
                                el = getById("HideOption-" + key);
                                if (dataObject[key] === true) {
                                        el.checked = true;
                                } else if (dataObject[key].length > 0) {
                                        el.value = dataObject[key];
                                }
                        } catch (error) {}
                }
        });

        // load editor contents
        chrome.storage.sync.get(["javascript", "css"], function(results) {
                if (!results)
                        return;
                if (results.css && results.css.length)
                        EDITORS[0][1].setValue(results.css, 1);
                if (results.javascript && results.javascript.length)
                        EDITORS[1][1].setValue(results.javascript, 1);
        });

        var onCtrlSCallback = function(evt) {
                if (evt.ctrlKey === true && evt.key === 's') {
                        evt.preventDefault();
                        saveAll();
                        return false;
                }
        };

        window.addEventListener('keydown', onCtrlSCallback);
})(window, document);
