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

const findDetinations = document.querySelectorAll('.activities-title');
const activities = document.querySelectorAll('.activities-container');
const information = document.querySelectorAll('.info-container');
const fareDeals = document.querySelectorAll('.deals-title');
const subscribes = document.querySelectorAll('.subscribe');
const promoEvents =  document.querySelectorAll('.promo-text')
const promoContent = document.querySelectorAll('.content');


const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });
   },  { threshold: 0.3 } );

findDetinations.forEach(perfect => observer.observe(perfect));
activities.forEach(golf => observer.observe(golf));
information.forEach(info => observer.observe(info));
fareDeals.forEach(city => observer.observe(city));
subscribes.forEach(email => observer.observe(email));
promoEvents.forEach(promotions => observer.observe(promotions))
promoContent.forEach(promoField => observer.observe(promoField))