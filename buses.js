// (function () {
//     const nav = performance.getEntriesByType("navigation")[0];
//     if (!nav) return;

//     if (nav.type === "reload") {
//         if (!window.location.pathname.endsWith("index.html")) {
//             window.location.replace("../index.html");
//         }
//     }
// })();

// window.addEventListener("beforeunload", function () {
//     window.scrollTo(0, 0);
// });

const routes = document.querySelectorAll('.route');
const routeBoxes = document.querySelectorAll('.route-box');
const fadeElements = document.querySelectorAll('.features');
const timeTable = document.querySelectorAll('.bus-time');


const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.target.classList.contains("features") || entry.target.classList.contains("bus-time")) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            } else {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }

            }

        });
    },
    { threshold: 0.3 }
);

routes.forEach(route => observer.observe(route));
routeBoxes.forEach(box => observer.observe(box));
fadeElements.forEach(el => observer.observe(el));
timeTable.forEach(time => observer.observe(time));




