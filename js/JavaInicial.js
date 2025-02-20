document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    // Armazenar as pontuações para cada Pokémon
    let scores = {
        Bulbasaur: 0,
        Charmander: 0,
        Squirtle: 0
    };

    // Captura as respostas e aumenta as pontuações correspondentes
    const answers = new FormData(event.target);
    
    for (let [question, answer] of answers.entries()) {
        scores[answer] += 1;
    }

    // Determina o Pokémon com a maior pontuação
    let maxScore = Math.max(scores.Bulbasaur, scores.Charmander, scores.Squirtle);
    let resultPokemon = "";

    if (maxScore === scores.Bulbasaur) {
        window.location.href = "pokePlanta.html";
    } else if (maxScore === scores.Charmander) {
        window.location.href = "pokeFogo.html";
    } else {
        window.location.href = "pokeAgua.html";
    }

    // Exibe o resultado
    document.getElementById("result").textContent = `Você seria o Pokémon: ${resultPokemon}`;
});
