/* global document */
var myheading = document.querySelector('img');

myheading.onclick = function () {
    var myim = myheading.getAttribute('src');
    if (myim === 'images/puppy.jpg') {
        myheading.setAttribute('src', 'images/poli.jpeg');
    } else {
        myheading.setAttribute('src', 'images/puppy.jpg');
    }
};

var but=document.querySelector('button');

but.onclick=function(){
    myheading.setAttribute('src', 'images/savdog.gif');
}
