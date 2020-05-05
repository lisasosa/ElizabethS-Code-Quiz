window.onload=function(){
var ul = document.getElementById('ul');
var scoreBox = document.getElementById('scoreBox');


var quizBox = document.getElementById('questionBox');
var firstOption = document.getElementById('option1');
var secondOption = document.getElementById('option2');
var thrirdOption = document.getElementById('option3');
var fourthOption = document.getElementById('option4');

//Timer

const countStartMinutes = 10;
let time = countStartMinutes * 60;
var timerElement = document.getElementsById('timer');

    var quizAp={
         quetions:[
                    {questionList: 'What does HTML stands for?', 
                    options:['Hypertes Makeup Language', 'Hypertext Markup Language', 'Hypo Making up a lang', 'none of the options'], 
                    answer: 2},
                    {questionList: 'Where should the title be placed in an HTML doc?', 
                    options:['body', 'script tags', 'head', ' article tags'], 
                    answer: 3},
                    {questionList: 'when calling a class in from HTML in CSS what should it start whith?', 
                    options:['period', 'hashtag', 'comma', 'semicolon'], 
                    answer: 1},
                    {questionList: 'We start conting from?', 
                    options:['zero', 'one', 'two', 'three'], 
                    answer: 1},
                
                  ],
            index: 0
            load: function() {
                if(quizAp.index < = quizAp.quetions.length - 1){
                quizBox.innerHTML = quizAp.quetions[quizAps.index].questionList;
                firstOption.innerHTML = quizAp.quetions[quizAp.index].options[0];
                secondOption.innerHTML = quizAp.quetions[quizAp.index].options[1];
                thrirdOption.innerHTML = quizAp.quetions[quizAp.index].options[2];
                fourthOption.innerHTML = quizAp.quetions[quizAp.index].options[3];
                scoreBox.innerHTML = quizAp.quetions.length+ "/" + quizAp.score;
            };
          
           }
            next: function(){
                quizAp.index++;
                quizAp.load();
           }
            check : function(selection){

                    var id = selection.id.split('');

                    if(id[id.lenght - 1] == quizAp.quetions[quizAp.index.answer){  
                        scoreBox.innerHTML = quizAp.quetions.length + "/" + quizAp.score;
                      
                        selection.ClassName = "Correct";
                        selection.innerHTML = "Correct";
                        quizAp.scoreBox();
                    }
                    else{
                        selection.ClassName = "Wrong"
                        selection.innerHTML = "Wrong"
                    }
    },
   
    score:0,
    scoreBox:function() {
        scoreBox.innerHTML = quizAp.question.lenght + "/" + quizAp.score;
    }

}

    window.onload=quizAp.load();

    function button(selection) {
        quizAp.check(selection);
        quizAp.notClickAble();
    }

    function next() {
        quizAp.next();
        quizAp.clickAble();
    }

    setInterval(countdown, 1000);
    function countdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        timerElement.innerHTML = minutes + seconds;
        time--;

    }
}
