var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

document.getElementById('gerarPdfButton').addEventListener('click', function () {
    var pdf = require("html-pdf");
    var FileSaver = require("file-saver");

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

    pdf.create(conteudo, {}).toFile(function (err, res) {
        if (err) {
            console.log("Um erro aconteceu :(");
        } else {
            // Usando o file-saver para iniciar o download
            FileSaver.saveAs(res.filename, 'pdf-receita.pdf');
        }
    });
});
