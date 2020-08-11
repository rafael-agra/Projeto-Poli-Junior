//Função assincrona
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
    output += `<table border="1px">`;
    output += `<tr> <td> <h3>Matéria</h3> </td>`;
    output += `<td> <h3>Nota na P1 </h3></td>`;
    output += `<td> <h3>Nota na P2 </h3></td>`;
    output += `<td> <h3>Nota necessária na P3</h3> </td>`;
    for (let user of users){
        var n1 = parseFloat(`${user.nota_p1}`);
        var n2 = parseFloat(`${user.nota_p2}`);
        
        var mp = parseFloat(`${user.media_pretendida}`);
        
        var p1 = parseFloat(`${user.peso_p1}`);
        var p2 = parseFloat(`${user.peso_p2}`);        
        var p3 = parseFloat(`${user.peso_p3}`);        

        var n3 = ((mp*(p1+p2+p3)-p1*n1-p2*n2)/p3).toFixed(1);
        
        output += `<tr> <td width="350" height="40">${user.materia} </td>`;
        output += `<td width="350"><li> ${user.nota_p1} </li> </td >`;
        output += `<td width = "350"><li> ${user.nota_p2} </li> </td>`;

        
        if (n3 <= 0){
            output += `<td width = "400">Você já está aprovado nesta disciplina :)</td> `;
        }else if(n3 >= 10){
            output += `<td>Não é possível atingir a média proposta na p3 :(</td>`;
        }else{
            output += `<td>A nota necessária para a p3 é de: `+ n3 + '</td>';
        }

        
    }
    document.querySelector('main').innerHTML = output;
}  