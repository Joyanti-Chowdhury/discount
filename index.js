document.getElementById('copyButton').addEventListener('click', function() {
    // Select the text field
    console.log("clicked")
    var copyText = document.getElementById('textToCopy');
    
    console.log(copyText)
    
    copyText.select("copied");
   
  });




let counter = 0;
const counterElement = document.getElementById('counter');

function updateCounter() {
    counter++;
    counterElement.textContent = counter;
}

setInterval(updateCounter, 1000);