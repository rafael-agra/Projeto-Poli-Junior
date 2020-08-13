function validateForm(frm){
    window.event.preventDefault();
    frm = frm.parentNode.parentNode;
    var tNumero = document.getElementById("tNumero");
    var cSneha = document.getElementById("cSenha");
    if(tNumero.value.length < 3) {  
        alert("Por favor, indique o seu numero USP.");
        window.location.href = "index.html";
    } else if(cSenha.value.length < 3){
        alert("Por favor, indique sua senha");
        window.location.href = "index.html";
    }else{
       frm.setAttribute("action","notas.html");
       frm.submit();
    }
}