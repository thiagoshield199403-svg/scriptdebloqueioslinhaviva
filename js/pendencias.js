/* =========================
   PENDÊNCIAS
========================= */

function eq_abrirPendencias(){
  document.getElementById("moduloEquipes").style.display="none";
  document.getElementById("moduloPendencias").style.display="block";
  eq_renderPendencias();
}

function eq_voltarEquipes(){
  document.getElementById("moduloPendencias").style.display="none";
  document.getElementById("moduloEquipes").style.display="block";
}

function eq_salvarPendencia(){
  if(!p_equipe.value || !p_descricao.value){
    alert("Informe OS/Ocorrência e descrição");
    return;
  }

  const obj={
    equipe:p_equipe.value.toUpperCase(),
    regional:p_regional.value,
    tipo:p_tipo.value,
    prioridade:p_prioridade.value,
    status:p_status.value,
    descricao:p_descricao.value,
    vencimento:p_vencimento.value
  };

  if(eq_editPend!==null){
    eq_pendencias[eq_editPend]=obj;
    eq_editPend=null;
  }else{
    eq_pendencias.push(obj);
  }

  localStorage.setItem("pendencias",JSON.stringify(eq_pendencias));
  eq_limparPendencia();
  eq_renderPendencias();
}

function eq_renderPendencias(){
  tabelaPendencias.innerHTML="";

  const hoje = new Date();
  hoje.setHours(0,0,0,0);

  eq_pendencias.forEach((p,i)=>{
    let dataBR="-", statusClasse="", dataClasse="";

    if(p.vencimento){
      const d=new Date(p.vencimento+"T00:00:00");
      dataBR=d.toLocaleDateString("pt-BR");
      if(d < hoje){
        statusClasse="status-vencido";
        dataClasse="status-vencido";
      }else{
        statusClasse="status-ok";
        dataClasse="status-ok";
      }
    }

    let classePrio="prio-normal";
    if(p.prioridade==="ALTA") classePrio="prio-alta";
    if(p.prioridade==="CRÍTICA") classePrio="prio-critica";

    tabelaPendencias.innerHTML+=`
<tr>
  <td>${p.equipe}</td>
  <td>${p.regional||"-"}</td>
  <td>${p.tipo||"-"}</td>
  <td style="text-align:left">${p.descricao}</td>
  <td class="${classePrio}">${p.prioridade}</td>
  <td class="${statusClasse}">${p.status}</td>
  <td class="${dataClasse}">${dataBR}</td>
  <td>
    <button onclick="eq_copiarPendencia(${i})">📋</button>
    <button onclick="eq_editarPendencia(${i})">✏️</button>
    <button onclick="eq_removerPendencia(${i})">🗑️</button>
  </td>
</tr>`;
  });
}

function eq_editarPendencia(i){
  const p=eq_pendencias[i];
  p_equipe.value=p.equipe;
  p_regional.value=p.regional;
  p_tipo.value=p.tipo;
  p_prioridade.value=p.prioridade;
  p_status.value=p.status;
  p_descricao.value=p.descricao;
  p_vencimento.value=p.vencimento;
  eq_editPend=i;
}

function eq_removerPendencia(i){
  if(confirm("Remover pendência?")){
    eq_pendencias.splice(i,1);
    localStorage.setItem("pendencias",JSON.stringify(eq_pendencias));
    eq_renderPendencias();
  }
}

function eq_limparPendencia(){
  p_equipe.value="";
  p_descricao.value="";
  p_regional.value="";
  p_tipo.value="";
  p_prioridade.value="NORMAL";
  p_status.value="PENDENTE";
  p_vencimento.value="";
  eq_editPend=null;
}

function eq_limparListaPendencias(){
  if(confirm("Limpar todas as pendências?")){
    eq_pendencias=[];
    localStorage.removeItem("pendencias");
    eq_renderPendencias();
  }
}

function eq_gerarRelatorioPendencias(){
  if(eq_pendencias.length===0){
    alert("Nenhuma pendência registrada");
    return;
  }

  let texto="🚨 PENDÊNCIAS DO DIA\n\n";
  eq_pendencias.forEach(p=>{
    texto+=`🧾 ${p.equipe} | ${p.regional||"-"} | ${p.tipo||"-"}
📝 ${p.descricao}
📅 Venc: ${p.vencimento||"-"}\n\n`;
  });

  navigator.clipboard.writeText(texto);
  alert("Relatório copiado!");
}

function eq_copiarPendencia(i){
  const p=eq_pendencias[i];
  const texto=
`🚨 PENDÊNCIA OPERACIONAL

🧾 OS/Ocorrência: ${p.equipe}
📍 Regional: ${p.regional||"-"}
📦 Tipo: ${p.tipo||"-"}
⚠ Prioridade: ${p.prioridade}
📌 Status: ${p.status}
📅 Vencimento: ${p.vencimento ? new Date(p.vencimento+"T00:00:00").toLocaleDateString("pt-BR") : "-"}
📝 Descrição:
${p.descricao}`;

  navigator.clipboard.writeText(texto);
  showToast("Pendência copiada 📋");
}
