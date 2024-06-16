//autotyping effect
var typed=new Typed(".auto-type",{
    strings: ["\"awesome\"","\"cool\"","\"a programmer\""],
    typeSpeed:200,
    backSpeed:150,
    loop: true
})

//spotlight effect
const spotlightEl = document.querySelector("#spotlight");
let timeoutId;
function handleMouseMove(event) {
    const { clientX, clientY } = event;

    timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
            spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 10px, #000000ee 350px)`;
        });
    }, 100);
}
document.addEventListener("mousemove", handleMouseMove);

//nav bar fade when scrolling down
let prevScrollPos = window.scrollY;
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    let currentScrollPos = window.scrollY;
    
    if (prevScrollPos > currentScrollPos||currentScrollPos<800) {
        document.getElementById('main-menu').style.opacity = "1"; 
    } else {
        document.getElementById('main-menu').style.opacity = "0.3"; 
        document.getElementById("main-menu").style.transition = "opacity 1s";
    }
    prevScrollPos = currentScrollPos;
}

//project slideshow effect
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.section');
    let currentProject = 0;
    const workSection = document.getElementById('work');
    
    window.addEventListener('wheel', (event) => {
        if (workSection.getBoundingClientRect().top==0) {
            if (event.deltaY > 0) {
                // Scroll down
                if (currentProject < projects.length - 1) {
                    event.preventDefault();
                    projects[currentProject].classList.remove('show');
                    projects[currentProject].classList.add('hide');
                    currentProject++;
                    projects[currentProject].classList.remove('hide');
                    projects[currentProject].classList.add('show');
                }
            } else {
                // Scroll up
                console.log(currentProject)
                if (currentProject > 0) {
                    event.preventDefault();
                    projects[currentProject].classList.remove('show');
                    projects[currentProject].classList.add('hide');
                    currentProject--;
                    projects[currentProject].classList.remove('hide');
                    projects[currentProject].classList.add('show');
                }
            }
        } 
    }, { passive: false });
});