function mostrarMensagem() {

    alert(
        "Esta função faz parte do protótipo demonstrativo do LittleLion."
    );

}


function enviarFormulario(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert(
        "Mensagem enviada com sucesso, " + nome + "!"
    );

}


let pontos = 1000;


function girarTigre() {

    const simbolos = [
        "🐯",
        "⭐",
        "💎",
        "🍀",
        "🦁",
        "🔥"
    ];

    const slot1 =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    const slot2 =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    const slot3 =
        simbolos[Math.floor(Math.random() * simbolos.length)];


    const slots =
        document.querySelectorAll(".slot");


    slots[0].textContent = slot1;
    slots[1].textContent = slot2;
    slots[2].textContent = slot3;


    const resultado =
        document.getElementById("resultado");


    if (
        slot1 === slot2 &&
        slot2 === slot3
    ) {

        pontos += 100;

        resultado.textContent =
            "🎉 Combinação encontrada! +100 créditos virtuais.";

    } else {

        pontos -= 10;

        resultado.textContent =
            "Tente novamente! -10 créditos virtuais.";

    }


    document.getElementById("pontos").textContent =
        pontos;

}