   const html = document.querySelector("html");
    const triggers = document.getElementsByClassName('trigger');
    const triggerArray = Array.from(triggers).entries();
    const modals = document.getElementsByClassName('modal');
    const closeButtons = document.getElementsByClassName('btn-close');

    for (let [index, trigger] of triggerArray) {
        const toggleModal = () => {
            modals[index].classList.toggle('show-modal');
            if(modals[index].classList.contains('show-modal')){
                html.style.overflowY = "hidden";
                timeSlots.forEach(timeSlot => {

                    timeSlot.style.diplay = "flex";
                });
            }else{
                html.style.overflowY = "auto";
                name = months[d.getMonth()];
                 remove();
                removeTime();
                removeDate();
                month.forEach(mon => {
                    mon.innerHTML = name;
                });
                counter = 0;
                 timeSlots.forEach(timeSlot => {

                    timeSlot.style.diplay = "none";
                });
            }
            

        }
        trigger.addEventListener("click", toggleModal);
        closeButtons[index].addEventListener("click", toggleModal);
    }