/* =========================
   PREENCIMENTO DE SS
========================= */

function gerarSSWhats(){
  const ss_regional   = document.getElementById("ss_regional");
  const ss_abrangencia= document.getElementById("ss_abrangencia");
  const ss_equipe     = document.getElementById("ss_equipe");
  const ss_acesso     = document.getElementById("ss_acesso");
  const ss_ref        = document.getElementById("ss_ref");
  const ss_num        = document.getElementById("ss_num");
  const ss_id         = document.getElementById("ss_id");
  const ss_servico    = document.getElementById("ss_servico");
  const ss_endereco   = document.getElementById("ss_endereco");
  const ss_coord      = document.getElementById("ss_coord");
  const ss_obs        = document.getElementById("ss_obs");
  const ss_resultado  = document.getElementById("ss_resultado");

  const ref = ss_ref.value && ss_num.value
    ? `${ss_ref.value} ${ss_num.value}`
    : "-";

  const id = ss_id.value
    ? `ID: ${ss_id.value}`
    : "-";

  const texto =
`🧾 SS

REGIONAL: ${ss_regional.value || "-"}
ABRANGÊNCIA: ${ss_abrangencia.value || "-"}
EQUIPE: ${ss_equipe.value || "-"}
ACESSO: ${ss_acesso.value || "-"}
REF. ELÉTRICA: ${ref}

${id}
SERVIÇO: ${ss_servico.value || "-"}
ENDEREÇO: ${ss_endereco.value || "-"}
COORDENADAS: ${ss_coord.value || "-"}
OBS: ${ss_obs.value || "-"}`;

  ss_resultado.value = texto;
  navigator.clipboard.writeText(texto);

  if (typeof showToast === "function") {
    showToast("Relatório WhatsApp copiado 📲");
  }
}

function gerarSSPadrao(){
  const ss_servico    = document.getElementById("ss_servico");
  const ss_regional   = document.getElementById("ss_regional");
  const ss_abrangencia= document.getElementById("ss_abrangencia");
  const ss_equipe     = document.getElementById("ss_equipe");
  const ss_acesso     = document.getElementById("ss_acesso");
  const ss_ref        = document.getElementById("ss_ref");
  const ss_num        = document.getElementById("ss_num");
  const ss_id         = document.getElementById("ss_id");
  const ss_endereco   = document.getElementById("ss_endereco");
  const ss_coord      = document.getElementById("ss_coord");
  const ss_obs        = document.getElementById("ss_obs");
  const ss_resultado  = document.getElementById("ss_resultado");

  const ref = ss_ref.value && ss_num.value
    ? `${ss_ref.value} ${ss_num.value}`
    : "-";

  const id = ss_id.value
    ? `ID:${ss_id.value}`
    : "-";

 const texto =
`🧾 SS :
SERVIÇO: ${ss_servico.value || "-"}
REGIONAL: ${ss_regional.value || "-"}
ABRANGÊNCIA: ${ss_abrangencia.value || "-"}
EQUIPE: ${ss_equipe.value || "-"}
ACESSO: ${ss_acesso.value || "-"}
REF. ELÉTRICA: ${ref}
${id}
ENDEREÇO: ${ss_endereco.value || "-"}
COORDENADAS: ${ss_coord.value || "-"}
OBS: ${ss_obs.value || "-"}`;

ss_resultado.value = texto;

  navigator.clipboard.writeText(texto);

  if (typeof showToast === "function") {
    showToast("Relatório SS copiado 🧾");
  }
}

function limparSS(){
  document.querySelectorAll("#ss input, #ss textarea")
    .forEach(el => el.value = "");

  document.querySelectorAll("#ss select")
    .forEach(el => el.selectedIndex = 0);

  document.getElementById("ss_resultado").value = "";
}
