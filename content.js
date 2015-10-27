//Listen for a message from elsewhere in the extension.
chrome.runtime.onMessage.addListener( 
    function(request, sender, sendResponse) {
        if( request.message === "pressedExecute" ) {
            
            
            //Here we use js to set most of the text colour to green.
            document.body.style.color="green";
            var elements = document.body.getElementsByTagName("*");
      
            for (i = 0; i < elements.length; i++)  {

                elements[i].style.color = "green"; 
            }
           
           
            //Collect the URL of the current page.
            var theURL = window.location.href;
            
            
            //Alert to prove that we are on the content.js page.
            alert("In content script.");
         
         
            //Distribute a response to the extension.
            chrome.runtime.sendMessage({"message": "changeColour", "url": theURL});
        }
    }
);

