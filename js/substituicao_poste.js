/* ============================================
   SUBSTITUIÇÃO DE POSTE — PROFISSIONAL
============================================ */

function v(id){
  const el = document.getElementById(id);
  if(!el) return "";
  return el.value?.trim() || "";
}

/* ============================================
   REGRAS DINÂMICAS INSTANTÂNEAS
============================================ */

document.addEventListener("DOMContentLoaded", () => {

  const tipoPoste = document.getElementById("sp_tipo_poste");
  const veiculo   = document.getElementById("sp_veiculo");

  if(tipoPoste){
    tipoPoste.addEventListener("change", aplicarRegraPoste);
    aplicarRegraPoste();
  }

  if(veiculo){
    veiculo.addEventListener("change", aplicarRegraVeiculo);
    aplicarRegraVeiculo();
  }

});

function aplicarRegraPoste(){

  const tipo = v("sp_tipo_poste");

  const camposMT = ["sp_est_mt","sp_rede_mt","sp_bitola_mt"];
  const camposBT = ["sp_est_bt","sp_rede_bt","sp_bitola_bt"];

  if(tipo === "POSTE MT"){
    toggleCampos(camposBT,false);
    toggleCampos(camposMT,true);
  }
  else if(tipo === "POSTE BT"){
    toggleCampos(camposMT,false);
    toggleCampos(camposBT,true);
  }
  else{
    toggleCampos(camposMT,true);
    toggleCampos(camposBT,true);
  }
}

function aplicarRegraVeiculo(){

  const causado = v("sp_veiculo");

  const lista = [
    "sp_policia","sp_vitima","sp_foto_placa","sp_doc",
    "sp_end","sp_danos","sp_camera","sp_medidor",
    "sp_veiculo_desc","sp_empresa","sp_qual","sp_obs_condutor"
  ];

  if(causado === "NÃO"){
    toggleCampos(lista,false);
  }else{
    toggleCampos(lista,true);
  }
}

function toggleCampos(ids,habilitar){
  ids.forEach(id=>{
    const el = document.getElementById(id);
    if(el){
      el.disabled = !habilitar;
      if(!habilitar) el.value = "";
    }
  });
}
function validarObrigatorios(){
  const obrigatorios = [
    "sp_operador",
    "sp_ocorrencia",
    "sp_tipo_poste",
    "sp_id_poste",
    "sp_causa",
    "sp_regional"
  ];

  for(let id of obrigatorios){
    const campo = document.getElementById(id);
    if(!campo.value){
      alert("Preencha todos os campos obrigatórios.");
      campo.focus();
      return false;
    }
  }

  return true;
}

/* ============================================
   WHATSAPP — PROFISSIONAL
============================================ */

function gerarPosteWhats(){

  let texto = `🛠️ *SUBSTITUIÇÃO DE POSTE*\n\n`;

  texto += `👤 Operador: ${v("sp_operador")}\n`;
  texto += `📄 Ocorrência: ${v("sp_ocorrencia")}\n`;
  texto += `🏷️ ID Poste: ${v("sp_id_poste")}\n`;
  texto += `⚡ Tipo: ${v("sp_tipo_poste")}\n`;
  texto += `Causa: ${v("sp_causa")}\n\n`;

  texto += `📍 Regional: ${v("sp_regional")}\n`;
  texto += `Local: ${v("sp_bairro")}\n`;
  texto += `📌 Referência: ${v("sp_referencia")}\n`;
  texto += `🧭 Coordenadas: ${v("sp_coord")}\n\n`;

  texto += `Tipo/Altura/Esforço: ${v("sp_altura")}\n`;
  texto += `Chave Ref: ${v("sp_chave_ref")} ${v("sp_num_chave")}\n`;
  texto += `🚛 Acesso Caminhão: ${v("sp_acesso")}\n`;
  texto += `Cordoalha Telemar: ${v("sp_cordoalha")}\n\n`;


  const tipo = v("sp_tipo_poste");

  if(tipo !== "POSTE BT"){
    texto += `--- REDE MT ---\n`;
    texto += `Estrutura MT: ${v("sp_est_mt")}\n`;
    texto += `Rede MT: ${v("sp_rede_mt")}\n`;
    texto += `Bitola MT: ${v("sp_bitola_mt")}\n\n`;
  }

  if(tipo !== "POSTE MT"){
    texto += `--- REDE BT ---\n`;
    texto += `Estrutura BT: ${v("sp_est_bt")}\n`;
    texto += `Rede BT: ${v("sp_rede_bt")}\n`;
    texto += `Bitola BT: ${v("sp_bitola_bt")}\n\n`;
  }

  const causado = v("sp_veiculo");

  texto += `🚗 Causado por veículo: ${causado}\n`;

  if(causado === "SIM"){

    texto += `Polícia/SAMU: ${v("sp_policia")}\n`;
    texto += `Vítima: ${v("sp_vitima")}\n`;
    texto += `Foto placa: ${v("sp_foto_placa")}\n`;
    texto += `Doc condutor: ${v("sp_doc")}\n`;
    texto += `End/Telefone: ${v("sp_end")}\n`;
    texto += `Foto danos: ${v("sp_danos")}\n`;
    texto += `Câmeras: ${v("sp_camera")}\n`;
    texto += `Medidor UC: ${v("sp_medidor")}\n`;
    texto += `Veículo: ${v("sp_veiculo_desc")}\n`;
    texto += `Empresa: ${v("sp_empresa")} ${v("sp_qual")}\n`;
    texto += `Obs Condutor: ${v("sp_obs_condutor")}\n\n`;
  }

  texto += `🧰 Materiais: ${v("sp_materiais")}\n`;
  texto += `📝 Observações: ${v("sp_obs_gerais")}`;

  document.getElementById("sp_resultado").value = texto;

  navigator.clipboard.writeText(texto);
  showToast("Script WhatsApp copiado");
}

/* ============================================
   SS — TÉCNICO ORGANIZADO
============================================ */



function gerarPosteSS(){

  const tipo = v("sp_tipo_poste");
  const causado = v("sp_veiculo");

  let texto = "#SUBSTITUICAO DE POSTE\n";

  texto += `Operador:${v("sp_operador")} | Ocorrencia:${v("sp_ocorrencia")}\n`;
  texto += `ID:${v("sp_id_poste")} | Tipo:${tipo}\n`;
  texto += `Causa:${v("sp_causa")} | Acesso:${v("sp_acesso")} | Cordoalha_Telem ar:${v("sp_cordoalha")}\n`;
  texto += `Regional:${v("sp_regional")} | Local:${v("sp_bairro")}\n`;
  texto += `referência:${v("sp_referencia")} | Coordenadas:${v("sp_coord")}\n`;
  texto += `Tipo/Altura/Esforço:${v("sp_altura")} | Chave:${v("sp_chave_ref")} ${v("sp_num_chave")}\n`;

  if(tipo !== "POSTE BT"){
    texto += `Estrutura MT:${v("sp_est_mt")} | Rede MT:${v("sp_rede_mt")} | Bitola MT:${v("sp_bitola_mt")}\n`;
  }

  if(tipo !== "POSTE MT"){
    texto += `Estrutura BT:${v("sp_est_bt")} | Rede BT:${v("sp_rede_bt")} | Bitola BT:${v("sp_bitola_bt")}\n`;
  }

  texto += `Causado por Veículo:${causado}\n`;

  if(causado === "SIM"){
    texto += `Polícia:${v("sp_policia")} | Vitima:${v("sp_vitima")} | Foto_Placa:${v("sp_foto_placa")}\n`;
    texto += `Documento Condutor:${v("sp_doc")} | End_Tel:${v("sp_end")} | Foto_Danos:${v("sp_danos")}\n`;
    texto += `câmeras:${v("sp_camera")} | Medidor c/câmera:${v("sp_medidor")}\n`;
    texto += `Veículo:${v("sp_veiculo_desc")} | Empresa:${v("sp_empresa")} ${v("sp_qual")}\n`;
    texto += `Obs Condutor:${v("sp_obs_condutor")}\n`;
  }

  texto += `Matériais:${v("sp_materiais")} | Observacoes:${v("sp_obs_gerais")}`;

  document.getElementById("sp_resultado").value = texto;

  navigator.clipboard.writeText(texto);
  showToast("Script SS copiado");
}

/* ============================================
   LIMPAR
============================================ */

function limparPoste(){
  document.querySelectorAll("#substituicao_poste input, #substituicao_poste textarea")
    .forEach(e=>e.value="");

  document.querySelectorAll("#substituicao_poste select")
    .forEach(e=>e.selectedIndex=0);

  document.getElementById("sp_resultado").value="";

  aplicarRegraPoste();
  aplicarRegraVeiculo();
}

