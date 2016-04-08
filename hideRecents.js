chrome.runtime.onMessage.addListener(function(msg) {
  if (msg === 'activate') {
    try {
      document.getElementById('most-visited').style.display = 'none';
    } catch ( e ) {}

    chrome.storage.sync.get(['cbAlsoHideLogo', 'cbAlsoHideSearchbar', 'cbAlsoHideNavbar'], function( obj ) {
      if (obj.cbAlsoHideLogo) {
        try {
          document.getElementById('lga').style.visibility = 'hidden';
        } catch ( e ) {}
      }

      if (obj.cbAlsoHideSearchbar) {
        try {
          document.getElementById('f').style.display = 'none';
        } catch( e ) {}
      }

      if (obj.cbAlsoHideNavbar) {
        try {
          document.getElementById('mngb').style.display = 'none';
        } catch( e ) {}
      }
    });
  }
});
