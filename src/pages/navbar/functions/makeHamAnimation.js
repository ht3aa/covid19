const speed = 200;

export const startHamAnimation = (refHamIconDiv) => {

    refHamIconDiv.current.classList.add('resetPosition');
    setTimeout(() => {
        refHamIconDiv.current.classList.add('rotate'); 
        setTimeout(() => {
            refHamIconDiv.current.classList.add('rotateMore');                
        }, speed);           
    }, speed);
}

export const removeHamAnimation = (refHamIconDiv) => {

    refHamIconDiv.current.classList.remove('rotateMore');
    setTimeout(() => {
        refHamIconDiv.current.classList.remove('rotate'); 
        setTimeout(() => {
            refHamIconDiv.current.classList.remove('resetPosition');                
        }, speed);           
    }, speed);
}