/* =========================
   SUBSTITUIÇÃO DE TRAFO
========================= */

function v(id){
  return document.getElementById(id).value || "NA";
}

/* ===== WHATSAPP ===== */
function gerarTrafoWhatsApp(){

  const texto =
`🚨*Substituição de Transformador*

 *Motivo:* ${v("tf_motivo")}
 *Ocorrência:* ${v("tf_ocorrencia")}
 *Regional:* ${v("tf_regional")}
 *Operador:* ${v("tf_operador")}

📍 *Endereço:* ${v("tf_endereco")}
🗺️ *Coordenadas:* ${v("tf_coord")}

*⚡ DADOS DO TRAFO*
*Trafo:* ${v("tf_trafo")}
*Potência:* ${v("tf_potencia")}
*Classe:* ${v("tf_classe")}
*Tensão Sec.:* ${v("tf_tensao_sec")}
*Tipo de Cabo:* ${v("tf_tipo_cabo")}
*Carregamento:* ${v("tf_carregamento")}%
*Para-raio MT:* ${v("tf_pr_mt")}
*Para-raio BT:* ${v("tf_pr_bt")}
*Aterramento:* ${v("tf_aterramento")}
*Corrosão atmosférica:* ${v("tf_corrosao")}
*Possui GLV:* ${v("tf_glv")}
*GLV extraído:* ${v("tf_glv_extraido")}
*Circuito transferido:* ${v("tf_transferido")}

🏠 *Clientes desenergizados:* ${v("tf_clientes_des")}
👥 *Total clientes:* ${v("tf_total_clientes")}

🧰 *Materiais:* ${v("tf_materiais")}
📝 *Observações:* ${v("tf_obs")}`;

  tf_resultado.value = texto;
  navigator.clipboard.writeText(texto);
  showToast("Script WhatsApp copiado");
}

/* ===== SGD / SS ===== */
function gerarTrafoSGD(){

  const texto =

`Motivo:${v("tf_motivo")}
#Ocorrencia:${v("tf_ocorrencia")}
#Regional:${v("tf_regional")}
#Operador:${v("tf_operador")}
#Endereço:${v("tf_endereco")}
#Coordenadas:${v("tf_coord")}
#Trafo:${v("tf_trafo")}
#Potência:${v("tf_potencia")}
#Classe:${v("tf_classe")}
#Tensão Secundária:${v("tf_tensao_sec")}
#Tipo_Cabo:${v("tf_tipo_cabo")}
#Carregamento Trafo:${v("tf_carregamento")}
#Clientes Desenergizados:${v("tf_clientes_des")}
#Total Clientes:${v("tf_total_clientes")}
#ParaRaio MT:${v("tf_pr_mt")}
#ParaRaio BT:${v("tf_pr_bt")}
#Aterramento:${v("tf_aterramento")}
#Corrosão Atmosférica:${v("tf_corrosao")}
#Circuito Transferido:${v("tf_transferido")}
#Possui GLV:${v("tf_glv")}
#GLV Extraido:${v("tf_glv_extraido")}
#Materiais Necessários:${v("tf_materiais")}
#Obs:${v("tf_obs")}`;

  tf_resultado.value = texto;
  navigator.clipboard.writeText(texto);
  showToast("Script SS copiado");
}

/* ===== LIMPAR ===== */
function limparTrafo(){
  document.querySelectorAll("#trafo input, #trafo textarea")
    .forEach(e => e.value = "");
  document.querySelectorAll("#trafo select")
    .forEach(e => e.selectedIndex = 0);
  tf_resultado.value = "";
}
