/* ================================
   MÓDULO EQUIPES (ISOLADO)
================================ */

let eq_dados = JSON.parse(localStorage.getItem("equipes")) || [];
let eq_pendencias = JSON.parse(localStorage.getItem("pendencias")) || [];
let eq_edit = null;
let eq_editPend = null;

/* ===== MAPAS ===== */
function eq_abrirMapa(src){
  const modal = document.getElementById("modal-mapa");
  const img = document.getElementById("modal-img");

  img.src = src;
  modal.style.display = "flex";
}

function eq_fecharMapa(e){
  if(e.target.id === "modal-mapa"){
    document.getElementById("modal-mapa").style.display = "none";
  }
}

/* ===== EQUIPES ===== */
function eq_salvar(){
  if(!eq_equipe.value.trim()){
    alert("Informe a equipe");
    return;
  }

  const obj = {
    equipe: eq_equipe.value.toUpperCase(),
    integrantes: eq_integrantes.value.toUpperCase(),
    telefone: eq_telefone.value,
    viatura: eq_viatura.value,
    radio: eq_radio.value,
    tipo: eq_tipo.value,
    regional: eq_regional.value,
    obs: eq_obs.value,
    alerta: eq_alerta.value
  };

  if(eq_edit !== null){
    eq_dados[eq_edit] = obj;
    eq_edit = null;
  } else {
    eq_dados.push(obj);
  }

  localStorage.setItem("equipes", JSON.stringify(eq_dados));
  eq_limpar();
  eq_render();
}

function eq_render(){
  eq_tabela.innerHTML = "";
  let total = 0;

  eq_dados.forEach((d,i)=>{
    if(
      (!eq_busca.value || d.equipe.includes(eq_busca.value.toUpperCase())) &&
      (!eq_filtroRegional.value || d.regional === eq_filtroRegional.value)
    ){
      total++;

      let icone = "";
      if(d.alerta){
        let emoji = d.alerta.match(/^[^\s]+/)[0];
        let cor = "vermelho";

        if(
          d.alerta.includes("Religação") ||
          d.alerta.includes("Falta")
        ){
          cor = "amarelo";
        }

        icone = `<span class="alerta ${cor}" title="${d.alerta}">${emoji}</span>`;
      }

      eq_tabela.innerHTML += `
<tr>
  <td>${d.equipe}</td>
  <td>${d.integrantes || "-"}</td>
  <td>${d.telefone || "-"}</td>
  <td>${d.viatura || "-"}</td>
  <td>${d.radio}</td>
  <td>${d.tipo}</td>
  <td>${d.regional || "-"}</td>
  <td>${d.obs || "-"}</td>
  <td>${icone}</td>
  <td>
    <button onclick="eq_copiarEquipe(${i})" class="btn-icone btn-sec">📋</button>
    <button onclick="eq_editar(${i})" class="btn-icone btn-editar">✏️</button>
    <button onclick="eq_remover(${i})" class="btn-icone btn-excluir">🗑️</button>
  </td>
</tr>`;
    }
  });

  eq_resumo.innerText = `Total de equipes exibidas: ${total}`;
}

function eq_editar(i){
  const d = eq_dados[i];
  eq_equipe.value = d.equipe;
  eq_integrantes.value = d.integrantes;
  eq_telefone.value = d.telefone;
  eq_viatura.value = d.viatura;
  eq_radio.value = d.radio;
  eq_tipo.value = d.tipo;
  eq_regional.value = d.regional;
  eq_obs.value = d.obs;
  eq_alerta.value = d.alerta;
  eq_edit = i;
}

function eq_remover(i){
  if(confirm("Remover equipe?")){
    eq_dados.splice(i,1);
    localStorage.setItem("equipes", JSON.stringify(eq_dados));
    eq_render();
  }
}

function eq_limpar(){
  eq_equipe.value="";
  eq_integrantes.value="";
  eq_telefone.value="";
  eq_viatura.value="";
  eq_obs.value="";
  eq_alerta.value="";
  eq_regional.value="";
  eq_edit = null;
}

function eq_limparLista(){
  if(confirm("Deseja limpar toda a lista?")){
    eq_dados = [];
    localStorage.removeItem("equipes");
    eq_render();
  }
}

function eq_exportar(){
  let csv="Equipe;Integrantes;Telefone;Viatura;Rádio;Tipo;Regional;Obs;Alerta\n";
  eq_dados.forEach(d=>{
    csv+=`${d.equipe};${d.integrantes};${d.telefone};${d.viatura};${d.radio};${d.tipo};${d.regional};${d.obs};${d.alerta}\n`;
  });

  let a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));
  a.download="equipes.csv";
  a.click();
}

function eq_toggleMapa(){
  const mapas = document.getElementById("mapas-container");
  if(mapas) mapas.classList.toggle("hidden");
}

function eq_copiarEquipe(i){
  const d = eq_dados[i];

  const texto = `📋 EQUIPE DE CAMPO

👥 Equipe: ${d.equipe}
👤 Integrantes: ${d.integrantes || "-"}
📞 Telefone: ${d.telefone || "-"}
🚐 Viatura: ${d.viatura || "-"}
📡 Rádio: ${d.radio || "-"}
🔁 Tipo: ${d.tipo || "-"}
📍 Regional: ${d.regional || "-"}
📝 Obs: ${d.obs || "-"}`;

  navigator.clipboard.writeText(texto);
  showToast("Dados da equipe copiados 📋");
}

/* INIT */
eq_render();
