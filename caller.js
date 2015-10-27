//Wait for the popup button to be pressed.
document.getElementById('execute').addEventListener('click',executeIt);

//Send message to content script when 'execute' is pressed.
function executeIt()  {
    
    //An example of how to dynamically change the popup. (e.g. activate a CSS fle.)
    document.getElementById('popupCSS').disabled = false;
    
    //Query the active tab.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        
        //An example of how to programmatically inject CSS into a webpage.
        chrome.tabs.insertCSS({file:"content.css"});
        
        //Send a message to a content script that is associated with the webpage.
        chrome.tabs.sendMessage(activeTab.id, {"message": "pressedExecute"});
    });
}

//Resond to response from elsewhere e.g. background or content scripts.
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "changeColour" ) {
            
            //Alert the user of the changes, with the message from the content script.
            var string = "You have returned from the content script associated with:  " + request.url;  
            alert(string);
        }
    }
);
