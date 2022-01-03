let body = document.querySelector("body");

/*
    TOOGLE STYLES
*/

    //Variables for Elements
    let toggle = document.querySelector("#toggle");
    let icon = document.querySelector("#toggleIcon");

    let root = document.querySelector(':root');
    let clicked = false;

    toggle.addEventListener("click", () => {
        if (clicked) {
            //Declaring Variables for general backgrounds
                set("generalBg", "#f9fafb");
                set("grayBg", "#ececec");
                
                //Color of elements:
                set("textColor", "#040d21");
                
                set("iconBorder", "#adadad");
                icon.classList.replace("fa-sun", "fa-moon");
                
                toggle.style.backgroundColor = "#ececec";
                icon.style.color = "#9FB1BD";
            } else if (!clicked) {
                //Declaring Variables for general backgrounds
                set("generalBg", "#111");
                set("grayBg", "#2f2f2f");

                //Color of elements:
                set("textColor", "#f9fafb");

            set("iconBorder", "#000");
            icon.classList.replace("fa-moon", "fa-sun");
            
            toggle.style.backgroundColor = "#2f2f2f";
            icon.style.color = "#ececec";
        }

        clicked = !clicked;
    });

    function set(variable, value) {
        root.style.setProperty('--' + variable, value);
    }


/*
    COVER STYLES
*/

    let coverBg = document.querySelector(".cover--bgImage");

    function changeCoverStyles() {
        coverBg.classList.add("cover--bgImage--after");
        console.log("ueu")
        if (document.documentElement.scrollTop == 0) {
            coverBg.classList.remove("cover--bgImage--after");
        }
    }

    body.onscroll = changeCoverStyles;