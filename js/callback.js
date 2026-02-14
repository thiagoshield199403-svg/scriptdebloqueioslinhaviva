/* =========================
   CALLBACK
========================= */

function atualizarDataHora(){
  dataHora.value = new Date().toLocaleString("pt-BR");
}

atualizarDataHora();

function gerarTexto(){
  atualizarDataHora();

  const atuacao = celular.checked ? telefone.value : ramal.value;

  const t =
`Data/Hora: ${dataHora.value} # ` +
`Operador: ${operador.value} # ` +
`Atuação: ${atuacao} # ` +
`CL Reincidente: ${reincidente.value} # ` +
`Ligação: ${ligacao.value} # ` +
`Situação: ${situacao.value} # ` +
`CJ Crítico: ${cj.value} # ` +
`Risco de Vida: ${risco.value} # ` +
`Observações: ${observacoes.value || "Sem observações"}`;

  resultadoCallback.value = t;
  navigator.clipboard.writeText(t);
  showToast("Texto de callback copiado com sucesso!");
}

function limparCallback(){
  document.querySelectorAll('#callback input,#callback textarea')
    .forEach(e => e.value = "");

  document.querySelectorAll('#callback select')
    .forEach(e => e.selectedIndex = 0);

  atualizarDataHora();
}

