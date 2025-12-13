function showTab(id, el){
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById(id).classList.add('active');
}