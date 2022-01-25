let body = document.querySelector("body");

/*
    TOOGLE STYLES
*/

    //Variables for colors
    let lighterWhite = "#f9fafb";
    let darkerWhiteBg = "#e7e7e7";
    let darkerWhite = "#ececec";
    let darkerGray = "#111";
    let lighterGray = "#2f2f2f";
    let lightestGray = "#aaa";

    let lightText = "#222";
    let captionText = "#444";

    //Variables for Elements
    let toggle = document.querySelector("#toggle");
    let icon = document.querySelector("#toggleIcon");
    let bodyDescription = document.querySelector(".description--svg--path");

    let svgDescriptionOne = document.querySelector(".description--content--one--svg");
    let svgDescriptionTwo = document.querySelector(".description--content--two--svg");

    let root = document.querySelector(':root');
    let clicked = false;

    toggle.addEventListener("click", () => {
        if (clicked) {
            //Declaring Variables for general backgrounds
                set("generalBg", lighterWhite);
                set("grayBg", darkerWhite);
                
                //Color of elements:
                set("textColor", "#040d21");
                set("lighterColor", lightText);
                set("captionColor", captionText);
                
                set("iconBorder", "#adadad");
                icon.classList.replace("fa-sun", "fa-moon");
                
                toggle.style.backgroundColor = darkerWhite;
                icon.style.color = "#9FB1BD";

                //SVG
                bodyDescription.setAttribute("fill", lighterWhite);
                svgDescriptionStyles(true);
            } else if (!clicked) {
                //Declaring Variables for general backgrounds
                set("generalBg", darkerGray);
                set("grayBg", lighterGray);

                //Color of elements:
                set("textColor", lighterWhite);
                set("lighterColor", darkerWhite)
                set("captionColor", lightestGray);

                set("iconBorder", "#000");
                icon.classList.replace("fa-moon", "fa-sun");
                
                toggle.style.backgroundColor = lighterGray;
                icon.style.color = darkerWhite;

                //SVG
                bodyDescription.setAttribute("fill", darkerGray);
                svgDescriptionStyles(false);
            }

        clicked = !clicked;
    });

    function set(variable, value) {
        root.style.setProperty('--' + variable, value);
    }

    function svgDescriptionStyles(addingOrRemoving) {
        //True is adding, False is removing
        if(addingOrRemoving) {
            svgDescriptionOne.setAttribute("fill", darkerWhite);
            svgDescriptionTwo.setAttribute("fill", darkerWhite);
        } else if (!addingOrRemoving) {
            svgDescriptionOne.setAttribute("fill", lighterGray);
            svgDescriptionTwo.setAttribute("fill", lighterGray);
        }
    }


/*
    COVER STYLES
*/

    let coverBg = document.querySelector(".cover--bgImage");

    function changeCoverStyles() {
        coverBg.classList.add("cover--bgImage--after");
        console.log("Scrolling...")
        if (document.documentElement.scrollTop == 0) {
            coverBg.classList.remove("cover--bgImage--after");
        }
    }

    body.onscroll = changeCoverStyles;

    console.log(`${window.innerWidth} is the inner Width. Represents a ${(window.innerWidth*100)/1440}% of the screen`);
    console.log(`${window.outerWidth} is the outer Width. Represents a ${(window.outerWidth*100)/1440}% of the total outer width (1440).`);
