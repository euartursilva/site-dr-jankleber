(function(){
  var lb=document.getElementById('lb'),img=document.getElementById('lbImg'),cap=document.getElementById('lbCap'),last=null;
  function close(){lb.classList.remove('open');if(last)last.focus();}
  document.querySelectorAll('.case').forEach(function(b){
    b.addEventListener('click',function(){last=b;img.src=b.dataset.full;img.alt=b.dataset.cap;cap.textContent=b.dataset.cap;lb.classList.add('open');document.getElementById('lbClose').focus();});
  });
  document.getElementById('lbClose').addEventListener('click',close);
  lb.addEventListener('click',function(e){if(e.target===lb)close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('open'))close();});
})();

/* ===== Modo apresentação ===== */
(function(){
  var STEPS=[
    {t:'#topo',k:'A primeira impressão',p:'Em três segundos o paciente vê o seu retrato profissional, a frase da sua bio e a prova de confiança: nota 5,0 no Google e mais de mil sorrisos transformados. O convite para agendar já aparece aqui.'},
    {t:'#topo',wa:true,k:'Agendamento com um toque',p:'O botão de WhatsApp acompanha o paciente em todas as telas. Ao tocar, abre a conversa com o seu número e uma mensagem pronta pedindo avaliação. Ele aparece no topo, no meio, no fim e flutuando no canto.'},
    {t:'#sobre',k:'Quem sou eu',p:'A sua história: a VETTE que nasceu de um terreno vazio, o propósito de fazer as pessoas sorrirem e o curso de facetas que o senhor ministrou na Anhanguera. Isso gera conexão antes da primeira consulta.'},
    {t:'#tratamentos',k:'Tratamentos',p:'Lentes de contato dental em destaque, seguidas de próteses, reabilitação, implantes (incluindo o zigomático), coroas, facetas e gengivoplastia. A lista e os textos se ajustam ao que o senhor quiser priorizar.'},
    {t:'#casos',k:'Casos reais',p:'Os seus antes e depois, com a sua assinatura, ampliam com um toque. O aviso de que cada caso precisa de avaliação individual mantém o site dentro das regras de publicidade odontológica.'},
    {t:'#processo',k:'Como funciona',p:'Quatro passos simples, da avaliação ao acompanhamento, que tiram o medo do paciente. Fecha com a sua frase: um sorriso bonito começa no planejamento.'},
    {t:'#videos',k:'Vídeos do Instagram',p:'Os seus reels aparecem no site e levam o visitante direto ao @dr.jankleber. Quem chega pelo Google vira seguidor, e quem é seguidor encontra o site.'},
    {t:'#clinica',k:'A clínica',p:'Recepção, consultório e atendimento com fotos reais. O paciente conhece o ambiente antes de chegar e se sente em casa.'},
    {t:'#depoimentos',k:'Depoimentos',p:'A nota 5,0 com 103 avaliações em destaque e as palavras dos próprios pacientes, como quem é atendido pelo senhor há mais de 15 anos.'},
    {t:'#contato',k:'Contato e localização',p:'WhatsApp, endereço, horário e rota no mapa, tudo num só lugar. Último passo antes do agendamento.'},
    {t:null,k:'Próximos passos',p:'O site funciona no celular, no tablet e no computador, e mostra o seu retrato quando o link é enviado no WhatsApp. Para colocar no ar com o seu domínio: confirmar horário, enviar fotos originais em alta e autorizar os casos e depoimentos.'}
  ];
  var i=0,body=document.body,panel,cover,bar,ttl,txt,cnt,prev,next;
  function build(){
    cover=document.createElement('div');cover.className='tour-cover';cover.setAttribute('role','dialog');cover.setAttribute('aria-modal','true');cover.setAttribute('aria-label','Apresentação do site');
    cover.innerHTML='<div class="tour-card"><span class="eyebrow">Proposta de site</span><span class="script">Dr. Jan Kleber</span><h2>Um site com a sua cara.</h2><p>Um tour rápido pelas seções, mostrando o que cada parte faz para trazer mais pacientes.</p><ul><li>Seus casos, sua história e sua nota 5,0</li><li>Agendamento direto pelo WhatsApp</li><li>Pronto para celular e para o Google</li></ul><div class="acts"><button type="button" class="btn btn-dark" id="tourStart">Começar apresentação</button><button type="button" class="btn btn-line" id="tourFree">Navegar livremente</button></div></div>';
    panel=document.createElement('aside');panel.className='tour-panel';panel.setAttribute('aria-live','polite');
    panel.innerHTML='<div class="tour-top"><span id="tourCnt"></span><button type="button" id="tourExit">Sair ✕</button></div><h3 id="tourTtl"></h3><p id="tourTxt"></p><div class="tour-bar"><i id="tourBar"></i></div><div class="tour-nav"><small>Use as setas ← → do teclado</small><div class="go"><button type="button" id="tourPrev">Anterior</button><button type="button" class="next" id="tourNext">Próximo</button></div></div>';
    body.appendChild(cover);body.appendChild(panel);
    bar=document.getElementById('tourBar');ttl=document.getElementById('tourTtl');txt=document.getElementById('tourTxt');cnt=document.getElementById('tourCnt');prev=document.getElementById('tourPrev');next=document.getElementById('tourNext');
    document.getElementById('tourStart').onclick=function(){cover.classList.remove('show');show(0);};
    document.getElementById('tourFree').onclick=function(){cover.classList.remove('show');};
    document.getElementById('tourExit').onclick=stop;
    prev.onclick=function(){if(i>0)show(i-1);};
    next.onclick=function(){if(i<STEPS.length-1)show(i+1);else{stop();cover.classList.add('show');}};
    document.addEventListener('keydown',function(e){
      if(!body.classList.contains('tour'))return;
      if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();next.click();}
      else if(e.key==='ArrowLeft'){e.preventDefault();prev.click();}
      else if(e.key==='Escape'){stop();}
    });
  }
  function show(n){
    i=n;var s=STEPS[n];body.classList.add('tour');body.classList.toggle('tour-wa',!!s.wa);
    document.querySelectorAll('main > section').forEach(function(el){el.classList.remove('tour-active');});
    var el=s.t?document.querySelector(s.t):null;
    if(el){el.classList.add('tour-active');el.scrollIntoView({behavior:'smooth',block:'start'});}
    else{document.querySelectorAll('main > section').forEach(function(x){x.classList.add('tour-active');});window.scrollTo({top:0,behavior:'smooth'});}
    cnt.textContent=(n+1)+' de '+STEPS.length;ttl.textContent=s.k;txt.textContent=s.p;
    bar.style.width=((n+1)/STEPS.length*100)+'%';
    prev.disabled=n===0;next.textContent=n===STEPS.length-1?'Concluir':'Próximo';
  }
  function stop(){body.classList.remove('tour','tour-wa');document.querySelectorAll('.tour-active').forEach(function(x){x.classList.remove('tour-active');});}
  var want=/apresentacao/.test(location.hash)||/apresentacao/.test(location.search);
  if(want){build();cover.classList.add('show');document.getElementById('tourStart').focus();}
})();
