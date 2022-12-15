const questions = {
    1: {
        number: 1,
        question: 'How many rings do the Boston Celtics have?',
        answers: ['10', '23', '17', '14'],
        correct: '17'
    },
    2: {
        number: 2,
        question: 'When the Boston Red Sox won the world series in 2004, how many years was the championship drought they snapped?',
        answers: ['53', '86', '19', '32'],
        correct: '86'
    },
    3: {
        number: 3,
        question: 'How many division championships have the Boston Bruins won?',
        answers: ['22', '28', '17', '20'],
        correct: '22'
    },
    4: {
        number: 4,
        question: 'How many division titles did the New England Patriots claim during their dynasty from 2001-2019?',
        answers: ['10', '17', '8', '13'],
        correct: '17'
    }
}

// set counter
// on click increment counter
// use counter as key for correct question in object
let counter = 0;
let score = 0;
const form = document.querySelector('form')

let button =  document.querySelector('.next');
button.addEventListener('click', function() {
    let radios = document.querySelectorAll('input')
    for (radio of radios) {
        if(radio.checked) {
            radio.value === questions[counter].correct ? score += 1 : {}
        }
    }
    form.innerHTML = '';
    counter += 1;
    if (counter < 5) {
        let myP = document.createElement('p')
        myP.textContent = `Question ${questions[counter].number} of 4`
        myP.classList.add('question-title')
        form.appendChild(myP)
        myP = document.createElement('p')
        myP.textContent = questions[counter].question
        myP.classList.add('question-content')
        form.appendChild(myP)
        for (answer of questions[counter].answers) {
            let span = document.createElement('span')
            span.classList.add('answer')
            let radio = document.createElement('input')
            radio.setAttribute('type', 'radio')
            radio.setAttribute('name', 'answer')
            radio.value = answer
            span.appendChild(radio)
            let label = document.createElement('label')
            label.textContent = answer;
            span.appendChild(label)
            form.appendChild(span)
        }
    } else if (counter === 5) {
        let myP = document.createElement('p');
        myP.textContent = `Your score is ${score} out of 4.
                            Click Next to Try Again.`
        form.appendChild(myP)
    } else {
        counter = 0;
    }
})
