chrome.runtime.onMessage.addListener ( msg ) ->

  modEl = ( selector,  modus ) ->
    targetNodes = document.querySelectorAll selector
    for targetNode in targetNodes
      try
        switch modus
          when 'remove', undefined
            pNode = targetNode.parentNode
            pNode.removeChild targetNode
          when 'invisible'
            targetNode.style.visibility = 'hidden'
          when 'hide'
            targetNode.style.display = 'none'
      catch ex
    return

  if msg == 'activate'
    modEl '#most-visited', 'remove'

  storageOptions = [
    'cbAlsoHideLogo'
    'cbAlsoHideSearchbar'
    'cbAlsoHideNavbar'
  ]

  storageOptions2domElementSelectors = {
    cbAlsoHideLogo: {
      selector: '#lga'
      modus: 'hide'
    }
    cbAlsoHideSearchbar: {
      selector: '#f'
      modus: 'remove'
    }
    cbAlsoHideNavbar: {
      selector: '#mngb'
      modus: 'remove'
    }
  }

  chrome.storage.sync.get storageOptions , ( dataObject ) ->
    for key of dataObject
      try
        if dataObject[key] == true
          item = storageOptions2domElementSelectors[key]
          modEl item.selector, item.modus
    return

  return

