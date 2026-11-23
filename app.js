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
