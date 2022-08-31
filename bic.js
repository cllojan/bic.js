import {StyleCSS} from './Styles.js';
const loadFont = () => {

    //<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    const link = document.createElement("link");
    const link2 = document.createElement("link");
    const styleH = document.createElement("link");
    link.rel = "preconnect"
    link.href = "https://fonts.googleapis.com"
    document.head.appendChild(link);
    link2.rel = "preconnect"
    link2.href = "https://fonts.gstatic.com"
    link2.crossOrigin="";
    document.head.appendChild(link2);
    styleH.rel="stylesheet";
    styleH.href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,400;1,700;1,900&display=swap";
    document.head.appendChild(styleH);
    document.body.style.fontFamily='Roboto,sans-serif';
}
loadFont();
export const init = (tag) => {
    let element;
    try{
        element = document.querySelector(tag);
        StyleCSS("*","margin:0;padding:0;box-sizing:border-box;")
    }catch(e){
        console.log(e);
    }

    element.styles = (styles) =>{
        StyleCSS(tag,styles);

    }
    element.html = (html) =>{
        return this.innerHTML = html;
    }
    element.Childs = (...childs) =>{
        for(let child of childs){
            element.appendChild(child);
        }
    }
    return element;
}

export const compt = (tagName,attr,...childs) => {
    return{
        tagName,
        attr:{
           ...attr
        },
        childs,

    }
}

export const create = (compt) =>{
    let result = document.createElement(compt.tagName);
    let befStyles="";
    for(const name in compt.attr){
        if(compt.attr[name]){
            result.setAttribute(name, compt.attr[name]);
        }


    }
    for(const child of compt.childs){

        result.appendChild(child)
    }
    result.onclick = (callback) => {
        result.addEventListener("click", callback);
        return result;
    }
    return result;
}
