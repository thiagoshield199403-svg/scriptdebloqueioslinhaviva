/* =========================================
   SUBSTITUIÇÃO DE TRANSFORMADOR – COMPLETO
   ========================================= */

/* ===== FUNÇÃO SEGURA ===== */
function v(id){
    const el = document.getElementById(id);
    if(!el) return "NA";
    return el.value || "NA";
}

document.addEventListener("DOMContentLoaded", function(){

    const motivo = document.getElementById("tf_motivo");

    if(motivo){
        motivo.addEventListener("change", aplicarRegrasTrafo);
    }

});

/* =========================================
   REGRAS INTELIGENTES POR MOTIVO
   ========================================= */

function aplicarRegrasTrafo(){

    limparObrigatoriosTrafo();

    const motivo = v("tf_motivo");

    if(motivo === "Sobrecarga"){
        obrigar(["tf_carregamento"]);
    }

    if(motivo === "Falta de fase"){
        obrigar(["tf_carregamento"]);
    }

    if(motivo === "Vazamento de óleo"){
        obrigar(["tf_glv","tf_glv_extraido"]);
    }

    if(motivo === "Furto"){
        obrigar(["tf_clientes_des"]);
    }

}

/* ========================================= */

function obrigar(lista){
    lista.forEach(id=>{
        const campo = document.getElementById(id);
        if(campo){
            campo.setAttribute("required","true");
        }
    });
}

function limparObrigatoriosTrafo(){
    document.querySelectorAll("#trafo [required]")
        .forEach(c=>c.removeAttribute("required"));
}

/* =========================================
   GERAÇÃO SCRIPT WHATSAPP (BONITO)
   ========================================= */

function gerarTrafoWhatsApp(){

    if(!validarTrafo()) return;

    let texto = montarTextoTrafo(false);

    copiarTexto(texto);

    document.getElementById("tf_resultado").value = texto;

    showToast("WhatsApp gerado e copiado!");
}

/* =========================================
   GERAÇÃO SCRIPT SS (COM TRACINHO)
   ========================================= */

function gerarTrafoSGD(){

    if(!validarTrafo()) return;

    let texto = montarTextoTrafo(true);

    copiarTexto(texto); // ✅ AGORA COPIA

    document.getElementById("tf_resultado").value = texto;

    showToast("SS gerado e copiado!");
}

/* =========================================
   VALIDAÇÃO
   ========================================= */

function validarTrafo(){

    const obrigatorios = document.querySelectorAll("#trafo [required]");
    let ok = true;

    obrigatorios.forEach(c=>{
        if(!c.value){
            c.style.border = "2px solid red";
            ok = false;
        }else{
            c.style.border = "";
        }
    });

    if(!ok){
        showToast("Preencha os campos obrigatórios!");
    }

    return ok;
}

/* =========================================
   MONTAGEM TEXTO (WHATSAPP + SS)
   ========================================= */

function montarTextoTrafo(isSS=false){

    /* ========= WHATSAPP COMPLETO (SEM EXTRA) ========= */
    if(!isSS){

        let txt = `⚡ Substituição de Transformador

👨‍💻 *Operador:* ${v("tf_operador")}
 *Ocorrência:* ${v("tf_ocorrencia")}
 *Nº Trafo:* ${v("tf_trafo")}
 *ID:* ${v("tf_id")}

⚠️ *Motivo:* ${v("tf_motivo")}
📌 *Causa:* ${v("tf_causa")}

📍 *Localização*
- *Regional*: ${v("tf_regional")}
- *Cidade/Povoado*: ${v("tf_cidade")}
- *Endereço*: ${v("tf_endereco")}
- *Referência*: ${v("tf_referencia")}
- *Coordenadas*: ${v("tf_coord")}
- *Acesso Caminhão*: ${v("tf_acesso")}

🔧 *Dados do Transformador*
- *Classe*: ${v("tf_classe")}
- *Potência*: ${v("tf_potencia")}
- *Proprietário*: ${v("tf_proprietario")}
- *Tensão Sec*: ${v("tf_tensao_sec")}
- *Carregamento*: ${v("tf_carregamento")}
- *Trafo p/Corrosão Atmosférica*: ${v("tf_corrosao")}
- *Aterramento*: ${v("tf_aterramento")}
- *PRBT*: ${v("tf_pr_bt")}
- *PRMT*: ${v("tf_pr_mt")}

👥 *Clientes Afetados*
- *Total*: ${v("tf_total_clientes")}
- *Desenergizados*: ${v("tf_clientes_des")}
- *Total Desenergizados*: ${v("tf_total_des")}
- *Circuito foi Interligado?*: ${v("tf_transferido")}

🛢️ *Condições da Rede*
- *Bitola MT*: ${v("sp_bitola_mt")}
- *Possui GLV ?* ${v("tf_glv")}
- *GLV Extraído ?* ${v("tf_glv_extraido")}

📦 *Materiais Nescessarios:*
${v("tf_materiais")}

📝 *Observações Relevantes:*
${v("tf_obs")}`;

        return txt;
    }

    /* ========= SS (PADRÃO TÉCNICO) ========= */

    let linhas = [

`Operador: ${v("tf_operador")}`,
`Ocorrência: ${v("tf_ocorrencia")}`,
`N° Transformador: ${v("tf_trafo")}`,
`ID: ${v("tf_id")}`,
`Motivo: ${v("tf_motivo")}`,
`Causa: ${v("tf_causa")}`,

`Regional: ${v("tf_regional")}`,
`Cidade/Povoado: ${v("tf_cidade")}`,
`Endereço: ${v("tf_endereco")}`,
`Referência: ${v("tf_referencia")}`,
`Coordenadas: ${v("tf_coord")}`,
`Acesso Caminhão ? ${v("tf_acesso")}`,

`Classe: ${v("tf_classe")}`,
`Potência: ${v("tf_potencia")}`,
`Proprietário: ${v("tf_proprietario")}`,
`Tensão Sec: ${v("tf_tensao_sec")}`,
`Carregamento: ${v("tf_carregamento")}`,
`Corrosão Atmosférica: ${v("tf_corrosao")}`,
`Possui Aterramento ? ${v("tf_aterramento")}`,
`PRBT: ${v("tf_pr_bt")}`,
`PRMT: ${v("tf_pr_mt")}`,

`Total Clientes: ${v("tf_total_clientes")}`,
`Clientes Desenergizados? ${v("tf_clientes_des")}`,
`Total Clientes Desenergizados: ${v("tf_total_des")}`,
`Circuito Interligado? ${v("tf_transferido")}`,

`Bitola Rede MT: ${v("sp_bitola_mt")}`,
`Possui GLV ? ${v("tf_glv")}`,
`GLV Extraído ? ${v("tf_glv_extraido")}`,

`Materiais: ${v("tf_materiais")}`,
`Observações: ${v("tf_obs")}`

    ];

    return linhas
        .map(l => l.trim() ? "- " + l : "")
        .join("\n");
}

/* =========================================
   UTIL
   ========================================= */

function copiarTexto(texto){

    try{
        navigator.clipboard.writeText(texto)
            .then(() => showToast("Copiado!"))
            .catch(() => fallbackCopy(texto));
    }catch(e){
        fallbackCopy(texto);
    }
}

function fallbackCopy(texto){
    const area = document.createElement("textarea");
    area.value = texto;

    document.body.appendChild(area);
    area.select();

    try{
        document.execCommand("copy");
        showToast("Copiado (modo compatível)");
    }catch{
        showToast("Erro ao copiar");
    }

    document.body.removeChild(area);
}
