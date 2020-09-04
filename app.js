var score = 0

function calculating_the_result(){
    var q_right_answer = document.getElementById('question1')
    if(  q_right_answer.checked == true){
        score+=10  
    }
  
    else{
        score+=0
    }

    var q_right_answer1 = document.getElementById("question11")
    if( q_right_answer1.checked == true){
        score+=10
    }
    else{
        score+=0
    }

    var q_right_answer2  = document.getElementById("question21")
    if( q_right_answer2.checked == true){
        score+=10
    }
    else{
        score+=0
    }

    var q_right_answer3 = document.getElementById("question31")
    if( q_right_answer3.checked == true){
        score+=10
    }
    else{
        score+=0
    }

    var q_right_answer4 = document.getElementById("question41")
    if(  q_right_answer4.checked == true){
    score+=10  
    }
    else{
    score+=0
    }

    var q_right_answer5 = document.getElementById("question51")
    if(  q_right_answer5.checked == true){
    score+=10  
    }
    else{
    score+=0
    }

    var q_right_answer6 = document.getElementById("question61")
    if(  q_right_answer6.checked == true){
    score+=10  
    }

    else{
    score+=0
    }
    var q_right_answer7 = document.getElementById("question71")
    if(  q_right_answer7.checked == true){
    score+=10  
    }

    else{
    score+=0
    }

    var q_right_answer8 = document.getElementById("question81")
    if(  q_right_answer8.checked == true){
    score+=10  
    }
    else{
    score+=0
    }       

    var q_right_answer9 = document.getElementById("question91") 
    if(  q_right_answer9.checked == true){
    score+=10  
    }

    else{
    score+=0
    }
    
    
    document.querySelector("#bod").style.backgroundColor=" green";
    document.querySelector("#bod").style.color=" #fff";
    document.querySelector("#bod11").style.backgroundColor=" green";
    document.querySelector("#bod11").style.color=" #fff";
    document.querySelector("#bod21").style.backgroundColor=" green";
    document.querySelector("#bod21").style.color=" #fff";
    document.querySelector("#boda").style.backgroundColor=" green";
    document.querySelector("#boda").style.color=" #fff";
    document.getElementById("ANSWER").innerHTML="your score is &nbsp;"+"<br>"+ score++ +"/100"
 
    if (score++ >=80 ){
        document.getElementById("ANSWER1").innerHTML="your grade is A++ " 
    }
   else if (score++ >=60){
    document.getElementById("ANSWER1").innerHTML="your grade is A+ " 
    }

    else if (score++ >=40){
    document.getElementById("ANSWER1").innerHTML="your grade is B" 
    }
    else if (score++ >=20){
    document.getElementById("ANSWER1").innerHTML="your grade is C" 
    }
    else{
    document.getElementById("ANSWER1").innerHTML="your grade is F" 
    }
document.getElementById("btn0").disabled = true;


}