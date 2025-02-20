// Função para capturar os dados do formulário de login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Pegando os valores inseridos pelo usuário
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Armazenando os dados no localStorage
    localStorage.setItem("username", username);

    // Exibindo a mensagem de login bem-sucedido
    document.getElementById("login-message").textContent = "Login bem-sucedido!";

    // Redirecionando para a página principal
    window.location.href = "PokeHome.html";  // Substitua pelo nome da página principal
});
