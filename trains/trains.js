// (function () {
//     const nav = performance.getEntriesByType("navigation")[0];
//     if (!nav) return;

//     // ONLY real browser refresh
//     if (nav.type === "reload") {
//         if (!window.location.pathname.endsWith("index.html")) {
//             window.location.replace("../index.html");
//         }
//     }
// })();

const destinations = document.querySelectorAll('.destinations-grid-container');
const travel = document.querySelectorAll('.card-container');
const posts = document.querySelectorAll('.posts-header');
const latestPost = document.querySelectorAll('.posts-grid');
const advance = document.querySelectorAll('.content-text')


const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });
   },  { threshold: 0.3 } );

destinations.forEach(card => observer.observe(card));
travel.forEach(top => observer.observe(top));
posts.forEach(latest => observer.observe(latest));
latestPost.forEach(trains => observer.observe(trains));
advance.forEach(tickets => observer.observe(tickets));