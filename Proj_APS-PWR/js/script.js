function calc_orc() {

    let metragem = Number(document.getElementById("area").value);

    let tipos = document.getElementsByName("servico");

    let preco = 0;
    let serv = "";

    for (let x = 0; x < tipos.length; x++) {

        if (tipos[x].checked) {

            preco = Number(tipos[x].value);

            switch (preco) {

                case 10:
                    serv = "Básico";
                    break;

                case 20:
                    serv = "Médio";
                    break;

                default:
                    serv = "Avançado";
            }
        }
    }

    let valorFinal = metragem * preco;

    let irrig = document.getElementById("irrig");
    let analiseSolo = document.getElementById("soloCheck");

    if (irrig.checked) {
        valorFinal += 200;
    }

    if (analiseSolo.checked) {
        valorFinal += 150;
    }

    let aviso = "";

    if (valorFinal < 1000) {

        aviso = "Projeto ideal para pequenos terrenos.";

    } else if (valorFinal < 3000) {

        aviso = "Projeto recomendado para áreas médias.";

    } else {

        aviso = "Projeto indicado para grandes áreas.";
    }

    document.getElementById("resultado").innerHTML = `
        <h3>Resultado do Orçamento</h3>

        <p><strong>Serviço:</strong> ${serv}</p>

        <p><strong>Valor Total:</strong> R$ ${valorFinal}</p>

        <p>${aviso}</p>
    `;

    localStorage.setItem("ult_orc", valorFinal);
}
