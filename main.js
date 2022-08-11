function setup() {
    canvas=createCanvas(900,600)
}
var x=0
var y=0
var drawCircle=""
var drawRect=""
var drawApple=""
var SpeechRecognition=window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function preload() {
    apple= loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCjE4gpnXFWOv1rWsNYbVum8GJERot-4dDMtJBXXSlXUa2KWWbEO7T3VR1ZcrD2mq6No&usqp=CAU")
}

function start() {
    document.getElementById("status").innerHTML="The System Is Listening. Please speak."
    recognition.start()
}
recognition.onresult=function (event) {
    console.log (event)
var content=event.results[0][0].transcript
document.getElementById("status").innerHTML="The speech has been recognized as"+content
if (content=="circle"){
  x=  Math.floor(Math.random() * 900);
  y= Math.floor(Math.random() * 600);
  drawCircle="set"
}
if (content=="rectangle"){
    x=  Math.floor(Math.random() * 900);
    y= Math.floor(Math.random() * 600);
    drawRect="set"
  }
  if (content=="apple"){
    x=  Math.floor(Math.random() * 900);
    y= Math.floor(Math.random() * 600);
    drawApple="set"
  }
}
function draw() {
    if (drawCircle="set") {
        circle(x,y,50)
        drawCircle=""
        }
        if (drawRect="set") {
            rect(x,y,30,60)
            drawRect=""
            }
            if (drawApple="set") {
                image(apple,x,y,30,60)
                drawApple=""
                }
}