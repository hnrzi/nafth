// Lightweight annotation manager
(function(){
const tooltip = document.getElementById('tooltip');
let currentAnnot = null;


function showTooltip(targetEl, data){
if(!data) return;
tooltip.innerHTML = '';
const title = document.createElement('div'); title.className='title'; title.textContent = data.title || '';
const body = document.createElement('div'); body.className='body'; body.innerHTML = data.html || data.text || '';
tooltip.appendChild(title); tooltip.appendChild(body);
tooltip.style.display = 'block'; tooltip.setAttribute('aria-hidden','false');
positionTooltip(targetEl);
}


function positionTooltip(targetEl){
const rect = targetEl.getBoundingClientRect();
const ttRect = tooltip.getBoundingClientRect();
const gap = 8;
// prefer above; else below
let top = rect.top - ttRect.height - gap;
if(top < 6) top = rect.bottom + gap;
// horizontally center
let left = rect.left + (rect.width - ttRect.width)/2;
if(left < 6) left = 6;
if(left + ttRect.width > window.innerWidth - 6) left = window.innerWidth - ttRect.width - 6;
tooltip.style.top = top + window.scrollY + 'px';
tooltip.style.left = left + window.scrollX + 'px';
}


function hideTooltip(){ tooltip.style.display='none'; tooltip.setAttribute('aria-hidden','true'); currentAnnot=null }


// Public API
window.Annotations = {
wire: function(container, annotationMap){
container.querySelectorAll('.annot').forEach(el => {
const id = el.dataset.annotId;
const data = annotationMap && annotationMap[id];
// hover (desktop)
el.addEventListener('mouseenter', e => { currentAnnot = el; showTooltip(el, data); });
el.addEventListener('mouseleave', e => { hideTooltip(); });
// focusable for keyboard
el.setAttribute('tabindex','0');
el.addEventListener('focus', e => { showTooltip(el, data); });
el.addEventListener('blur', e => { hideTooltip(); });
// touch / click for mobile
el.addEventListener('click', e => {
e.preventDefault();
if(currentAnnot === el){ hideTooltip(); } else { currentAnnot = el; showTooltip(el, data); }
});
});


// hide on outside click
document.addEventListener('click', ev => {
if(!ev.target.closest('.annot') && !ev.target.closest('#tooltip')) hideTooltip();
})();// Lightweight annotation manager
(function(){
const tooltip = document.getElementById('tooltip');
let currentAnnot = null;


function showTooltip(targetEl, data){
if(!data) return;
tooltip.innerHTML = '';
const title = document.createElement('div'); title.className='title'; title.textContent = data.title || '';
const body = document.createElement('div'); body.className='body'; body.innerHTML = data.html || data.text || '';
tooltip.appendChild(title); tooltip.appendChild(body);
tooltip.style.display = 'block'; tooltip.setAttribute('aria-hidden','false');
positionTooltip(targetEl);
}


function positionTooltip(targetEl){
const rect = targetEl.getBoundingClientRect();
const ttRect = tooltip.getBoundingClientRect();
const gap = 8;
// prefer above; else below
let top = rect.top - ttRect.height - gap;
if(top < 6) top = rect.bottom + gap;
// horizontally center
let left = rect.left + (rect.width - ttRect.width)/2;
if(left < 6) left = 6;
if(left + ttRect.width > window.innerWidth - 6) left = window.innerWidth - ttRect.width - 6;
tooltip.style.top = top + window.scrollY + 'px';
tooltip.style.left = left + window.scrollX + 'px';
}


function hideTooltip(){ tooltip.style.display='none'; tooltip.setAttribute('aria-hidden','true'); currentAnnot=null }


// Public API
window.Annotations = {
wire: function(container, annotationMap){
container.querySelectorAll('.annot').forEach(el => {
const id = el.dataset.annotId;
const data = annotationMap && annotationMap[id];
// hover (desktop)
el.addEventListener('mouseenter', e => { currentAnnot = el; showTooltip(el, data); });
el.addEventListener('mouseleave', e => { hideTooltip(); });
// focusable for keyboard
el.setAttribute('tabindex','0');
el.addEventListener('focus', e => { showTooltip(el, data); });
el.addEventListener('blur', e => { hideTooltip(); });
// touch / click for mobile
el.addEventListener('click', e => {
e.preventDefault();
if(currentAnnot === el){ hideTooltip(); } else { currentAnnot = el; showTooltip(el, data); }
});
});


// hide on outside click
document.addEventListener('click', ev => {
if(!ev.target.closest('.annot') && !ev.target.closest('#tooltip')) hideTooltip();
})();// Lightweight annotation manager
(function(){
const tooltip = document.getElementById('tooltip');
let currentAnnot = null;


function showTooltip(targetEl, data){
if(!data) return;
tooltip.innerHTML = '';
const title = document.createElement('div'); title.className='title'; title.textContent = data.title || '';
const body = document.createElement('div'); body.className='body'; body.innerHTML = data.html || data.text || '';
tooltip.appendChild(title); tooltip.appendChild(body);
tooltip.style.display = 'block'; tooltip.setAttribute('aria-hidden','false');
positionTooltip(targetEl);
}


function positionTooltip(targetEl){
const rect = targetEl.getBoundingClientRect();
const ttRect = tooltip.getBoundingClientRect();
const gap = 8;
// prefer above; else below
let top = rect.top - ttRect.height - gap;
if(top < 6) top = rect.bottom + gap;
// horizontally center
let left = rect.left + (rect.width - ttRect.width)/2;
if(left < 6) left = 6;
if(left + ttRect.width > window.innerWidth - 6) left = window.innerWidth - ttRect.width - 6;
tooltip.style.top = top + window.scrollY + 'px';
tooltip.style.left = left + window.scrollX + 'px';
}


function hideTooltip(){ tooltip.style.display='none'; tooltip.setAttribute('aria-hidden','true'); currentAnnot=null }


// Public API
window.Annotations = {
wire: function(container, annotationMap){
container.querySelectorAll('.annot').forEach(el => {
const id = el.dataset.annotId;
const data = annotationMap && annotationMap[id];
// hover (desktop)
el.addEventListener('mouseenter', e => { currentAnnot = el; showTooltip(el, data); });
el.addEventListener('mouseleave', e => { hideTooltip(); });
// focusable for keyboard
el.setAttribute('tabindex','0');
el.addEventListener('focus', e => { showTooltip(el, data); });
el.addEventListener('blur', e => { hideTooltip(); });
// touch / click for mobile
el.addEventListener('click', e => {
e.preventDefault();
if(currentAnnot === el){ hideTooltip(); } else { currentAnnot = el; showTooltip(el, data); }
});
});


// hide on outside click
document.addEventListener('click', ev => {
if(!ev.target.closest('.annot') && !ev.target.closest('#tooltip')) hideTooltip();
})();// Lightweight annotation manager
(function(){
const tooltip = document.getElementById('tooltip');
let currentAnnot = null;


function showTooltip(targetEl, data){
if(!data) return;
tooltip.innerHTML = '';
const title = document.createElement('div'); title.className='title'; title.textContent = data.title || '';
const body = document.createElement('div'); body.className='body'; body.innerHTML = data.html || data.text || '';
tooltip.appendChild(title); tooltip.appendChild(body);
tooltip.style.display = 'block'; tooltip.setAttribute('aria-hidden','false');
positionTooltip(targetEl);
}


function positionTooltip(targetEl){
const rect = targetEl.getBoundingClientRect();
const ttRect = tooltip.getBoundingClientRect();
const gap = 8;
// prefer above; else below
let top = rect.top - ttRect.height - gap;
if(top < 6) top = rect.bottom + gap;
// horizontally center
let left = rect.left + (rect.width - ttRect.width)/2;
if(left < 6) left = 6;
if(left + ttRect.width > window.innerWidth - 6) left = window.innerWidth - ttRect.width - 6;
tooltip.style.top = top + window.scrollY + 'px';
tooltip.style.left = left + window.scrollX + 'px';
}


function hideTooltip(){ tooltip.style.display='none'; tooltip.setAttribute('aria-hidden','true'); currentAnnot=null }


// Public API
window.Annotations = {
wire: function(container, annotationMap){
container.querySelectorAll('.annot').forEach(el => {
const id = el.dataset.annotId;
const data = annotationMap && annotationMap[id];
// hover (desktop)
el.addEventListener('mouseenter', e => { currentAnnot = el; showTooltip(el, data); });
el.addEventListener('mouseleave', e => { hideTooltip(); });
// focusable for keyboard
el.setAttribute('tabindex','0');
el.addEventListener('focus', e => { showTooltip(el, data); });
el.addEventListener('blur', e => { hideTooltip(); });
// touch / click for mobile
el.addEventListener('click', e => {
e.preventDefault();
if(currentAnnot === el){ hideTooltip(); } else { currentAnnot = el; showTooltip(el, data); }
});
});


// hide on outside click
document.addEventListener('click', ev => {
if(!ev.target.closest('.annot') && !ev.target.closest('#tooltip')) hideTooltip();
})();// Lightweight annotation manager
(function(){
const tooltip = document.getElementById('tooltip');
let currentAnnot = null;


function showTooltip(targetEl, data){
if(!data) return;
tooltip.innerHTML = '';
const title = document.createElement('div'); title.className='title'; title.textContent = data.title || '';
const body = document.createElement('div'); body.className='body'; body.innerHTML = data.html || data.text || '';
tooltip.appendChild(title); tooltip.appendChild(body);
tooltip.style.display = 'block'; tooltip.setAttribute('aria-hidden','false');
positionTooltip(targetEl);
}


function positionTooltip(targetEl){
const rect = targetEl.getBoundingClientRect();
const ttRect = tooltip.getBoundingClientRect();
const gap = 8;
// prefer above; else below
let top = rect.top - ttRect.height - gap;
if(top < 6) top = rect.bottom + gap;
// horizontally center
let left = rect.left + (rect.width - ttRect.width)/2;
if(left < 6) left = 6;
if(left + ttRect.width > window.innerWidth - 6) left = window.innerWidth - ttRect.width - 6;
tooltip.style.top = top + window.scrollY + 'px';
tooltip.style.left = left + window.scrollX + 'px';
}


function hideTooltip(){ tooltip.style.display='none'; tooltip.setAttribute('aria-hidden','true'); currentAnnot=null }


// Public API
window.Annotations = {
wire: function(container, annotationMap){
container.querySelectorAll('.annot').forEach(el => {
const id = el.dataset.annotId;
const data = annotationMap && annotationMap[id];
// hover (desktop)
el.addEventListener('mouseenter', e => { currentAnnot = el; showTooltip(el, data); });
el.addEventListener('mouseleave', e => { hideTooltip(); });
// focusable for keyboard
el.setAttribute('tabindex','0');
el.addEventListener('focus', e => { showTooltip(el, data); });
el.addEventListener('blur', e => { hideTooltip(); });
// touch / click for mobile
el.addEventListener('click', e => {
e.preventDefault();
if(currentAnnot === el){ hideTooltip(); } else { currentAnnot = el; showTooltip(el, data); }
});
});


// hide on outside click
document.addEventListener('click', ev => {
if(!ev.target.closest('.annot') && !ev.target.closest('#tooltip')) hideTooltip();
})();// Lightweight annotation manager
(function(){
const tooltip = document.getElementById('tooltip');
let currentAnnot = null;


function showTooltip(targetEl, data){
if(!data) return;
tooltip.innerHTML = '';
const title = document.createElement('div'); title.className='title'; title.textContent = data.title || '';
const body = document.createElement('div'); body.className='body'; body.innerHTML = data.html || data.text || '';
tooltip.appendChild(title); tooltip.appendChild(body);
tooltip.style.display = 'block'; tooltip.setAttribute('aria-hidden','false');
positionTooltip(targetEl);
}


function positionTooltip(targetEl){
const rect = targetEl.getBoundingClientRect();
const ttRect = tooltip.getBoundingClientRect();
const gap = 8;
// prefer above; else below
let top = rect.top - ttRect.height - gap;
if(top < 6) top = rect.bottom + gap;
// horizontally center
let left = rect.left + (rect.width - ttRect.width)/2;
if(left < 6) left = 6;
if(left + ttRect.width > window.innerWidth - 6) left = window.innerWidth - ttRect.width - 6;
tooltip.style.top = top + window.scrollY + 'px';
tooltip.style.left = left + window.scrollX + 'px';
}


function hideTooltip(){ tooltip.style.display='none'; tooltip.setAttribute('aria-hidden','true'); currentAnnot=null }


// Public API
window.Annotations = {
wire: function(container, annotationMap){
container.querySelectorAll('.annot').forEach(el => {
const id = el.dataset.annotId;
const data = annotationMap && annotationMap[id];
// hover (desktop)
el.addEventListener('mouseenter', e => { currentAnnot = el; showTooltip(el, data); });
el.addEventListener('mouseleave', e => { hideTooltip(); });
// focusable for keyboard
el.setAttribute('tabindex','0');
el.addEventListener('focus', e => { showTooltip(el, data); });
el.addEventListener('blur', e => { hideTooltip(); });
// touch / click for mobile
el.addEventListener('click', e => {
e.preventDefault();
if(currentAnnot === el){ hideTooltip(); } else { currentAnnot = el; showTooltip(el, data); }
});
});


// hide on outside click
document.addEventListener('click', ev => {
if(!ev.target.closest('.annot') && !ev.target.closest('#tooltip')) hideTooltip();
})();// Lightweight annotation manager
(function(){
const tooltip = document.getElementById('tooltip');
let currentAnnot = null;


function showTooltip(targetEl, data){
if(!data) return;
tooltip.innerHTML = '';
const title = document.createElement('div'); title.className='title'; title.textContent = data.title || '';
const body = document.createElement('div'); body.className='body'; body.innerHTML = data.html || data.text || '';
tooltip.appendChild(title); tooltip.appendChild(body);
tooltip.style.display = 'block'; tooltip.setAttribute('aria-hidden','false');
positionTooltip(targetEl);
}


function positionTooltip(targetEl){
const rect = targetEl.getBoundingClientRect();
const ttRect = tooltip.getBoundingClientRect();
const gap = 8;
// prefer above; else below
let top = rect.top - ttRect.height - gap;
if(top < 6) top = rect.bottom + gap;
// horizontally center
let left = rect.left + (rect.width - ttRect.width)/2;
if(left < 6) left = 6;
if(left + ttRect.width > window.innerWidth - 6) left = window.innerWidth - ttRect.width - 6;
tooltip.style.top = top + window.scrollY + 'px';
tooltip.style.left = left + window.scrollX + 'px';
}


function hideTooltip(){ tooltip.style.display='none'; tooltip.setAttribute('aria-hidden','true'); currentAnnot=null }


// Public API
window.Annotations = {
wire: function(container, annotationMap){
container.querySelectorAll('.annot').forEach(el => {
const id = el.dataset.annotId;
const data = annotationMap && annotationMap[id];
// hover (desktop)
el.addEventListener('mouseenter', e => { currentAnnot = el; showTooltip(el, data); });
el.addEventListener('mouseleave', e => { hideTooltip(); });
// focusable for keyboard
el.setAttribute('tabindex','0');
el.addEventListener('focus', e => { showTooltip(el, data); });
el.addEventListener('blur', e => { hideTooltip(); });
// touch / click for mobile
el.addEventListener('click', e => {
e.preventDefault();
if(currentAnnot === el){ hideTooltip(); } else { currentAnnot = el; showTooltip(el, data); }
});
});


// hide on outside click
document.addEventListener('click', ev => {
if(!ev.target.closest('.annot') && !ev.target.closest('#tooltip')) hideTooltip();
})();// Lightweight annotation manager
(function(){
const tooltip = document.getElementById('tooltip');
let currentAnnot = null;


function showTooltip(targetEl, data){
if(!data) return;
tooltip.innerHTML = '';
const title = document.createElement('div'); title.className='title'; title.textContent = data.title || '';
const body = document.createElement('div'); body.className='body'; body.innerHTML = data.html || data.text || '';
tooltip.appendChild(title); tooltip.appendChild(body);
tooltip.style.display = 'block'; tooltip.setAttribute('aria-hidden','false');
positionTooltip(targetEl);
}


function positionTooltip(targetEl){
const rect = targetEl.getBoundingClientRect();
const ttRect = tooltip.getBoundingClientRect();
const gap = 8;
// prefer above; else below
let top = rect.top - ttRect.height - gap;
if(top < 6) top = rect.bottom + gap;
// horizontally center
let left = rect.left + (rect.width - ttRect.width)/2;
if(left < 6) left = 6;
if(left + ttRect.width > window.innerWidth - 6) left = window.innerWidth - ttRect.width - 6;
tooltip.style.top = top + window.scrollY + 'px';
tooltip.style.left = left + window.scrollX + 'px';
}


function hideTooltip(){ tooltip.style.display='none'; tooltip.setAttribute('aria-hidden','true'); currentAnnot=null }


// Public API
window.Annotations = {
wire: function(container, annotationMap){
container.querySelectorAll('.annot').forEach(el => {
const id = el.dataset.annotId;
const data = annotationMap && annotationMap[id];
// hover (desktop)
el.addEventListener('mouseenter', e => { currentAnnot = el; showTooltip(el, data); });
el.addEventListener('mouseleave', e => { hideTooltip(); });
// focusable for keyboard
el.setAttribute('tabindex','0');
el.addEventListener('focus', e => { showTooltip(el, data); });
el.addEventListener('blur', e => { hideTooltip(); });
// touch / click for mobile
el.addEventListener('click', e => {
e.preventDefault();
if(currentAnnot === el){ hideTooltip(); } else { currentAnnot = el; showTooltip(el, data); }
});
});


// hide on outside click
document.addEventListener('click', ev => {
if(!ev.target.closest('.annot') && !ev.target.closest('#tooltip')) hideTooltip();
})();// Lightweight annotation manager
(function(){
const tooltip = document.getElementById('tooltip');
let currentAnnot = null;


function showTooltip(targetEl, data){
if(!data) return;
tooltip.innerHTML = '';
const title = document.createElement('div'); title.className='title'; title.textContent = data.title || '';
const body = document.createElement('div'); body.className='body'; body.innerHTML = data.html || data.text || '';
tooltip.appendChild(title); tooltip.appendChild(body);
tooltip.style.display = 'block'; tooltip.setAttribute('aria-hidden','false');
positionTooltip(targetEl);
}


function positionTooltip(targetEl){
const rect = targetEl.getBoundingClientRect();
const ttRect = tooltip.getBoundingClientRect();
const gap = 8;
// prefer above; else below
let top = rect.top - ttRect.height - gap;
if(top < 6) top = rect.bottom + gap;
// horizontally center
let left = rect.left + (rect.width - ttRect.width)/2;
if(left < 6) left = 6;
if(left + ttRect.width > window.innerWidth - 6) left = window.innerWidth - ttRect.width - 6;
tooltip.style.top = top + window.scrollY + 'px';
tooltip.style.left = left + window.scrollX + 'px';
}


function hideTooltip(){ tooltip.style.display='none'; tooltip.setAttribute('aria-hidden','true'); currentAnnot=null }


// Public API
window.Annotations = {
wire: function(container, annotationMap){
container.querySelectorAll('.annot').forEach(el => {
const id = el.dataset.annotId;
const data = annotationMap && annotationMap[id];
// hover (desktop)
el.addEventListener('mouseenter', e => { currentAnnot = el; showTooltip(el, data); });
el.addEventListener('mouseleave', e => { hideTooltip(); });
// focusable for keyboard
el.setAttribute('tabindex','0');
el.addEventListener('focus', e => { showTooltip(el, data); });
el.addEventListener('blur', e => { hideTooltip(); });
// touch / click for mobile
el.addEventListener('click', e => {
e.preventDefault();
if(currentAnnot === el){ hideTooltip(); } else { currentAnnot = el; showTooltip(el, data); }
});
});


// hide on outside click
document.addEventListener('click', ev => {
if(!ev.target.closest('.annot') && !ev.target.closest('#tooltip')) hideTooltip();
})();
