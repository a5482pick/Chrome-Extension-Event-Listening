//Listen for a message from elsewhere in the extension.
chrome.runtime.onMessage.addListener( 
    function(request, sender, sendResponse) {
        if( request.message === "pressedExecute" ) {

            //Collect the URL of the current page.
            var theURL = window.location.href;
            
            //Alert to prove that we are on the content.js page.
            alert("In content script.");
         
            //Distribute a response to the extension.
            chrome.runtime.sendMessage({"message": "changeColour", "url": theURL});
        }
    }
);

