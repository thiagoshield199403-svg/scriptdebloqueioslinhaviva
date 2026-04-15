/* ============================================
   FUNÇÃO UNIVERSAL (SEGURA)
============================================ */
function v(id){
    let el =
        document.querySelector("#trafo #" + id) ||
        document.querySelector("#substituicao_poste #" + id) ||
        document.getElementById(id);

    if(!el){
        console.warn("NÃO ENCONTROU:", id);
        return "";
    }

    return (el.value || "").trim();
}
/* ============================================
   REGRAS (SEM APAGAR VALOR)
============================================ */
document.addEventListener("DOMContentLoaded", () => {

  const tipoPoste = document.getElementById("sp_tipo_poste");
  const veiculo   = document.getElementById("sp_veiculo");

  if(tipoPoste){
    tipoPoste.addEventListener("change", aplicarRegraPoste);
  }

  if(veiculo){
    veiculo.addEventListener("change", aplicarRegraVeiculo);
  }
});

function aplicarRegraPoste(){
  const tipo = v("sp_tipo_poste");

  const camposMT = ["sp_est_mt","sp_rede_mt","sp_bitola_mt"];
  const camposBT = ["sp_est_bt","sp_rede_bt","sp_bitola_bt"];

  if(tipo === "POSTE MT"){
    toggle(camposMT, true);
    toggle(camposBT, false);
  }
  else if(tipo === "POSTE BT"){
    toggle(camposMT, false);
    toggle(camposBT, true);
  }
  else{
    toggle(camposMT, true);
    toggle(camposBT, true);
  }
}

function aplicarRegraVeiculo(){
  const causado = v("sp_veiculo");

  const lista = [
    "sp_policia","sp_vitima","sp_foto_placa","sp_doc",
    "sp_end","sp_danos","sp_camera","sp_medidor",
    "sp_veiculo_desc","sp_empresa","sp_qual","sp_obs_condutor"
  ];

  toggle(lista, causado === "SIM");
}

/* ============================================
   TOGGLE (NÃO APAGA VALOR NUNCA)
============================================ */
function toggle(ids, ativo){
  ids.forEach(id=>{
    const el = document.getElementById(id);
    if(el){
      el.style.opacity = ativo ? "1" : "0.5";
      el.style.pointerEvents = ativo ? "auto" : "none";
    }
  });
}

/* ============================================
   WHATSAPP
============================================ */
function gerarPosteWhats(){

  const tipo = v("sp_tipo_poste");
  const causado = v("sp_veiculo");

  let texto = `🛠️ *SUBSTITUIÇÃO DE POSTE*\n\n`;

  texto += `👤 Operador: ${v("sp_operador")}\n`;
  texto += `📄 Ocorrência: ${v("sp_ocorrencia")}\n`;
  texto += `🏷️ ID Poste: ${v("sp_id_poste")}\n`;
  texto += `⚡ Tipo: ${tipo}\n`;
  texto += `Causa: ${v("sp_causa")}\n\n`;

  texto += `📍 Regional: ${v("sp_regional")}\n`;
  texto += `Cidade/Bairro/Povoado: ${v("sp_bairro")}\n`;
  texto += `📌 Ponto Referência: ${v("sp_referencia")}\n`;
  texto += `🧭 Coordenadas: ${v("sp_coord")}\n\n`;

  texto += `Tipo/Altura/Esforço: ${v("sp_altura")}\n`;
  texto += `Chave Ref: ${v("sp_chave_ref")} ${v("sp_num_chave")}\n`;
  texto += `🚛 Acesso Caminhão: ${v("sp_acesso")}\n`;
  texto += `Cordoalha Telemar: ${v("sp_cordoalha")}\n\n`;

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
}

/* ============================================
   SS
============================================ */
function gerarPosteSS(){

  const tipo = v("sp_tipo_poste");
  const causado = v("sp_veiculo");

  let texto = "#SUBSTITUIÇÃO DE POSTE\n\n";
  texto += `- Operador: ${v("sp_operador")}\n`;
  texto += `- Ocorrência: ${v("sp_ocorrencia")}\n`;
  texto += `- ID: ${v("sp_id_poste")}\n`;
  texto += `- Tipo: ${tipo}\n`;
  texto += `- Causa: ${v("sp_causa")}\n`;
  texto += `- Acesso: ${v("sp_acesso")}\n`;
  texto += `- Cordoalha Telemar: ${v("sp_cordoalha")}\n`;
  texto += `- Regional: ${v("sp_regional")}\n`;
  texto += `- Cidade/Bairro/Povoado: ${v("sp_bairro")}\n`;
  texto += `- Ponto Referência: ${v("sp_referencia")}\n`;
  texto += `- Coordenadas: ${v("sp_coord")}\n`;
  texto += `- Tipo/Altura/Esforço: ${v("sp_altura")}\n`;
  texto += `- Chave: ${v("sp_chave_ref")} ${v("sp_num_chave")}\n`;

  if(tipo !== "POSTE BT"){
    texto += `- Estrutura MT: ${v("sp_est_mt")}\n`;
    texto += `- Rede MT: ${v("sp_rede_mt")}\n`;
    texto += `- Bitola MT: ${v("sp_bitola_mt")}\n`;
  }

  if(tipo !== "POSTE MT"){
    texto += `- Estrutura BT: ${v("sp_est_bt")}\n`;
    texto += `- Rede BT: ${v("sp_rede_bt")}\n`;
    texto += `- Bitola BT: ${v("sp_bitola_bt")}\n`;
  }

  texto += `- Causado por Veículo: ${causado}\n`;

  if(causado === "SIM"){
    texto += `- Polícia: ${v("sp_policia")}\n`;
    texto += `- Vítima: ${v("sp_vitima")}\n`;
    texto += `- Foto Placa: ${v("sp_foto_placa")}\n`;
    texto += `- Documento Condutor: ${v("sp_doc")}\n`;
    texto += `- Endereço/Telefone: ${v("sp_end")}\n`;
    texto += `- Foto Danos: ${v("sp_danos")}\n`;
    texto += `- Câmeras: ${v("sp_camera")}\n`;
    texto += `- Medidor: ${v("sp_medidor")}\n`;
    texto += `- Veículo: ${v("sp_veiculo_desc")}\n`;
    texto += `- Empresa: ${v("sp_empresa")} ${v("sp_qual")}\n`;
    texto += `- Obs Condutor: ${v("sp_obs_condutor")}\n`;
  }

  texto += `- Materiais: ${v("sp_materiais")}\n`;
  texto += `- Observações: ${v("sp_obs_gerais")}`;

  document.getElementById("sp_resultado").value = texto;
  navigator.clipboard.writeText(texto);
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
}
