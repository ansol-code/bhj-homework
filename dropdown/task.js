const dropdownAll = document.querySelectorAll(".dropdown");

dropdownAll.forEach(dropdown => {
dropdown.addEventListener("click", dropdownClick);
function dropdownClick(event) {
const target = event.target;

if (target.classList.contains("dropdown__value")) {
const list = target.closest(".dropdown").querySelector(".dropdown__list");
list.classList.toggle("dropdown__list_active");
}
const item = target.closest(".dropdown__item");

if (item) {
event.preventDefault();
const text = item.textContent.trim();
const dropdown = item.closest(".dropdown");
const value = dropdown.querySelector(".dropdown__value");
value.textContent = text;
const list = dropdown.querySelector(".dropdown__list");
list.classList.remove("dropdown__list_active");
}
}
});

document.addEventListener("click", function(event) {
const listActive = document.querySelectorAll(".dropdown__list_active");

listActive.forEach(function(list) {
const dropdown = list.closest(".dropdown");
if (!dropdown.contains(event.target)) {
list.classList.remove("dropdown__list_active");
}
});
});