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

    let lightText = "#222";

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
                set("lighterColor", lightText)
                
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
        console.log("ueu")
        if (document.documentElement.scrollTop == 0) {
            coverBg.classList.remove("cover--bgImage--after");
        }
    }

    body.onscroll = changeCoverStyles;

    console.log(window.innerWidth + " is the inner Width");
    console.log(window.outerWidth + " is the outer Width");




/* 
    CARD STYLES
*/

    class parallaxTiltEffect {  
        constructor({element, tiltEffect}) {  
        this.element = element;  
        this.container = this.element.querySelector(".wrap--container");  
        this.size = [300, 360];  
        [this.w, this.h] = this.size;  
        this.tiltEffect = tiltEffect;  
        this.mouseOnComponent = false;  
        this.handleMouseMove = this.handleMouseMove.bind(this);  
        this.handleMouseEnter = this.handleMouseEnter.bind(this);  
        this.handleMouseLeave = this.handleMouseLeave.bind(this);  
        this.defaultStates = this.defaultStates.bind(this);  
        this.setProperty = this.setProperty.bind(this);  
        this.init = this.init.bind(this);  
        this.init();  
        }  
        handleMouseMove(event) {  
        const {offsetX, offsetY} = event;  
        let X;  
        let Y;  
        if (this.tiltEffect === "reverse") {  
        X = ((offsetX - (this.w/2)) / 3) / 3;  
        Y = (-(offsetY - (this.h/2)) / 3) / 3;  
        }  
        else if (this.tiltEffect === "normal") {  
        X = (-(offsetX - (this.w/2)) / 3) / 3;  
        Y = ((offsetY - (this.h/2)) / 3) / 3;  
        }  
        this.setProperty('--rY', X.toFixed(2));  
        this.setProperty('--rX', Y.toFixed(2));  
        this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');  
        this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');  
        }  
        handleMouseEnter() {  
        this.mouseOnComponent = true;  
        this.container.classList.add("container--active");  
        }  
        handleMouseLeave() {  
        this.mouseOnComponent = false;  
        this.defaultStates();  
        }  
        defaultStates() {  
        this.container.classList.remove("container--active");  
        this.setProperty('--rY', 0);  
        this.setProperty('--rX', 0);  
        this.setProperty('--bY', '80%');  
        this.setProperty('--bX', '50%');  
        }  
        setProperty(p, v) {  
        return this.container.style.setProperty(p, v);  
        }  
        init() {  
        this.element.addEventListener('mousemove', this.handleMouseMove);  
        this.element.addEventListener('mouseenter', this.handleMouseEnter);  
        this.element.addEventListener('mouseleave', this.handleMouseLeave);  
        }  
    }  
    const $ = e => document.querySelector(e);  
    const wrap1 = new parallaxTiltEffect({  
        element: $('.me--wrap'),  
        tiltEffect: 'reverse'  
    });

    console.log(parallaxTiltEffect)