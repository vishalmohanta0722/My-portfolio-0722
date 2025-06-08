document.addEventListener("DOMContentLoaded", function () {
  // Image upload preview for About page
  const aboutImgUpload = document.getElementById('aboutImgUpload');
  const aboutProfileImg = document.getElementById('aboutProfileImg');
  if (aboutImgUpload && aboutProfileImg) {
    aboutImgUpload.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (evt) {
          aboutProfileImg.src = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Animate skills in
  const skills = document.querySelectorAll('.about-skill');
  skills.forEach((skill, i) => {
    setTimeout(() => {
      skill.classList.add('animated');
    }, 300 + i * 120);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Animate each highlight line in sequence
  const highlights = document.querySelectorAll('.about-highlights li');
  highlights.forEach((li, i) => {
    li.style.opacity = 0;
    li.style.transform = "translateY(20px)";
    setTimeout(() => {
      li.style.transition = "opacity 0.5s, transform 0.5s";
      li.style.opacity = 1;
      li.style.transform = "translateY(0)";
    }, 400 + i * 180);
  });
});