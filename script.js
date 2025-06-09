document.addEventListener("DOMContentLoaded", () => {
  const resumeBtn = document.querySelector('.resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      alert('Thanks for downloading my resume!');
    });
  }
});
