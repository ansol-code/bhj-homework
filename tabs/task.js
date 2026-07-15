const container = document.getElementById("tabs1");
const allTabs = container.querySelectorAll(".tab");
const allContents = container.querySelectorAll(".tab__content");

container.addEventListener("click", function(event) {
    const clickedTab = event.target.closest(".tab");
    
    if (clickedTab) {
        const tabIndex = Array.from(allTabs).indexOf(clickedTab);
        
        allTabs.forEach(tab => tab.classList.remove("tab_active"));

        allContents.forEach(content => content.classList.remove("tab__content_active"));

        allTabs[tabIndex].classList.add("tab_active");

        allContents[tabIndex].classList.add("tab__content_active");
    }
});

