/* =========================================
   SUBSTITUIÇÃO DE TRANSFORMADOR – PADRÃO PRO
   ========================================= */

/* ===== FUNÇÃO UNIVERSAL SEGURA ===== */
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
/* =========================================
   EVENTOS
   ========================================= */
document.addEventListener("DOMContentLoaded", function(){

    const motivo = document.getElementById("tf_motivo");

    if(motivo){
        motivo.addEventListener("change", aplicarRegrasTrafo);
    }

});

/* =========================================
   REGRAS INTELIGENTES
   ========================================= */
function aplicarRegrasTrafo(){

    limparObrigatoriosTrafo();

    const motivo = v("tf_motivo");

    if(motivo === "Sobrecarga" || motivo === "Falta de fase"){
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
   GERADORES
   ========================================= */

function gerarTrafoWhatsApp(){

    if(!validarTrafo()) return;

    const texto = montarTextoTrafo(false);

    copiarTexto(texto);
    document.getElementById("tf_resultado").value = texto;

    showToast("WhatsApp gerado e copiado!");
}

function gerarTrafoSGD(){

    if(!validarTrafo()) return;

    const texto = montarTextoTrafo(true);

    copiarTexto(texto);
    document.getElementById("tf_resultado").value = texto;

    showToast("SS gerado e copiado!");
}

/* =========================================
   MONTAGEM TEXTO
   ========================================= */

function montarTextoTrafo(isSS=false){

    /* ===== WHATSAPP ===== */
    if(!isSS){

        return `⚡ Substituição de Transformador

👨‍💻 *Operador:* ${v("tf_operador")}
*Ocorrência:* ${v("tf_ocorrencia")}
*Nº Trafo:* ${v("tf_trafo")}
*ID:* ${v("tf_id")}

⚠️ *Motivo:* ${v("tf_motivo")}
📌 *Causa:* ${v("tf_causa")}

📍 *Localização*
- Regional: ${v("tf_regional")}
- Cidade/Povoado: ${v("tf_cidade")}
- Endereço: ${v("tf_endereco")}
- Referência: ${v("tf_referencia")}
- Coordenadas: ${v("tf_coord")}
- Acesso Caminhão: ${v("tf_acesso")}

🔧 *Dados do Transformador*
- Classe: ${v("tf_classe")}
- Potência: ${v("tf_potencia")}
- Proprietário: ${v("tf_proprietario")}
- Tensão Sec: ${v("tf_tensao_sec")}
- Carregamento: ${v("tf_carregamento")}
- Corrosão Atmosférica: ${v("tf_corrosao")}
- Aterramento: ${v("tf_aterramento")}
- PRBT: ${v("tf_pr_bt")}
- PRMT: ${v("tf_pr_mt")}

👥 *Clientes*
- Total: ${v("tf_total_clientes")}
- Desenergizados: ${v("tf_clientes_des")}
- Total Desenergizados: ${v("tf_total_des")}
- Circuito Transferido: ${v("tf_transferido")}

🛢️ *Rede*
- Bitola MT: ${v("tf_bitola_mt")}
- GLV: ${v("tf_glv")}
- GLV Extraído: ${v("tf_glv_extraido")}

📦 Materiais:
${v("tf_materiais")}

📝 Observações:
${v("tf_obs")}`;
    }

    /* ===== SS ===== */

    return [
`Operador: ${v("tf_operador")}`,
`Ocorrência: ${v("tf_ocorrencia")}`,
`N° Transformador: ${v("tf_trafo")}`,
`ID: ${v("tf_id")}`,
`Motivo: ${v("tf_motivo")}`,
`Causa: ${v("tf_causa")}`,

`Regional: ${v("tf_regional")}`,
`Cidade: ${v("tf_cidade")}`,
`Endereço: ${v("tf_endereco")}`,
`Referência: ${v("tf_referencia")}`,
`Coordenadas: ${v("tf_coord")}`,
`Acesso: ${v("tf_acesso")}`,

`Classe: ${v("tf_classe")}`,
`Potência: ${v("tf_potencia")}`,
`Proprietário: ${v("tf_proprietario")}`,
`Tensão: ${v("tf_tensao_sec")}`,
`Carregamento: ${v("tf_carregamento")}`,
`Corrosão: ${v("tf_corrosao")}`,
`Aterramento: ${v("tf_aterramento")}`,
`PRBT: ${v("tf_pr_bt")}`,
`PRMT: ${v("tf_pr_mt")}`,

`Clientes Totais: ${v("tf_total_clientes")}`,
`Desenergizados: ${v("tf_clientes_des")}`,
`Total Desenergizados: ${v("tf_total_des")}`,
`Circuito Transferido: ${v("tf_transferido")}`,

`Bitola MT: ${v("tf_bitola_mt")}`,
`GLV: ${v("tf_glv")}`,
`GLV Extraído: ${v("tf_glv_extraido")}`,

`Materiais: ${v("tf_materiais")}`,
`Observações: ${v("tf_obs")}`
    ]
    .map(l => l.trim() ? "- " + l : "")
    .join("\n");
}

/* =========================================
   UTIL
   ========================================= */

function copiarTexto(texto){
    navigator.clipboard.writeText(texto)
        .catch(()=> showToast("Erro ao copiar"));
}

/* =========================================
   LIMPAR
   ========================================= */

function limparTrafo(){

    document.querySelectorAll("#trafo input, #trafo select, #trafo textarea")
        .forEach(c=>{
            if(c.tagName === "SELECT"){
                c.selectedIndex = 0;
            }else{
                c.value = "";
            }
            c.style.border = "";
        });

    document.getElementById("tf_resultado").value = "";

    limparObrigatoriosTrafo();
}
