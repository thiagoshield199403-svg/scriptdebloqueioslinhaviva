/* =========================
   BLOQUEIO – LINHA VIVA
========================= */
console.log("BLOQUEIOS.JS CARREGADO NOVO");

function gerarRelatorio(){

  const resp = document.getElementById("responsavel").value || "-";
  const eq = document.getElementById("bloq_equipe").value || "-";
  const tel = document.getElementById("contato").value || "-";
  const viatura = document.getElementById("viatura").value || "-";
  const radio = document.getElementById("radio").value || "-";
  const testeRadio = document.getElementById("testeRadio").value || "-";
  const referencia = document.getElementById("referencia").value || "-";
  const tipoCondutor = document.getElementById("tipoCondutor").value || "-";
  const maresia = document.getElementById("maresia").value || "-";
  const self = document.getElementById("selfhealing").value || "-";
  const desativou = document.getElementById("desativou").value || "-";
  const servico = document.getElementById("servico").value || "-";
  const obs = document.getElementById("obsRel").value || "-";

  const texto =
`RESPONSÁVEL: ${resp}
EQUIPE: ${eq}
CONTATO: ${tel}
VIATURA: ${viatura}
RÁDIO: ${radio}
TESTE RÁDIO: ${testeRadio}
REFERÊNCIA ELÉTRICA: ${referencia}
TIPO CONDUTOR: ${tipoCondutor}
ÁREA DE MARESIA: ${maresia}
SELF-HEALING: ${self}
DESATIVOU SELF-HEALING: ${desativou}
TIPO DO SERVIÇO: ${servico}
OBSERVAÇÃO: ${obs}`;

  document.getElementById("resultado").value = texto;

  navigator.clipboard.writeText(texto);

  if (typeof showToast === "function") {
    showToast("Relatório copiado");
  }
}

function limparRelatorio(){
  document.querySelectorAll('#rel input,#rel textarea')
    .forEach(e => e.value = "");
}
