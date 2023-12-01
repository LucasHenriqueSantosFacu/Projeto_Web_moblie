function cadastrar() {
    var firsname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var email = document.getElementById('email').value
    var number = document.getElementById('numer').value
    var password = document.getElementById('password').value

    console.log(JSON.stringify({
        firsname: firsname,
        lastname: lastname,
        number: number,
        email: email,
        password: password
    }));

    fetch("cadastro", {
        method: 'POST',
        body: JSON.stringify({
            firsname: firsname,
            lastname: lastname,
            number: number,
            email: email,
            password: password
        }),
        headers: { "content-type": "application/json" }
    })

        .then(async (resp) => {
            var status = await resp.text();
            console.log(status)
            if (status == 'conectado') {
                location.href = '../html/home.html'
            } else {
                alert('Informações incorretas')
            }
        })
}