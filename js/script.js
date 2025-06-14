const cursorTrail=document.querySelector('.cursor-trail');
let trailTimeout;

document.addEventListener('mousemove',(e)=>{
    cursorTrail.style.opacity='0.6';
    cursorTrail.style.left='${e.clientX-10}px';
    cursorTrail.style.top='${e.clientY-10}px';

    clearTimeout(trailTimeout);
    trailTimeout=setTimeout(()=>{
        cursorTrail.style.opacity='0';
    },500)
})