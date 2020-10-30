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
        //Nota 
        var n1 = parseFloat(`${user.nota_p1}`).toFixed(1);
        var n2 = parseFloat(`${user.nota_p2}`).toFixed(1);
        
        //Media pretendida
        var mp = parseFloat(`${user.media_pretendida}`);
        
        //Pesos
        var p1 = parseInt(`${user.peso_p1}`);
        var p2 = parseInt(`${user.peso_p2}`);        
        var p3 = parseInt(`${user.peso_p3}`);        

        //Calculo da nota para a P3
        var n3 = ((mp*(p1+p2+p3)-p1*n1-p2*n2)/p3).toFixed(1);
        
        output += `<tr> <td id = "materia">${user.materia} </td>`;
        output += `<td id = "notas">`+ n1 +` </td >`;
        output += `<td id = "notas">`+ n2 +`  </td>`;

        //Verifica se e possivel atingir a media pretendida ou se
        //ela ja foi atingida
        if (n3 <= 0){
            output += `<td id="P3">Você já atingiu a média proposta nesta disciplina :)</td> `;
        }else if(n3 >= 10){
            output += `<td>Não é possível atingir a média proposta na P3 :(</td>`;
        }else{
            output += `<td>A nota necessária para a P3 é de: `+ n3 + '</td>';
        }

    }
    document.querySelector('div#dados').innerHTML = output;
}  