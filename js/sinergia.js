/* =========================
   SCRIPT MAIS SINERGIA
========================= */

function gerarSinergia(){
  const sg_rd        = document.getElementById("sg_rd");
  const sg_tpbt      = document.getElementById("sg_tpbt");
  const sg_ramal     = document.getElementById("sg_ramal");
  const sg_dps       = document.getElementById("sg_dps");
  const sg_tensao_ca = document.getElementById("sg_tensao_ca");
  const sg_disj      = document.getElementById("sg_disj");
  const sg_alarme    = document.getElementById("sg_alarme");
  const sg_bateria   = document.getElementById("sg_bateria");
  const sg_painel    = document.getElementById("sg_painel");
  const sg_modem     = document.getElementById("sg_modem");
  const sg_antena    = document.getElementById("sg_antena");
  const sg_curto     = document.getElementById("sg_curto");
  const sg_tanque    = document.getElementById("sg_tanque");
  const sg_cubiculo  = document.getElementById("sg_cubiculo");
  const sg_cordao    = document.getElementById("sg_cordao");
  const sg_resultado = document.getElementById("sg_resultado");

  const rd = sg_rd.value ? `RD ${sg_rd.value}` : "RD -";

  const texto =
`${rd}
TP/BT: ${sg_tpbt.value || "-"}
Ramal/Conexões: ${sg_ramal.value || "-"}
DPS: ${sg_dps.value || "-"}
Tensão CA no disjuntor: ${sg_tensao_ca.value || "-"}
Disjuntor armado: ${sg_disj.value || "-"}
Alarme bateria antes da perda: ${sg_alarme.value || "-"}
Tensão bateria: ${sg_bateria.value ? sg_bateria.value + "V" : "-"}
Painel religador: ${sg_painel.value || "-"}
Modem/Rádio: ${sg_modem.value || "-"}
Antena: ${sg_antena.value || "-"}
Sinais de curto: ${sg_curto.value || "-"}
Tanque: ${sg_tanque.value || "-"}
Cubículo: ${sg_cubiculo.value || "-"}
Cordão umbilical: ${sg_cordao.value || "-"}`;

  sg_resultado.value = texto;
  navigator.clipboard.writeText(texto);

  if (typeof showToast === "function") {
    showToast("Script Mais Sinergia copiado ⚙️");
  }
}

function limparSinergia(){
  document.querySelectorAll("#sinergia input, #sinergia textarea")
    .forEach(el => el.value = "");

  document.querySelectorAll("#sinergia select")
    .forEach(el => el.selectedIndex = 0);

  document.getElementById("sg_resultado").value = "";
}
