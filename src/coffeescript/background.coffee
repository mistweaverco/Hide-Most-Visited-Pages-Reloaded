urls = [
  'chrome://newtab/'
  'chrome-search://local-ntp/local-ntp.html'
]

sendTabMessage = ( tab ) ->
  iof = urls.indexOf tab.url
  if iof != -1
    chrome.tabs.sendMessage tab.id, 'activate'
  return

onTabShow = ( tabId, changeInfo, tab ) ->
  if changeInfo.status == 'complete'
    sendTabMessage tab
  return

onDOMContentLoaded = () ->
  chrome.tabs.query {
    active: true
    currentWindow: true
  }, ( tabs ) ->
    sendTabMessage tabs[ 0 ]
    return
  return

chrome.tabs.onUpdated.addListener onTabShow

chrome.webNavigation.onDOMContentLoaded.addListener ( event ) ->
  onDOMContentLoaded()
  return

document.addEventListener 'DOMContentLoaded', ( event ) ->
  onDOMContentLoaded()
  return
