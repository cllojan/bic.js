const sheet = new CSSStyleSheet();
export  function StyleCSS(elm,styles){
    if(styles){
        sheet.insertRule(`${elm}{
     ${styles}
    }`);
        document.adoptedStyleSheets = [sheet];
    }    
}
