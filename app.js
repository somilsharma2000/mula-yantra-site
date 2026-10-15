(function(){
var burger=document.querySelector('.burger'),menu=document.querySelector('.menu');
if(burger&&menu){burger.addEventListener('click',function(){var open=menu.classList.toggle('open');burger.setAttribute('aria-expanded',open)})}
var CONTACT_EMAIL='hello@mulayantra.com';/* TODO(founder): confirm final domain + mailbox before launch */
var f=document.querySelector('form[data-mailto]');
if(f){f.addEventListener('submit',function(e){e.preventDefault();
var g=function(n){return f.querySelector('[name='+n+']').value};
location.href='mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent('Website contact: '+g('name'))+'&body='+encodeURIComponent(g('message')+'\n\n— '+g('name')+' <'+g('email')+'>');});}
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});}
else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')})}
var y=document.querySelector('[data-year]');if(y)y.textContent=new Date().getFullYear();
})();
