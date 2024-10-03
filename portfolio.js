var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};





document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);  // Stop observing once animation is triggered
            }
        });
    }, { threshold: 0.1 });  // Trigger when 10% of the component is in view

    const elements = document.querySelectorAll('.fade-in-bottom');
    elements.forEach(element => {
        observer.observe(element);
    });


    // Initially show only the languages section
    document.getElementById("languages").style.display = "block";

    // Add event listeners to skill buttons
    const skillButtons = document.querySelectorAll('.skill-btn');
    skillButtons.forEach(button => {
        button.addEventListener('click', function() {
            const skillType = this.getAttribute('data-skill');

            // Hide all skill sections
            document.querySelectorAll('.skills-content').forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected skill section
            document.getElementById(skillType).style.display = 'block';
        });
    });

    document.getElementById("back-to-top").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
