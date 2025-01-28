var randno1 = Math.floor(Math.random() * 6) +1;
var randImg = "dice"+randno1+".png";
var randSrc = "images/"+randImg;

document.querySelector("img")[0].setAttribute("srt", randSrc);

var randno2 = Math.floor(Math.random() * 6) +1;
var randImg = "dice"+randno2+".png";
var randSrc = "images/"+randImg;

document.querySelector("img")[1].setAttribute("srt", randSrc);

