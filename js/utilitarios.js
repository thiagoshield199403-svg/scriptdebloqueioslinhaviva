function abrirMapa(src){
  const modal = document.getElementById("modal-mapa");
  const img   = document.getElementById("modal-img");

  if(!modal || !img){
    console.error("Modal do mapa não encontrado");
    return;
  }

  img.src = src;
  modal.style.display = "flex";
}

function fecharMapa(e){
  if(e.target.id === "modal-mapa"){
    document.getElementById("modal-mapa").style.display = "none";
  }
}
function abrirMapa(src){
  const modal = document.getElementById("modal-mapa");
  const img   = document.getElementById("modal-img");

  if(!modal || !img){
    console.error("Modal do mapa não encontrado");
    return;
  }

  img.src = src;
  modal.style.display = "flex";
}

function fecharMapa(event){
  if(event.target.id === "modal-mapa"){
    event.currentTarget.style.display = "none";
  }
}
<script>
function voltarUtilitarios(){
  document.querySelectorAll('.module')
    .forEach(m => m.classList.remove('active'));

  document.getElementById('utilitarios')
    .classList.add('active');
}
</script>
