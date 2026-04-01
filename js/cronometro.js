let inicio = 0;
let intervalo = null;

function formatarTempo(ms){

  let totalSeg = Math.floor(ms / 1000);
  let minutos = Math.floor(totalSeg / 60);
  let segundos = totalSeg % 60;
  let milesimos = Math.floor((ms % 1000) / 10);

  return String(minutos).padStart(2,"0") + ":" +
         String(segundos).padStart(2,"0") + ":" +
         String(milesimos).padStart(2,"0");
}

function iniciarCrono(){

  if(intervalo) return;

  inicio = Date.now();

  intervalo = setInterval(()=>{
    let tempoAtual = Date.now() - inicio;

    const display = document.getElementById("displayCrono");

    display.innerText = formatarTempo(tempoAtual);

    // ALERTA
    if(tempoAtual >= 180000){
      display.classList.add("vermelho");
      display.classList.remove("amarelo");
    }
    else if(tempoAtual >= 150000){
      display.classList.add("amarelo");
    }
    else{
      display.classList.remove("amarelo","vermelho");
    }

  },10); // 🔥 atualização rápida (milésimos)
}

function pararCrono(){
  clearInterval(intervalo);
  intervalo = null;
}

function resetarCrono(){
  pararCrono();
  document.getElementById("displayCrono").innerText = "00:00:00";
}
/* =========================
   CALCULADORA RELIGADOR
========================= */

function calcularTempo(){

  const abertura = document.getElementById("hora_abertura").value;
  const fechamento = document.getElementById("hora_fechamento").value;

  if(!abertura || !fechamento){
    alert("Preencha os horários");
    return;
  }

  const [h1,m1,s1] = abertura.split(":").map(Number);
  const [h2,m2,s2] = fechamento.split(":").map(Number);

  let inicio = h1*3600 + m1*60 + s1;
  let fim = h2*3600 + m2*60 + s2;

  let diff = fim - inicio;

  if(diff < 0){
    diff += 86400;
  }

  let ms = diff * 1000;

  const resultado = document.getElementById("resultadoTempo");

  resultado.innerText = "Tempo: " + formatarTempo(ms);

  // ALERTA VISUAL
  if(ms >= 180000){
    resultado.style.color = "#ff2b2b";
  } else if(ms >= 150000){
    resultado.style.color = "#ffe600";
  } else {
    resultado.style.color = "#00ff88";
  }
}
function limparCalculadora(){

  document.getElementById("hora_abertura").value = "";
  document.getElementById("hora_fechamento").value = "";

  const resultado = document.getElementById("resultadoTempo");

  resultado.innerText = "Tempo: 00:00";
  resultado.style.color = "";
}