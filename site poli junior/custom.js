async function getContent(){
    try {
        const resposta = await fetch ('https://api.polijunior.com.br/notas/')
        const data = await resposta.json()

        console.log(data)
        show(data)

    }catch (error){
        console.log(error)    
    }
}

getContent()

function show(users){
    let output = ''
    
    for (let user of users){       
        var p2 = parseFloat(`${user.nota_p2}`);
        var p1 = parseFloat(`${user.nota_p1}`);
        var soma = p1+p2;

        output += soma;
    }

    document.querySelector('main').innerHTML = output;
}  