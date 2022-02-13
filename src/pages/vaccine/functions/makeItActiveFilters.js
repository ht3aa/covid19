export const makeItActiveFilters = (target) => {
    const filters = document.querySelectorAll(".filters li");
    if(target.nodeName === "LI") {

        for(let i = 0; i < filters.length; i++) {
            filters[i].classList.remove("filterActive");
        }

        target.classList.add("filterActive");
    } else {
        for(let i = 0; i < filters.length; i++) {
            filters[i].classList.remove("filterActive");
        } 
    }
}