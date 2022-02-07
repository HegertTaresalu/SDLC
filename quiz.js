(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "which of these options describe Waterfall",
        answers: {
          a: "model where execution of processes happens in a sequential manner in a V-shape",
          b: "process starts with a simple implementation of a small set of the software requirements and iteratively enhances the evolving versions until the complete system is implemented and ready to be deployed.",
          c: " first Process Model to be introduced. It is also referred to as a linear-sequential life cycle model. It is very simple to understand and use. In a waterfall model, each phase must be completed before the next phase can begin and there is no overlapping in the phases."
        },
        correctAnswer: "c"
      },
      {
        question: " combination of iterative and incremental process models with focus on process adaptability and customer satisfaction by rapid delivery of working software product ",
        answers: {
          a: "Agile ",
          b: "Spiral",
          c: " iterative"
        },
        correctAnswer: "c "
      },
      {
        question: "Which of these describe V model",
        answers: {
          a: "model where execution of processes happens in a sequential manner in a V-shape. It is also known as Verification and Validation model.",
          b: "very simple to understand and use. In a waterfall model, each phase must be completed before the next phase can begin and there is no overlapping in the phases.",
          c: " combination of iterative and incremental process models with focus on process adaptability and customer satisfaction by rapid delivery of working software product.",
    
        },
        correctAnswer: "a"
      },
      {
        question: "First phase of SDMC ",
        answers: {
          a: "Planning Stage",
          b: "Design and Prototyping Stage",
          c: " Software Testing Stage",
    
        },
        correctAnswer: "a"
      },
      {
        question: "Second phase of SDMC ",
        answers: {
          a: "Defining Requirements",
          b: "Design and Prototyping Stage",
          c: " Software Testing Stage",
    
        },
        correctAnswer: "a"
      },
      {
        question: "third phase of SDMC ",
        answers: {
          a: "Designing the Product Architecture",
          b: "Design and Prototyping Stage",
          c: " Defining Requirements",
    
        },
        correctAnswer: "a"
      },
      {
        question: "fourth phase of SDMC ",
        answers: {
          a: "Building or Developing the Product",
          b: "Design and Prototyping Stage",
          c: " Defining Requirements",
    
        },
        correctAnswer: "a"

    },
    {
        question: "fifth phase of SDMC ",
        answers: {
          a: "Testing the Product",
          b: "Design and Prototyping Stage",
          c: " Defining Requirements",
    
        },
        correctAnswer: "a"

    },

    {
        question: " The Final phase of SDMC ",
        answers: {
          a: "Deployment and maintanance",
          b: "Design and Prototyping Stage",
          c: " Defining Requirements",
    
        },
        correctAnswer: "a"

    },
    {
        question: "Which of these describe Prototype Model ",
        answers: {
          a: "model in which the prototype is developed prior to the actual software.",
          b: "V-shape",
          c: " Waterfall",

        },
        correctAnswer: "b"

    }


];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();