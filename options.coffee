infopop = ( message ) ->
  infodiv = document.createElement 'div'
  timer = null
  infodiv.style.width = '400px'
  infodiv.style.backgroundColor = '#efe'
  infodiv.style.border = '1px solid #7c7'
  infodiv.style.padding = '10px'
  infodiv.style.margin = '20px'
  infodiv.style.borderRadius = '10px'
  infodiv.innerHTML = message
  document.body.appendChild infodiv
  timer = window.setTimeout () ->
    document.body.removeChild infodiv
  , 3500
  return

saveOptions = () ->
  saveAlsoHideLogo()
  saveAlsoHideSearchbar()
  saveAlsoHideNavbar()
  saveAlsoHidePromo()
  infopop 'Settings saved!'
  return

setOption = ( key, value, cb ) ->
  typeOfCallback = typeof cb
  if typeOfCallback != 'function'
    cb = () ->
      return
  val = {}
  val[key] = value
  chrome.storage.sync.set val, cb
  return

getOption = ( key, cb ) ->
  typeOfKey = typeof key
  if typeOfKey == 'string'
    key = [key]
  chrome.storage.sync.get key, ( res ) ->
    cb res
    return
  return

getById = ( id ) ->
  document.getElementById id

saveAlsoHideLogo = () ->
  el = getById 'cbAlsoHideLogo'
  setOption el.id, el.checked
  return

saveAlsoHideSearchbar = () ->
  el = getById 'cbAlsoHideSearchbar'
  setOption el.id, el.checked
  return

saveAlsoHideNavbar = () ->
  el = getById 'cbAlsoHideNavbar'
  setOption el.id, el.checked
  return

saveAlsoHidePromo = () ->
  el = getById 'cbAlsoHidePromo'
  setOption el.id, el.checked
  return

chrome.storage.sync.get [
  'cbAlsoHideLogo'
  'cbAlsoHideSearchbar'
  'cbAlsoHideNavbar'
  'cbAlsoHidePromo'
], ( dataObject ) ->
  for key of dataObject
    try
      el = getById key
      if dataObject[key] == true
        el.checked = true
  return

document.getElementById('btnSave').onclick = saveOptions
