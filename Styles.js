const sheet = new CSSStyleSheet();
export  function StyleCSS(elm,styles){
    if(styles){

        sheet.insertRule(`${elm}{
     ${styles}
    }`);

        document.adoptedStyleSheets = [sheet];

    }


    
}

export const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href)
}
export const urlLocationHandler = async () => {

}
