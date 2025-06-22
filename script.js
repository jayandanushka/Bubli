const words = ["Logo", "Social Media", "Branding", "Ad Creative", "Banners", "Cover", "Packaging", "Story"];
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



    