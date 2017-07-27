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

        var getById, getOption, infopop, saveAlsoHideLogo, saveAlsoHideNavbar, saveAlsoHidePromo, saveAlsoHideSearchbar, saveOptions, setOption;

        infopop = function(message) {
                var infodiv, timer;
                infodiv = document.createElement('div');
                timer = null;
                infodiv.style.width = '400px';
                infodiv.style.backgroundColor = '#efe';
                infodiv.style.border = '1px solid #7c7';
                infodiv.style.padding = '10px';
                infodiv.style.margin = '20px';
                infodiv.style.borderRadius = '10px';
                infodiv.style.color = '#000';
                infodiv.innerHTML = message;
                document.body.appendChild(infodiv);
                timer = window.setTimeout(function() {
                        return document.body.removeChild(infodiv);
                }, 3500);
        };

        saveOptions = function() {
                saveAlsoHideLogo();
                saveAlsoHideSearchbar();
                saveAlsoHideNavbar();
                saveAlsoHidePromo();
                infopop('Settings saved!');
        };

        saveAll = function() {
                var ed;
                // CSS Edtior
                ed = EDITORS[0][1];
                setOption("css", ed.getValue());
                // JavaScript Edtior
                ed = EDITORS[1][1];
                setOption("javascript", ed.getValue());
                infopop('Settings saved!');
        };

        setOption = function(key, value, cb) {
                var typeOfCallback, val;
                typeOfCallback = typeof cb;
                if (typeOfCallback !== 'function') {
                        cb = function() {};
                }
                val = {};
                val[key] = value;
                chrome.storage.sync.set(val, cb);
        };

        getOption = function(key, cb) {
                var typeOfKey;
                typeOfKey = typeof key;
                if (typeOfKey === 'string') {
                        key = [key];
                }
                chrome.storage.sync.get(key, function(res) {
                        cb(res);
                });
        };

        getById = function(id) {
                return document.getElementById(id);
        };

        saveAlsoHideLogo = function() {
                var el;
                el = getById('HideOption-logo');
                setOption("logo", el.checked);
        };

        saveAlsoHideSearchbar = function() {
                var el;
                el = getById('HideOption-searchbar');
                setOption("searchbar", el.checked);
        };

        saveAlsoHideNavbar = function() {
                var el;
                el = getById('HideOption-navbar');
                setOption("navbar", el.checked);
        };

        saveAlsoHidePromo = function() {
                var el;
                el = getById('HideOption-promo');
                setOption("promo", el.checked);
        };

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



        document.getElementById('btnSave').onclick = saveOptions;

})(window, document);
