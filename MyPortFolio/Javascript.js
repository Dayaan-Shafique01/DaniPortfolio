
// const skills = ["HTML","CSS","JAVA SCRIPT","BOOTSTRAP","PHP","ANGULAR","SQL SERVER","C#","ASP.NET CORE"];
// let index = 0;

// const skilltext = document.getElementById("myskill");

// function showSkill(){
// skilltext.style.transition = "none";
// skilltext.style.left = "100%";
// skilltext.textContent = skills[index];

// requestAnimationFrame(() => {
// requestAnimationFrame(() => {
//   skilltext.style.transition = "left 1.5s linear";
//   skilltext.style.left = "-100%";
// });
// });

// index = (index + 1) % skills.length;
// }
// showSkill();
// setInterval(showSkill, 2500);




    const skills = ["Web Designer", "Front End Developer", "Back End Developer", "Fulstack Developer"];
    const typewriter = document.getElementById("typewriter");

    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentSkill = skills[skillIndex];
      
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typewriter.textContent = currentSkill.substring(0, charIndex);

      let typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentSkill.length) {
        typingSpeed = 1000; // Pause after typing
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    }

    type();
