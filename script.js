// Função simples para validar a resposta do quiz interativo
function verificarResposta(eCorreto) {
    const elementoResultado = document.getElementById('resultado');
    
    if (eCorreto) {
        elementoResultado.textContent = "Parabéns! 🎉 A rotação de culturas mantém o solo fértil e reduz pragas de forma natural.";
        elementoResultado.style.color = "#2e7d32"; // Verde para correto
    } else {
        elementoResultado.textContent = "Ops, tente novamente! ❌ Essa prática prejudica o meio ambiente.";
        elementoResultado.style.color = "#c62828"; // Vermelho para incorreto
    }
}