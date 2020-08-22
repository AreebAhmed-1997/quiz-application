var score = 0
function calculating_the_result(){
    var q_right_answer = document.getElementById('question1')
    var q_wrong_anser1a = document.getElementById('question2')
    var q_wrong_anser1b = document.getElementById("question3")
    var q_wrong_anser1c = document.getElementById("question4")

    if( q_right_answer.checked == true){
        score+=10
    }
    else{
        score+=0
    }
    

    var q_right_answer1 = document.getElementById("question11")
    var q_wrong_anser2a = document.getElementById("question12")
    var q_wrong_anser2b  = document.getElementById("question13")
    var q_wrong_anser2c  = document.getElementById("question14")
    
    if( q_right_answer1.checked == true){
        score+=10
    }
    else{
        score+=0
    }

    var q_right_answer2  = document.getElementById("question21")
    var q_wrong_anser3a  = document.getElementById("question22")
    var q_wrong_anser3b  = document.getElementById("question23")
    var q_wrong_anser3c = document.getElementById("question24")
    if( q_right_answer2.checked == true){
        score+=10
    }
    else{
        score+=0
    }
    var q_right_answer3 = document.getElementById("question31")
    var q_wrong_anser4a = document.getElementById("question32")
    var q_wrong_anser4b = document.getElementById("question33")
    var q_wrong_anser4c = document.getElementById("question34")
    if( q_right_answer3.checked == true){
        score+=10
    }
    else{
        score+=0
    }
     document.write("your score is " + score++ )
}