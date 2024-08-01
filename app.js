
let button1=document.querySelector(".rightArrow");
let div1=document.querySelector(".firstGroup");
let div2=document.querySelector(".secondGroup");
let button2=document.querySelector(".leftArrow");


button1.addEventListener("click", ()=>{
   div2.classList.add("sec2Group");
   div2.style.transition="all .4s linear";
   div1.classList.add("fir1Group");
   div1.style.transition="all 1.2s linear";
});

button2.addEventListener("click", ()=>{
   div1.classList.remove("fir1Group");
   div1.style.transition="all .5s linear";
   div2.classList.remove("sec2Group");
   div2.style.transition="all 1.2s ease-out";
      
 });
 
 let button3=document.querySelector(".rightbottombutton");
 let mid1=document.querySelector(".middlemid1");
 let mid2=document.querySelector(".middlemid2");
 let openDiv=document.querySelector(".clickOpen");




openDiv.addEventListener("click",()=>{
   openDiv.classList.toggle("display");
   mid1.classList.remove("rightDownArrow_Changed1");
   mid2.classList.remove("rightDownArrow_Changed2");
   
})

let midbarDiv=document.querySelector(".midMidbarchild2");
let button4=document.querySelector(".arrowDown");

button4.addEventListener("click",()=>{
   midbarDiv.classList.toggle("display");
})

midbarDiv.addEventListener("click",()=>{
   midbarDiv.classList.toggle('display');
});


let button5=document.querySelector(".left1")
let firstDiv=document.querySelector(".lower11_mid_lowermid");
let oneMostDiv=document.querySelector(".lower_mid_lowermid");
let secondDiv=document.querySelector(".lower22_mid_lowermid");
let button6=document.querySelector(".right1");


function yesRepeat1(){
   button5.addEventListener("click",()=>{
      action1();
      actionNext1();
   });  
}
function action1(){
   firstDiv.classList.add("firstDiv");
   firstDiv.style.transition="all .5s linear";
   secondDiv.classList.remove('SecondDiv');
   oneMostDiv.classList.add("oneOftwo");
}
function actionNext1(){
   button5.addEventListener("click", ()=>{
      firstDiv.classList.remove("firstDiv");
      firstDiv.style.transition="all .5s linear";
      oneMostDiv.classList.remove("oneOftwo");
      yesRepeat1();
   })
}


function yesRepeat2(){
   button6.addEventListener("click",()=>{
      action2();
      actionNext2();
   })
} 

function action2(){
   secondDiv.classList.add('SecondDiv');
   secondDiv.style.transition="all .5s linear";
   firstDiv.classList.remove("firstDiv");
   oneMostDiv.classList.add("oneOftwo");
}

function actionNext2(){
   button6.addEventListener("click",()=>{
      secondDiv.classList.remove('SecondDiv');
      secondDiv.style.transition="all .5s linear";
      oneMostDiv.classList.remove("oneOftwo");
      yesRepeat2();
   });
}
yesRepeat1();
yesRepeat2();

let divFirst=document.querySelector(".lower1_mid_lowermid");
let divSec=document.querySelector(".lower2_mid_lowermid");
let divThird=document.querySelector(".lower3_mid_lowermid");
let button7=document.querySelector(".left2");
let button8=document.querySelector(".right2");

function yesRepeat3(){
   button7.addEventListener("click",()=>{
      action3();
      actionNext3();
   });
}

function action3(){
   divSec.classList.add("onetrans");
   divSec.style.transition="all .5s linear";
   divThird.classList.remove('sectrans');
   divFirst.classList.add("impfirst");
}
function actionNext3(){
   button7.addEventListener("click",()=>{
      divSec.classList.remove("onetrans");
      divSec.style.transition="all .5s linear";
      divFirst.classList.remove("impfirst");
      yesRepeat3();
   });
}
yesRepeat3();

function yesRepeat4(){
   button8.addEventListener("click",()=>{
      action4();
      actionNext4();
   });
}
function action4(){
   divThird.classList.add("sectrans");
   divThird.style.transition="all .5s linear";
   divSec.classList.remove("onetrans");
   divFirst.classList.add("impfirst"); 
}
function actionNext4(){
   button8.addEventListener("click",()=>{
      divThird.classList.remove("sectrans");
      divThird.style.transition="all .5s linear";
      divFirst.classList.remove("impfirst"); 
      yesRepeat4();
   });
}
yesRepeat4();



let newBtn=document.querySelector(".ham i");
let div3=document.querySelector("#newNav");
let div4=document.querySelector(".middiv");

newBtn.addEventListener("click",()=>{
   div3.classList.toggle("newdiv");
   div4.classList.toggle("afterClick");
});



let arrow1=document.querySelector("#DownArrow1");
let arrow2=document.querySelector(".bottom1-Rightbar #DownArrow1");
let arrow3=document.querySelector(".bottom2-Rightbar #DownArrow1");

let firstmidRight=document.querySelector(".midRightbar");
let secmidRight=document.querySelector(".bottom1-Rightbar");
let thirdmidRight=document.querySelector(".bottom2-Rightbar");
let fourthmidRight=document.querySelector(".bottom3-Rightbar");


function rightChanged1(){
   arrow1.addEventListener("click",()=>{
      firstmidRight.classList.toggle("midRightbar-change1");
      secmidRight.classList.toggle("bottom1-Rightbar-change2");
      thirdmidRight.classList.toggle("bottom2-Rightbar-change2");
      fourthmidRight.classList.toggle("bottom3-Rightbar-change2");
      mid2.classList.toggle("rightDownArrow_Changed3");
      changed1right();
      changed2right();
      changed3right();
   })
  
}

rightChanged1();
function rightChanged2(){
   arrow2.addEventListener("click",()=>{
      secmidRight.classList.toggle("bottom1-Rightbar-change1");
      thirdmidRight.classList.toggle("bottom2-Rightbar-change2");
      fourthmidRight.classList.toggle("bottom3-Rightbar-change2");
      mid2.classList.toggle("rightDownArrow_Changed4");
   })
}
rightChanged2();
function rightChanged3(){
   arrow3.addEventListener("click",()=>{
      thirdmidRight.classList.toggle("bottom2-Rightbar-change1");
      fourthmidRight.classList.toggle("bottom3-Rightbar-change2");
      mid2.classList.toggle("rightDownArrow_Changed4");
   })
}
rightChanged3();

function changed1right(){
   arrow2.addEventListener("click",()=>{
      thirdmidRight.classList.toggle("bottom2-Rightbar-change3");
      fourthmidRight.classList.toggle("bottom3-Rightbar-change3");
      mid2.classList.remove("rightDownArrow_Changed3");
      mid2.classList.remove("rightDownArrow_Changed4");
      mid2.classList.toggle("rightDownArrow_Changed5");
      mid2.classList.remove("rightDownArrow_Changed6");
      mid2.classList.remove("rightDownArrow_Changed7");

   })
}
function changed2right(){
   arrow3.addEventListener("click",()=>{
      fourthmidRight.classList.toggle("bottom3-Rightbar-change2");
      fourthmidRight.classList.toggle("bottom3-Rightbar-change3");
      fourthmidRight.classList.toggle("bottom3-Rightbar-change4");
      mid2.classList.toggle("rightDownArrow_Changed6");

   })
}
function changed3right(){
   button3.addEventListener("click",()=>{
      mid2.classList.toggle("rightDownArrow_Changed7");

   })
}
button3.addEventListener("click",()=>{
   // mid1.classList.add("rightDownArrow_Changed1");
   mid2.classList.toggle("rightDownArrow_Changed2");
   openDiv.classList.toggle("display");
   mid2.classList.remove("rightDownArrow_Changed7");
})