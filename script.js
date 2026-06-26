// Sticky Navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.style.background = "rgba(0,0,0,.92)";
        navbar.style.padding = "18px 8%";
    } else {
        navbar.style.background = "rgba(255,255,255,.08)";
        navbar.style.padding = "25px 8%";
    }

});


// Counter Animation

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = target / 100;

    const update = () => {

        current += increment;

        if(current < target){

            if(target % 1 !== 0){

                counter.innerText = current.toFixed(1);

            }else{

                counter.innerText = Math.floor(current);

            }

            requestAnimationFrame(update);

        }else{

            counter.innerText = target;

        }

    }

    update();

}

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter=>{

    observer.observe(counter);

});
const hamburger=document.querySelector(".hamburger");

const navLinks=document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});
const testimonials = document.querySelectorAll(".testimonial");

const nextBtn = document.getElementById("next");

const prevBtn = document.getElementById("prev");

let current = 0;

function showSlide(index){

    testimonials.forEach(item=>{

        item.classList.remove("active");

    });

    testimonials[index].classList.add("active");

}

nextBtn.addEventListener("click",()=>{

    current++;

    if(current >= testimonials.length){

        current = 0;

    }

    showSlide(current);

});

prevBtn.addEventListener("click",()=>{

    current--;

    if(current < 0){

        current = testimonials.length - 1;

    }

    showSlide(current);

});

setInterval(()=>{

    current++;

    if(current >= testimonials.length){

        current = 0;

    }

    showSlide(current);

},5000);
