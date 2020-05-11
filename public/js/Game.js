

var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function randomValue(alphabet)
{
var len=alphabet.length;
var randomAlpha=Math.random();
randomAlpha=randomAlpha*len;
var b=Math.floor(randomAlpha+1);
return b;
}
var value=0;
 var clickBtn="";
 var scoreValue=0;
 var wrongValue=0;

//this is that function when user will click on any button he will get like push that button
var timer=100;

var audio = new Audio('sounds/timer.m4a');

function Timer() {


var interval=window.setInterval(function() {
 $(".timer").text(timer)

 timer=timer-1;
 console.log(timer)
if(timer==0){
window.clearInterval(interval);
$("section#game").remove();
$("nav").after("<section id='tryAgain'><p class='score1'></p><div class='row try-again' style='padding-top:0; padding-bottom:100px;'><div class='col-lg-12'><button  onclick='load()' class='try-btn' type='submit' name='button'> <img class='try-img' src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_play_arrow_48px-512.png' alt=''> </i></button></form></div></div></section>")
$(".score1").text("High-Score: "+scoreValue)
}
}, 500);
}
/*
$("button.start").click(function functionName() {
audio.play();


})*/

$(".start-game").click(function() {
  $("div.Game").remove();
  $(".hideObject").css("visibility","visible")
   Timer();
   mainFunction();


})

function mainFunction() {


$(".click-btn").click(function(){

  clickBtn=$(this).attr("id");
   $("#"+clickBtn).addClass("pressed");
   setTimeout(function(){$("#"+clickBtn).removeClass("pressed");},200);
    var b=randomValue(alphabet);
   //$(".show-Alpha").text(alphabet[b]);

   $("div#"+clickBtn).click(function() {
     var str=$(this).html();

     var btnClicked=str.slice(11,16)
     console.log(btnClicked);
     var toMatchValue=$("."+btnClicked).html();
     var showValue=$(".show-Alpha").html();
     console.log("show "+showValue)

    if(toMatchValue==showValue)
    {
      $("#"+clickBtn).addClass("rightPressed");
      setTimeout(function(){$("#"+clickBtn).removeClass("rightPressed");},200);
        scoreValue=scoreValue+5;
        var audio = new Audio('sounds/Correct-answer.mp3');
        audio.play();
      $(".score").text("Score: "+scoreValue)

      setTimeout(ChangeAlpha,200);
      console.log(scoreValue);

    }
    else {
       $("#"+clickBtn).addClass("wrongPressed");
       var wrongSound = new Audio('sounds/wrong-answer.mp3');
       wrongSound.play();
       setTimeout(function(){
         ChangeAlpha();

         wrongValue=wrongValue+1;
         console.log("wrongValue "+wrongValue)
         $("#"+clickBtn).removeClass("wrongPressed");},200);
      /*   if(wrongValue==3)
         {
           $("section#game").remove();
           $("nav").after("<section id='tryAgain'><div class='row try-again'><div class='col-lg-12'><h1 class='try-text'>Try Again!</h1> <button  onclick='load()' class='try-btn' type='submit' name='button'> <img class='try-img' src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_play_arrow_48px-512.png' alt=''> </i></button></form></div></div></section>")
         }*/

    }
   })

if(wrongValue>2)
{
  $("section#game").remove();
  $("nav").after("<section id='tryAgain'><p class='score1'></p><div class='row try-again' style='padding-top:0; padding-bottom:100px;'><div class='col-lg-12'><h1 class='try-text'>Play Again!</h1> <button  onclick='load()' class='try-btn' type='submit' name='button'> <img class='try-img' src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_play_arrow_48px-512.png' alt=''> </i></button></form></div></div></section>")
  $(".score1").text("Score: "+scoreValue)
}
});

}
function load() {
  location.reload();


}

///this is that function where user will click on start Game then he will get new page to play a game ....
function ChangeAlpha() {


var b=randomValue(alphabet);
$(".show-Alpha").text(alphabet[b]);
  // console.log("b= "+b)
 var numbers=[0];
  if(b>=26)
   {
     numbers=[b,b-2,b-1,b-4];
   }
   else
   {
    numbers=[b,b+2,b+1,b+4];
   }
  var numbers = [b, b+1, b+2, b+3];
  var random1 = notRepeatValue(numbers);
//  console.log(b+"    "+random1);


   $(".type1").text(alphabet[random1[0]]);
   $(".type2").text(alphabet[random1[1]]);
   $(".type3").text(alphabet[random1[2]] );
   $(".type4").text(alphabet[random1[3]]);

 }



//this that function which will generate random  numbers  in array without repeating that numbers.....

function notRepeatValue(o)
{
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
