chrome.runtime.onMessage.addListener(function(msg) {
  if ( msg === 'activate' ) {
    try {
      document.getElementById('most-visited').style.display = 'none';
    } catch ( e ) {}
  chrome.storage.sync.get(['cbAlsoHideLogo','cbAlsoHideSearchbar', 'cbAlsoHideNavbar'], function( obj ) {
    if ( obj.cbAlsoHideLogo && obj.cbAlsoHideLogo === true ) {
      try {
        document.getElementById('lga').style.display = 'none';
      } catch ( e ) {}
    }
    if ( obj.cbAlsoHideSearchbar && obj.cbAlsoHideSearchbar === true ){
      try {
        document.getElementById('f').style.display = 'none';
      } catch( e ) {}
    }
    if ( obj.cbAlsoHideNavbar && obj.cbAlsoHideNavbar === true ) {
      try {
        document.getElementById('mngb').style.display = 'none';
      } catch( e ) {}
    }
  });
  }
});
