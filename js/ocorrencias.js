/* =========================
   OCORRÊNCIAS
========================= */

function horaAtual(){
  return new Date().toLocaleTimeString('pt-BR',{
    hour:'2-digit',
    minute:'2-digit'
  }) + 'H';
}

function adicionarHistorico(){

  if(!obsTexto.value.trim()) return;

  const operador = document.getElementById("obsOperador")?.value.trim();

  let linha = "";

  if(operador){
    linha = "#(" + operador + ") às " + horaAtual() + " " + obsTexto.value;
  } else {
    linha = "# às " + horaAtual() + " " + obsTexto.value;
  }

  historico.value += (historico.value ? "\n" : "") + linha;

  obsTexto.value = "";

  // copia automático
  navigator.clipboard.writeText(historico.value);
}

function copiarHistorico(){
  navigator.clipboard.writeText(historico.value);
  showToast("Histórico copiado com sucesso!");
}

function limparHistorico(){
  // 🔥 agora limpa SOMENTE o histórico
  historico.value = "";
}
