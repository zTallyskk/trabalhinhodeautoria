// Recuperando o nome de usuário armazenado no localStorage
const username = localStorage.getItem("username");

if (username) {
    // Exibindo o nome de usuário na página principal
    document.getElementById("username-display").textContent = username;
} else {
    // Se o nome de usuário não estiver no localStorage, redireciona para a página de login
    window.location.href = "FormLogin.html";  // Página de login
}

// Função de logout
document.getElementById("logout-btn").addEventListener("click", function() {
    // Removendo o nome de usuário do localStorage
    localStorage.removeItem("username");

    // Redirecionando para a página de login
    window.location.href = "FormLogin.html";  // Página de login
});
