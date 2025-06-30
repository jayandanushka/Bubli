const words = ["Logo", "Social Media", "Branding", "Creative", "Banners", "Cover", "Packaging", "Branding"];
const typingText = document.querySelector(".typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typingText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 150); // typing speed
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50); // deleting speed
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(type, 900); // pause between words
  }
}

type();


let currentProject = 0;
    const totalProjects = 4;
    const sliderTrack = document.getElementById('sliderTrack');

    function showProject(index) {
      sliderTrack.style.transform = `translateX(-${index * 100}vw)`;
    }

    function showNextProject() {
      currentProject = (currentProject + 1) % totalProjects;
      showProject(currentProject);
    }

    function showPreviousProject() {
      currentProject = (currentProject - 1 + totalProjects) % totalProjects;
      showProject(currentProject);
    }

    // Initial load
    showProject(currentProject);


    document.addEventListener("DOMContentLoaded", () => {
      // Observer for fade-in section (e.g. hire-me)
      const fadeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          });
        },
        {
          threshold: 0.1
        }
      );
  
      const fadeSection = document.querySelector('.fade-section');
      if (fadeSection) {
        fadeObserver.observe(fadeSection);
      }
  
      // Observer for point-heading animation
      const heading = document.querySelector(".point-heading");
      if (heading) {
        const headingObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              heading.classList.add("animate");
            } else {
              heading.classList.remove("animate");
            }
          });
        }, {
          threshold: 0.5
        });
  
        headingObserver.observe(heading);
      }
    });