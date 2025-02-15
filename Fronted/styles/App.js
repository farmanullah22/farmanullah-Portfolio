
// Our Mission Section

const cards = document.querySelectorAll(".mission-card");

const showOnScroll = () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();



// Our Project Section
function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {
        project.style.display = "none";
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        }
    });
}

// Scroll Animation
const cardss = document.querySelectorAll(".project-card");

const myshowOnScroll = () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
};

window.addEventListener("scroll", myshowOnScroll);
myshowOnScrollshowOnScroll();


// footer

 // Back to Top Button
 const backToTop = document.querySelector(".back-to-top");

 window.addEventListener("scroll", () => {
     if (window.scrollY > 300) {
         backToTop.style.display = "block";
     } else {
         backToTop.style.display = "none";
     }
 });

 function scrollToTop() {
     window.scrollTo({ top: 0, behavior: "smooth" });
 }