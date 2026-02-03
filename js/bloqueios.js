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
`RESP: ${responsavel.value || "-"} | ` +
`EQP: ${bloq_equipe.value || "-"} | ` +
`TEL: ${contato.value || "-"} | ` +
`VIATURA: ${viatura.value || "-"} | ` +
`RÁDIO: ${radio.value || "-"} | ` +
`TESTE RÁDIO: ${testeRadio.value || "-"} | ` +
`REF: ${referencia.value || "-"} | ` +
`CONDUTOR: ${tipoCondutor.value || "-"} | ` +
`MARESIA: ${maresia.value || "-"} | ` +
`SELF-HEALING: ${selfhealing.value || "-"} | ` +
`DESATIVOU SH: ${desativou.value || "-"} | ` +
`SERVIÇO: ${servico.value || "-"} | ` +
`OBS: ${obsRel.value || "-"}`;

  resultado.value = t;
  navigator.clipboard.writeText(t);
  showToast("Relatório copiado!");
}

function limparRelatorio(){
  document.querySelectorAll('#rel input,#rel textarea')
    .forEach(e => e.value = "");
}


