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



const projectSection = document.getElementById('projects');
const projectWrapper = document.querySelector('.project-wrapper');
const projects = document.querySelectorAll('.project-container');
const totalProjects = projects.length;

let currentIndex = 0;
let isScrollingHorizontally = false;
let scrollDelta = 0;
const scrollThreshold = 100;

function isSectionInView(section) {
  const rect = section.getBoundingClientRect();
  const midScreen = window.innerHeight / 2;
  return rect.top <= midScreen && rect.bottom >= midScreen;
}

// To allow vertical scroll after hitting boundaries and waiting
let allowVerticalScrollAfterBoundary = false;
let boundaryTimeout;

projectSection.addEventListener('wheel', (e) => {
  if (!isSectionInView(projectSection)) return;

  const goingDown = e.deltaY > 0;
  const goingUp = e.deltaY < 0;

  // At boundaries
  const atFirstProject = currentIndex === 0;
  const atLastProject = currentIndex === totalProjects - 1;

  // If at boundary and user scrolls vertically, allow vertical scroll only if flag true
  if ((atFirstProject && goingUp) || (atLastProject && goingDown)) {
    if (allowVerticalScrollAfterBoundary) {
      // Allow normal vertical scroll
      return;
    } else {
      e.preventDefault();
      // Start timer to allow vertical scroll after 500ms delay
      clearTimeout(boundaryTimeout);
      boundaryTimeout = setTimeout(() => {
        allowVerticalScrollAfterBoundary = true;
      }, 500);
      return;
    }
  }

  // Reset vertical scroll permission when inside projects horizontally
  allowVerticalScrollAfterBoundary = false;

  // Prevent vertical scroll when handling horizontal
  e.preventDefault();

  if (isScrollingHorizontally) return;

  scrollDelta += e.deltaY;

  if (scrollDelta >= scrollThreshold) {
    if (currentIndex < totalProjects - 1) {
      currentIndex++;
      scrollDelta = 0;
      slideTo(currentIndex);
    } else {
      scrollDelta = scrollThreshold; // clamp
    }
  } else if (scrollDelta <= -scrollThreshold) {
    if (currentIndex > 0) {
      currentIndex--;
      scrollDelta = 0;
      slideTo(currentIndex);
    } else {
      scrollDelta = -scrollThreshold; // clamp
    }
  }
}, { passive: false });

function slideTo(index) {
  isScrollingHorizontally = true;
  projectWrapper.style.transform = `translateX(-${index * 100}vw)`;
  setTimeout(() => {
    isScrollingHorizontally = false;
  }, 700);
}
