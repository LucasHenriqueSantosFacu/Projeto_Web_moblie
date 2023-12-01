var pdf = require("html-pdf");

var nomePaciente = "Lorena";
var nomeMedico = "Maria";
var descricao = "10mg de dipirona 3x ao dia por 5 dias";

var conteudo = `
    <h1> RECEITUARIO MÉDICO </h1>
    <hr>
    <p>Paciente: ${nomePaciente} </p>
    <p>
    ${descricao}
    </p>
    <hr>
    <p>Médico(a): ${nomeMedico}</p>

`

pdf.create(conteudo, {}).toFile("../pdf/pdf-receita.pdf", (err, res) => {
    if (err) {
        console.log("Um erro aconteceu :(");
    } else {
        console.log(res);
    }
})