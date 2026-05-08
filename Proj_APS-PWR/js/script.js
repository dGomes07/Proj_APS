// Função principal do orçamento
function calcularOrcamento() {

    // Captura da área
    let area = Number(document.getElementById("area").value);

    // Captura do serviço selecionado
    let servicos = document.getElementsByName("servico");

    let valorServico = 0;
    let nomeServico = "";

    for (let i = 0; i < servicos.length; i++) {

        if (servicos[i].checked) {

            valorServico = Number(servicos[i].value);

            if (valorServico === 10) {
                nomeServico = "Básico";
            }

            else if (valorServico === 20) {
                nomeServico = "Médio";
            }

            else {
                nomeServico = "Avançado";
            }
        }
    }

    // Cálculo base
    let total = area * valorServico;

    // Extras
    if (document.getElementById("irrigacao").checked) {
        total += 200;
    }

    if (document.getElementById("analise").checked) {
        total += 150;
    }

    // Mensagem simples
    let mensagem = "";

    if (total < 1000) {
        mensagem = "Projeto ideal para pequenos terrenos.";
    }

    else if (total < 3000) {
        mensagem = "Projeto recomendado para áreas médias.";
    }

    else {
        mensagem = "Projeto indicado para grandes áreas.";
    }

    // Exibição do resultado
    document.getElementById("resultado").innerHTML = `
        <h3>Resultado do Orçamento</h3>

        <p><strong>Serviço:</strong> ${nomeServico}</p>

        <p><strong>Valor Total:</strong> R$ ${total}</p>

        <p>${mensagem}</p>
    `;

    // Salvando no localStorage
    localStorage.setItem("ultimoOrcamento", total);
}