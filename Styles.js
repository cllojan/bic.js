
export  function StyleCSS(elm,styles){


    const sheet = new CSSStyleSheet();
    sheet.insertRule(`${elm}{
     ${styles}
    }`);    
   
    document.adoptedStyleSheets = [sheet];
   
    
}
