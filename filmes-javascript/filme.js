// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    stopVideo(document.body);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// to stop the video
function stopVideo(element) {
    // getting every iframe from the body
    var iframes = element.querySelectorAll('iframe');
    // reinitializing the values of the src attribute of every iframe to stop the YouTube video.
    for (let i = 0; i < iframes.length; i++) {
       if (iframes[i] !== null) {
          var temp = iframes[i].src;
          iframes[i].src = temp;
       }
    }
 };
