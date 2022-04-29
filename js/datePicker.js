  const days = document.querySelectorAll(".calander .days li");
    const days_2 = document.querySelectorAll(".calander-2 .days li");
    const days_3 = document.querySelectorAll(".calander-3 .days li");
    const days_4 = document.querySelectorAll(".calander-4 .days li");
    const month = document.querySelectorAll(".month-name");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const next = document.querySelectorAll(".next");
    const prev = document.querySelectorAll(".prev");
    const timeSlots = document.querySelectorAll(".time-slots");
    const timeBlock = document.querySelectorAll(".time-slots__block");
    const timeSlots_2 = document.querySelectorAll(".time-slots-2");
    const timeBlock_2 = document.querySelectorAll(".time-slots__block-2");
    const timeSlots_3 = document.querySelectorAll(".time-slots-3");
    const timeBlock_3 = document.querySelectorAll(".time-slots__block-3");
    const timeSlots_4 = document.querySelectorAll(".time-slots-4");
    const timeBlock_4 = document.querySelectorAll(".time-slots__block-4");
    

     const d = new Date();
        let name = months[d.getMonth()];
       
       
        month.forEach(mon => {
             mon.innerHTML = name;
        });
    
         let counter = 0;

         next.forEach(nex => {

            nex.addEventListener("click", () => {

                 if (counter + d.getMonth() == 11) {
                     counter = 0;
                     name = months[d.getMonth()];

                     month.forEach(mon => {
                         mon.innerHTML = name;
                     });

                 } else {
                     counter++;
                     name = months[d.getMonth() + counter];
                     month.forEach(mon => {
                         mon.innerHTML = name;
                     });
                 }

             });
             
         });

         prev.forEach(pv => {

             pv.addEventListener("click", () => {


                 counter--;

                  month.forEach(mon => {
                     
                
                 if (mon.innerHTML !== months[d.getMonth()] && mon.innerHTML > months[d.getMonth()]) {
                     name = months[d.getMonth() + counter];
                    
                         mon.innerHTML = name;
                   

                 }
                 else {
                     counter = 0;
                 }

                  });
             });
             
         });

    

   
       
        
    days.forEach(day => {
        day.addEventListener("click", () =>{
            remove();
            day.classList.add("active2");
            removeTime();
            removeDate();
            timeSlots.forEach(timeSlot => {

                timeSlot.classList.add("picked");
            });
            
        })
    });
    days_2.forEach(day => {
            day.addEventListener("click", () => {
                remove();
                day.classList.add("active2");
                removeTime();
                removeDate();
               
                timeSlots_2.forEach(timeSlot => {

                timeSlot.classList.add("picked");
            });

            })
        });
         days_3.forEach(day => {
                day.addEventListener("click", () => {
                    remove();
                    day.classList.add("active2");
                    removeTime();
                    removeDate();

                    timeSlots_3.forEach(timeSlot => {

                timeSlot.classList.add("picked");
            });

                })
            });
             days_4.forEach(day => {
                    day.addEventListener("click", () => {
                        remove();
                        day.classList.add("active2");
                        removeTime();
                        removeDate();

                        timeSlots_4.forEach(timeSlot => {

                timeSlot.classList.add("picked");
            });

                    })
                });

    function remove() {
         days.forEach(day => {
            
            day.classList.remove("active2");
            
        });

        days_2.forEach(day => {
            
            day.classList.remove("active2");
            
        });

        days_3.forEach(day => {
            
            day.classList.remove("active2");
            
        });

        days_4.forEach(day => {
            
            day.classList.remove("active2");
            
        });
    }

    function removeDate() {
            timeSlots.forEach(timeSlot => {

                timeSlot.classList.remove("picked");

            });

             timeSlots_2.forEach(timeSlot => {

                timeSlot.classList.remove("picked");

            });

             timeSlots_3.forEach(timeSlot => {

                timeSlot.classList.remove("picked");

            });

             timeSlots_4.forEach(timeSlot => {

                timeSlot.classList.remove("picked");

            });

          
            
        }
     timeBlock.forEach(block => {
            block.addEventListener("click", () => {
                removeTime();
                block.classList.add("active3");
                
            })
        });

        timeBlock_2.forEach(block => {
                block.addEventListener("click", () => {
                    removeTime();
                    block.classList.add("active3");

                })
            });
            timeBlock_3.forEach(block => {
                    block.addEventListener("click", () => {
                        removeTime();
                        block.classList.add("active3");

                    })
                });
                timeBlock_4.forEach(block => {
                        block.addEventListener("click", () => {
                            removeTime();
                            block.classList.add("active3");

                        })
                    });

          

        function removeTime() {
            timeBlock.forEach(block => {

                block.classList.remove("active3");

            });

             timeBlock_2.forEach(block => {

                block.classList.remove("active3");

            });
             timeBlock_3.forEach(block => {

                block.classList.remove("active3");

            });
             timeBlock_4.forEach(block => {

                block.classList.remove("active3");

            });
        }