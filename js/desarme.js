/* =========================
   SCRIPT DESARME
========================= */

function gerarDesarme(){

  /* =========================
     CAMPOS DA REDE
  ========================= */
  const tipoAtivo = ds_ativo_tipo.value || "";
  const numAtivo  = ds_ativo_num.value || "";

  const ativo = (tipoAtivo && numAtivo)
    ? `${tipoAtivo} ${numAtivo}`
    : "-";

  const subestacao  = ds_subestacao.value || "-";
  const alimentador = ds_alimentador.value || "-";

  const uc       = ds_uc.value || "-";
  const clima    = ds_clima.value || "-";
  const situacao = ds_situacao.value || "-";

  /* =========================
     DATA / HORA (EDITÁVEL)
     FORMATO: DD/MES. | HHh MMm SSs
  ========================= */
  let dataHoraFormatada = "-";

  if (ds_datahora.value) {
    const dt = new Date(ds_datahora.value);

    const dia = dt.getDate().toString().padStart(2,"0");
    const mes = dt
      .toLocaleString("pt-BR",{ month:"short" })
      .replace(".","");

    const h = dt.getHours().toString().padStart(2,"0");
    const m = dt.getMinutes().toString().padStart(2,"0");
    const s = dt.getSeconds().toString().padStart(2,"0");

    dataHoraFormatada = `${dia}/${mes}. | ${h}h ${m}m ${s}s`;
  }

  /* =========================
     TEXTO FINAL (PADRÃO WHATSAPP)
  ========================= */
  const texto =
`🚨 *Informação de Ocorrência* 🚨

💡 *Rede:*
${ativo} | SUB: ${subestacao} | ALIM: ${alimentador}

🗓️ *Data | Hora da Ocorrência:*
${dataHoraFormatada}

🏠 *UC Atingidas:*
${uc}

⏱️ *Situação Atual:*
${situacao}

🌤️ *Condições Climáticas:*
${clima}`;

  /* =========================
     SAÍDA
  ========================= */
  ds_resultado.value = texto;
  navigator.clipboard.writeText(texto);

  if (typeof showToast === "function") {
    showToast("Script Desarme copiado 🚨");
  }
}

/* =========================
   LIMPAR CAMPOS
========================= */

function limparDesarme(){

  document.querySelectorAll("#desarme input, #desarme textarea")
    .forEach(el => el.value = "");

  document.querySelectorAll("#desarme select")
    .forEach(el => el.selectedIndex = 0);

  ds_resultado.value = "";
}
/* =========================
   ORDENAR SUBESTAÇÕES (A-Z)
========================= */
(function ordenarSubestacoes(){

  const select = document.getElementById("ds_subestacao");
  if (!select) return;

  const opcoes = Array.from(select.options)
    .filter(opt => opt.value !== "");

  opcoes.sort((a,b) =>
    a.text.localeCompare(b.text, "pt-BR")
  );

  select.innerHTML = '<option value="">Selecione</option>';
  opcoes.forEach(opt => select.appendChild(opt));

})();
