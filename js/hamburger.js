const ham = document.querySelector(".hamburger");
    const hamIcon = document.querySelector(".icon");
    const navBar = document.querySelector(".navbar");
    const links = document.querySelectorAll(".navbar a");

    window.addEventListener('resize', () => {
        if (screen.width > 876) {
            links.forEach(link => {

                link.style.opacity = "1";
            })

        }

    });

    ham.addEventListener("click", () => {

        if (ham.firstElementChild.classList.contains('fa-bars')) {
            ham.firstElementChild.classList.remove('fa-bars');
            ham.firstElementChild.classList.add('fa-times');
            navBar.classList.add("open");
            links.forEach(link => {
                link.style.opacity = "1";
            });
        } else {
            ham.firstElementChild.classList.remove('fa-times');
            ham.firstElementChild.classList.add('fa-bars');
            links.forEach(link => {
                link.style.opacity = "0";
            });
            navBar.classList.remove("open");


        }


    });

 