// start of add and remove navigation active class
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link =>{
    if (link.href.includes(`${activePage}`)){
    link.classList.add('home');
  }
});
// end of add and remove navigation active class


//Start TO Top link codes
const toTop= document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
});
//End of TO Top link codes

document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { id: 'progress-html', percentage: 90 },   // HTML skill level
        { id: 'progress-css', percentage: 85 },    // CSS skill level
        { id: 'progress-js', percentage: 75 }      // JS skill level
    ];

    skills.forEach(skill => {
        const progressBar = document.getElementById(skill.id);
        const progressValue = progressBar.querySelector('.progress-value');

        let progressStart = 0;
        let progressEnd = skill.percentage;
        let speed = 20;

        let progress = setInterval(() => {
            progressStart++;
            progressValue.textContent = `${progressStart}%`;
            progressBar.style.background = `conic-gradient(#511F52 ${progressStart * 3.6}deg, #ddd 0deg)`;

            if (progressStart >= progressEnd) {
                clearInterval(progress);
            }
        }, speed);
    });
});
