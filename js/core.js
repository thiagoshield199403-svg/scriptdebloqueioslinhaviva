function showToast(msg){
 const t=document.getElementById("toast");
 t.innerText=msg;
 t.style.display="block";
 setTimeout(()=>t.style.display="none",2000);
}

function openModule(id,btn){
 document.querySelectorAll('.module').forEach(m=>m.classList.remove('active'));
 document.querySelectorAll('.menu button').forEach(b=>b.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 btn.classList.add('active');
}

function atualizarRodape(){
    const agora = new Date();

    const data = agora.toLocaleDateString("pt-BR");
    const hora = agora.toLocaleTimeString("pt-BR", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById("dataHoraSistema").innerText = data + " " + hora;
}

setInterval(atualizarRodape, 1000);
atualizarRodape();
