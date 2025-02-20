const questions = [
    {
        question: "Qual é o número do Pokémon Pikachu na Pokédex?",
        options: ["25", "10", "50", "100"],
        correctAnswer: "25"
    },
    {
        question: "Qual é o tipo do Pokémon Bulbasaur?",
        options: ["Fogo e Voador", "Água e Psíquico", "Planta e Veneno", "Normal"],
        correctAnswer: "Planta e Veneno"
    },
    {
        question: "Qual é o nome da evolução final de Charmander?",
        options: ["Charizard", "Charmeleon", "Squirtle", "Pidgeot"],
        correctAnswer: "Charizard"
    },
    {
        question: "Quantos Pokémon há na primeira geração?",
        options: ["151", "100", "120", "200"],
        correctAnswer: "151"
    },
    {
        question: "Qual é o Pokémon inicial de Água na primeira geração?",
        options: ["Bulbasaur", "Squirtle", "Charmander", "Pidgey"],
        correctAnswer: "Squirtle"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = option;
        optionDiv.onclick = () => checkAnswer(option, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });
}

function checkAnswer(selectedOption, optionElement) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Desabilitar as opções após clicar
    document.querySelectorAll('#options div').forEach(div => {
        div.style.pointerEvents = 'none'; // Desabilita a interação com as opções
    });

    // Marcar a opção correta
    if (selectedOption === correctAnswer) {
        optionElement.classList.add('selected');
        score++;
    } else {
        optionElement.classList.add('incorrect');
        // Marcar a opção correta
        document.querySelectorAll('#options div').forEach(div => {
            if (div.textContent === correctAnswer) {
                div.classList.add('selected');
            }
        });
    }

    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('next-btn').disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    const resultText = `Você acertou ${score} de ${questions.length} perguntas.`;
    document.getElementById('score').textContent = resultText;
    document.getElementById('result').classList.remove('hidden');
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    loadQuestion();
    document.getElementById('next-btn').disabled = true;
}

window.onload = function() {
    loadQuestion();
    document.getElementById('next-btn').disabled = true;
};
