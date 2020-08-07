async function getContent(){
    try {
        const response = await fetch ('https://api.polijunior.com.br/notas/')
        const data = await response.json()

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
        output += `<li>Nota da P1 -> ${user.nota_p1} </li> `;
        output += `<li>Nota da P2 -> ${user.nota_p2} </li>`;
        
        var p2 = parseFloat(`${user.nota_p2}`);
        var p1 = parseFloat(`${user.nota_p1}`);
        var soma = p1+p2;

        output += `a soma da p1 com a p2 eh `+ soma;
    }

    document.querySelector('main').innerHTML = output;
}  