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

  historico.value +=
    (historico.value ? "\n" : "") +
    "# " + horaAtual() + " " + obsTexto.value;

  obsTexto.value = "";
   navigator.clipboard.writeText(historico.value);
}

function copiarHistorico(){
  navigator.clipboard.writeText(historico.value);
  showToast("Histórico copiado com sucesso!");
}

function limparHistorico(){
  historico.value = "";
  obsTexto.value = "";
}

