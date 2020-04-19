chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#03fcf0'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher()
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });   
 
 
 
});