// main site logic: load pages, load annotations JSON, navigation
(function(){
const pageSelect = document.getElementById('pageSelect');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageContent = document.getElementById('pageContent');
const search = document.getElementById('search');


// configure: how many pages in the edition? change to 100
const TOTAL_PAGES = 100;
function pageId(n){ return String(n).padStart(3,'0'); }


// fill selector
for(let i=1;i<=TOTAL_PAGES;i++){
const opt = document.createElement('option'); opt.value = i; opt.textContent = 'صفحه '+i;
pageSelect.appendChild(opt);
}


function loadPage(n){
const id = pageId(n);
pageSelect.value = n;
// fetch page HTML and annotation JSON in parallel
Promise.all([
fetch(`pages/page-${id}.html`).then(r=> r.ok ? r.text() : Promise.reject('page not found')),
fetch(`annotations/page-${id}.json`).then(r=> r.ok ? r.json() : ({}))
]).then(([html, ann]) => {
pageContent.innerHTML = html;
// wire annotations
if(window.Annotations) window.Annotations.wire(pageContent, ann);
history.replaceState({page:n}, '', `?page=${n}`);
// scroll to top
window.scrollTo({top:0, behavior:'instant'});
}).catch(err => {
pageContent.innerHTML = `<p>صفحهٔ مورد نظر پیدا نشد. (${err})</p>`;
});
}


function currentPage(){ return Number(pageSelect.value) || 1 }


prevBtn.addEventListener('click', ()=>{ const p = Math.max(1, currentPage()-1); loadPage(p); });
nextBtn.addEventListener('click', ()=>{ const p = Math.min(TOTAL_PAGES, currentPage()+1); loadPage(p); });
pageSelect.addEventListener('change', ()=> loadPage(currentPage()));


// search: simple client-side find within loaded page
search.addEventListener('input', ()=>{
const q = search.value.trim();
if(!q){ // clear highlights
pageContent.querySelectorAll('mark._srch').forEach(m=> m.replaceWith(...m.childNodes));
return;
}
const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), 'gi');
// naive highlight
pageContent.querySelectorAll('p').forEach(p => {
p.innerHTML = p.textContent.replace(re, s => `<mark class="_srch">${s}</mark>`);
});
});


// initial load: check ?page= param
const params = new URLSearchParams(location.search);
const start = Number(params.get('page')) || 1;
loadPage(start);
})();
