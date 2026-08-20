const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");
});

const botoes = document.querySelectorAll("article button");

botoes.forEach(function (botao) {
    let curtiu = false;
    
    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        
        if (!curtiu) {
            texto.textContent = Number(texto.textContent) + 1;
            curtiu = true;
        } else {
            texto.textContent = Number(texto.textContent) - 1;
            curtiu = false;
        }
    });
});