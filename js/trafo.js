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
#Endereco:${v("tf_endereco")}
#Coordenadas:${v("tf_coord")}
#Trafo:${v("tf_trafo")}
#Potencia:${v("tf_potencia")}
#Classe:${v("tf_classe")}
#Tensao_Secundaria:${v("tf_tensao_sec")}
#Tipo_Cabo:${v("tf_tipo_cabo")}
#Carregamento_Trafo:${v("tf_carregamento")}
#Clientes_Desenergizados:${v("tf_clientes_des")}
#Total_Clientes:${v("tf_total_clientes")}
#ParaRaio_MT:${v("tf_pr_mt")}
#ParaRaio_BT:${v("tf_pr_bt")}
#Aterramento:${v("tf_aterramento")}
#Corrosao_Atmosferica:${v("tf_corrosao")}
#CircuitoTransferido:${v("tf_transferido")}
#Possu_GLV:${v("tf_glv")}
#GL Extraido:${v("tf_glv_extraido")}
#Materiai Necessarios:${v("tf_materiais")}
#Observacoes:${v("tf_obs")}`;

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
