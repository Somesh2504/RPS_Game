let userScore=0;
let compScore=0;
const messege=document.querySelector(".messege");
const user=document.querySelector(".userscore");
const comp=document.querySelector(".compscore");
let compGen=(userChoice)=>{
    let options=["paper","rock","scissors"];
    let compChoice=options[Math.floor(Math.random()*3)]
    console.log("comp choice :",compChoice);
    console.log("user choice :",userChoice);
    if(userChoice===compChoice){
       messege.innerHTML="Match Draw";
       messege.style.backgroundColor="#0e2872";
    }
    else if(userChoice=="rock"&&compChoice=="paper"){
        messege.innerHTML="you lost rock beaten by paper";
        messege.style.backgroundColor="red";
        compScore+=1;
        comp.innerHTML=compScore;
    }
    else if(userChoice=="rock"&&compChoice=="scissors"){
        messege.innerHTML="you won rock beat scissors";
        messege.style.backgroundColor="green";
        userScore+=1;
        user.innerHTML=userScore;
     }
     else if(userChoice=="paper"&&compChoice=="scissors"){
      messege.innerHTML="you lost paper beaten by scissors";
      messege.style.backgroundColor="red";
      compScore+=1;
      comp.innerHTML=compScore;
   }
   else if(userChoice=="paper"&&compChoice=="rock"){
      messege.innerHTML="you won paper beat rock";
      messege.style.backgroundColor="green";
      userScore+=1;
      user.innerHTML=userScore;
   }
   else if(userChoice=="scissors"&&compChoice=="rock"){
      messege.innerHTML="you lost scissors beaten by rock";
      messege.style.backgroundColor="red";
      compScore+=1;
      comp.innerHTML=compScore;
   }
   else if(userChoice=="scissors"&&compChoice=="paper"){
      messege.innerHTML="you won scissors beats paper";
      messege.style.backgroundColor="green";
      userScore+=1;
      user.innerHTML=userScore;
   }
     
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice) => {
   choice.addEventListener("click",()=>{
        let userch=choice.getAttribute("id");
        compGen(userch);
   });
});