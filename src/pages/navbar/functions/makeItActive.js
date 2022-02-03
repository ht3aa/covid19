export const makeItActive = (target) => {
    if(target.nodeName === "P") {
        const aElements = target.parentElement.parentElement.parentElement.children;
        for(let i = 0; i < aElements.length; i++) {
            aElements[i].children[0].children[0].classList.remove("active");
        }
        target.classList.add("active");
        window.scroll(0, 0);
    }

}

