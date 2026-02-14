/* =========================
   BLOQUEIO – LINHA VIVA
========================= */
console.log("BLOQUEIOS.JS CARREGADO NOVO");

function gerarRelatorio(){

  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour: '2-digit',
    minute: '2-digit'
  });

  const t = 
`# ${hora} | ` +
`Resp: ${responsavel.value || "-"} | ` +
`Equipe: ${bloq_equipe.value || "-"} | ` +
`Tel: ${contato.value || "-"} | ` +
`Viatura: ${viatura.value || "-"} | ` +
`Rádio: ${radio.value || "-"} | ` +
`Teste Rádio: ${testeRadio.value || "-"} | ` +
`Ref: ${referencia.value || "-"} | ` +
`Condutor: ${tipoCondutor.value || "-"} | ` +
`Maresia: ${maresia.value || "-"} | ` +
`Self-Healing: ${selfhealing.value || "-"} | ` +
`Desativou Self: ${desativou.value || "-"} | ` +
`Serviço: ${servico.value || "-"} | ` +
`Obs: ${obsRel.value || "-"}`;

  resultado.value = t;
  navigator.clipboard.writeText(t);
  showToast("Relatório copiado!");
}

function limparRelatorio(){
  document.querySelectorAll('#rel input,#rel textarea')
    .forEach(e => e.value = "");
}



