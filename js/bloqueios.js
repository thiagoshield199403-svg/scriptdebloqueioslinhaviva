/* =========================
   BLOQUEIO – LINHA VIVA
========================= */
console.log("BLOQUEIOS.JS CARREGADO NOVO");

function gerarRelatorio(){

  const resp = document.getElementById("responsavel").value || "-";
  const eq = document.getElementById("bloq_equipe").value.toUpperCase() || "-";
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
`-Responsável: ${resp}
-Equipe: ${eq}
-Contato: ${tel}
-Viatura: ${viatura}
-Rádio: ${radio}
-Teste Rádio: ${testeRadio}
-Ref.Elétrica: ${referencia}
-Tipo Condutor: ${tipoCondutor}
-Área de maresia?: ${maresia}
-Self/Healing: ${self}
-Desativou Self/Healing? ${desativou}
-serviço: ${servico}
-OBS: ${obs}`;

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

