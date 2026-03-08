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

const facilities = document.querySelectorAll('.facility-text');
const rooms = document.querySelectorAll('.facility-image');
const spicyFoods = document.querySelectorAll('.foods');
const foodItems = document.querySelectorAll('.grid-item');
const events = document.querySelectorAll('.event-text');
const festivals =  document.querySelectorAll('.events-card')

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });
   },  { threshold: 0.3 } );

facilities.forEach(content => observer.observe(content));
rooms.forEach(single => observer.observe(single));
spicyFoods.forEach(fooders => observer.observe(fooders));
foodItems.forEach(allFoods => observer.observe(allFoods));
events.forEach(functions => observer.observe(functions));
festivals.forEach(parties => observer.observe(parties));