// Ambil Element
const skills = document.getElementById("skills");

// Buat variabel
const mySkills = ["ES6", "UX Design", "Git"];

// Normal function
function showSkill(mySkill) {
  console.log(mySkill);
}

// Arrow Function
const showSkill2 = (mySkill) => {
  console.log(mySkill);
};

// forEach
mySkills.forEach(function (mySkill) {
  console.log(mySkill);
});

let parent = "<ul>";

mySkills.forEach((mySkill) => {
  //   console.log(mySkill);
  parent += `<li>${mySkill}</li>`;
});

parent += "</ul>";

mySkills.forEach(showSkill2);
skills.innerHTML = parent;
