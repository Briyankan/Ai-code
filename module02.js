function checkFITB(id) {
  const sec = document.getElementById(id);
  const inputs = sec.querySelectorAll('.blank-input');
  let correct = 0;
  inputs.forEach(inp => {
    const user = inp.value.trim().toLowerCase();
    const answers = inp.dataset.answer.toLowerCase().split('|');
    inp.classList.remove('correct','wrong');
    if (answers.some(a => user === a)) { inp.classList.add('correct'); correct++; }
    else if (user !== '') inp.classList.add('wrong');
  });
  document.getElementById(id+'-score').innerHTML =
    `<span class="score-badge">&#127942; Score: ${correct} / ${inputs.length}</span>`;
}
function resetFITB(id) {
  document.getElementById(id).querySelectorAll('.blank-input').forEach(inp => {
    inp.value=''; inp.classList.remove('correct','wrong');
  });
  document.getElementById(id+'-score').innerHTML='';
}
function selectMCQ(li) {
  li.parentElement.querySelectorAll('li').forEach(l => l.classList.remove('selected'));
  li.classList.add('selected');
}
function checkMCQ(id) {
  const sec = document.getElementById(id);
  const groups = sec.querySelectorAll('.mcq-options');
  let correct = 0;
  groups.forEach(ul => {
    const items = ul.querySelectorAll('li');
    const ci = parseInt(ul.dataset.answer);
    items.forEach((li,i) => {
      li.classList.remove('correct','wrong');
      if (li.classList.contains('selected')) {
        li.classList.add(i===ci?'correct':'wrong');
        if(i===ci) correct++;
      }
    });
    items[ci].classList.add('correct');
  });
  document.getElementById(id+'-score').innerHTML =
    `<span class="score-badge">&#127942; Score: ${correct} / ${groups.length}</span>`;
}
function resetMCQ(id) {
  document.getElementById(id).querySelectorAll('.mcq-options li').forEach(li=>li.classList.remove('selected','correct','wrong'));
  document.getElementById(id+'-score').innerHTML='';
}
function checkMatchingTable(id, scoreId) {
  const selects = document.querySelectorAll('#'+id+' .match-select');
  let correct = 0;
  selects.forEach(sel => {
    sel.classList.remove('correct','wrong');
    if (sel.value===sel.dataset.answer) { sel.classList.add('correct'); correct++; }
    else if (sel.value!=='') sel.classList.add('wrong');
  });
  document.getElementById(scoreId).innerHTML =
    `<span class="score-badge">&#127942; Score: ${correct} / ${selects.length}</span>`;
}
function resetMatchingTable(id, scoreId) {
  document.querySelectorAll('#'+id+' .match-select').forEach(sel=>{sel.value='';sel.classList.remove('correct','wrong');});
  document.getElementById(scoreId).innerHTML='';
}



/* ── Fill in the Blanks ── */
function checkFITB(id) {
  const sec = document.getElementById(id);
  const inputs = sec.querySelectorAll('.blank-input');
  let correct = 0;
  inputs.forEach(inp => {
    const user = inp.value.trim().toLowerCase();
    const answers = inp.dataset.answer.toLowerCase().split('|');
    inp.classList.remove('correct','wrong');
    if (answers.some(a => user === a)) { inp.classList.add('correct'); correct++; }
    else if (user !== '') inp.classList.add('wrong');
  });
  document.getElementById(id+'-score').innerHTML =
    `<span class="score-badge">&#127942; Score: ${correct} / ${inputs.length}</span>`;
}
function resetFITB(id) {
  document.getElementById(id).querySelectorAll('.blank-input').forEach(inp => {
    inp.value=''; inp.classList.remove('correct','wrong');
  });
  document.getElementById(id+'-score').innerHTML='';
}

/* ── MCQ ── */
function selectMCQ(li) {
  li.parentElement.querySelectorAll('li').forEach(l => l.classList.remove('selected'));
  li.classList.add('selected');
}
function checkMCQ(id) {
  const sec = document.getElementById(id);
  const groups = sec.querySelectorAll('.mcq-options');
  let correct = 0;
  groups.forEach(ul => {
    const items = ul.querySelectorAll('li');
    const ci = parseInt(ul.dataset.answer);
    items.forEach((li,i) => {
      li.classList.remove('correct','wrong');
      if (li.classList.contains('selected')) {
        li.classList.add(i===ci?'correct':'wrong');
        if(i===ci) correct++;
      }
    });
    items[ci].classList.add('correct');
  });
  document.getElementById(id+'-score').innerHTML =
    `<span class="score-badge">&#127942; Score: ${correct} / ${groups.length}</span>`;
}
function resetMCQ(id) {
  document.getElementById(id).querySelectorAll('.mcq-options li').forEach(li=>li.classList.remove('selected','correct','wrong'));
  document.getElementById(id+'-score').innerHTML='';
}

/* ── Matching ── */
function checkMatchingTable(id, scoreId) {
  const selects = document.querySelectorAll('#'+id+' .match-select');
  let correct = 0;
  selects.forEach(sel => {
    sel.classList.remove('correct','wrong');
    if (sel.value===sel.dataset.answer) { sel.classList.add('correct'); correct++; }
    else if (sel.value!=='') sel.classList.add('wrong');
  });
  document.getElementById(scoreId).innerHTML =
    `<span class="score-badge">&#127942; Score: ${correct} / ${selects.length}</span>`;
}
function resetMatchingTable(id, scoreId) {
  document.querySelectorAll('#'+id+' .match-select').forEach(sel=>{sel.value='';sel.classList.remove('correct','wrong');});
  document.getElementById(scoreId).innerHTML='';
}

/* ── Prompt Builder ── */
function buildPrompt() {
  const role = document.getElementById('pb-role').value.trim();
  const task = document.getElementById('pb-task').value.trim();
  const req  = document.getElementById('pb-req').value.trim();
  const con  = document.getElementById('pb-con').value.trim();
  const out  = document.getElementById('pb-out').value.trim();

  if (!role && !task && !req && !con && !out) {
    alert('Please fill in at least one field before building your prompt!');
    return;
  }

  let prompt = '';
  if (role) prompt += role + '\n\n';
  if (task) prompt += task + '\n\n';
  if (req)  prompt += 'Requirements:\n' + req + '\n\n';
  if (con)  prompt += con + '\n\n';
  if (out)  prompt += out;

  document.getElementById('prompt-output').textContent = prompt.trim();
  document.getElementById('prompt-result').style.display = 'block';
  document.getElementById('prompt-result').scrollIntoView({behavior:'smooth', block:'nearest'});
}
function clearBuilder() {
  ['pb-role','pb-task','pb-req','pb-con','pb-out'].forEach(id => document.getElementById(id).value='');
  document.getElementById('prompt-result').style.display='none';
}
