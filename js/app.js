const social=document.querySelectorAll('.left div ');

social.forEach((soc,index)=>{
soc.style.animation=` movein 1s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 +0.2}s`;
});
