import {StyleCSS} from './Styles.js';
const loadFont = () => {
    
    //<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    var link = document.createElement("link");
    var link2 = document.createElement("link");
    var styleH = document.createElement("link");
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
const init = (tag) => {

    let element;
    try{
        let tags = ["#","."];
        for(let elm of tags){
            if(document.querySelector(elm+tag)){
                element = document.querySelector(elm+tag);
            }
        }

    }catch(e){
        console.log(e);
    }

    element.styles = (styles) =>{
        for(const key in styles){
            element.style[key] = styles[key];
        }
        return element;
    }
    element.html = (html) =>{
        console.log(html);
        return this.innerHTML = html;
    }
    element.Childs = (...childs) =>{
        for(let child of childs){
            element.appendChild(child);
        }

    }
    return element;
}

const compt = (tagName,attr,...childs) => {
    return{
        tagName,
        attr:{
           ...attr
        },
        childs,

    }
}

const create = (compt) =>{
    let result = document.createElement(compt.tagName);
    let befStyles="";
    for(const name in compt.attr){
  
        result.setAttribute(name, compt.attr[name]);

    }
    for(const child of compt.childs){   
        
        result.appendChild(child);
    }
    result.styles = (styles) =>{
       
        befStyles+=styles;
        console.log(befStyles)
        if(compt.attr.id != undefined){ 
                   
            StyleCSS(`#${compt.attr.id}`,befStyles);
            return result
        }   
        if(compt.attr.class != undefined){
            StyleCSS("."+compt.attr.class);
            return result;
        }
        
        return result;
    }
    result.onclick = (callback) => {
        result.addEventListener("click", callback);
        return result;
    }
    return result;
}
 const div = (attr,...children) => {
    return create(compt("div",attr,...children));
}
const a = (attr,...children) => {

    return create(compt("a",attr,...children));
}

const span = (attr,...children) => {
    return create(compt("span",attr,...children));
}
const video = (attr,...children) => {
    return create(compt("video",attr,...children));
}
const img = (attr,...children) => {
    return create(compt("img",attr,...children));
}
const ul = (attr,...children) => {
    return create(compt("ul",attr,...children));
}
const ol = (attr,...children) => {
    return create(compt("ol",attr,...children));
}
const li = (attr,...children) => {
    return create(compt("li",attr,...children));
}
const nav = (attr,...children) => {
    return create(compt("nav",attr,...children));
}
/*
const text = (attr,txt) => {
    
    return create(compt("p",attr,document.createTextNode(txt)));
}*/
const text = (attrs,txt)=>{
    return create(compt('h1',
    {
        id:attrs.id,
        class:attrs.class,
        ...attrs
    },document.createTextNode(txt))).styles(attrs.style)
} 
let style = {
    texto:`
        color:red;
    `,
    components:`
        height:"100vh",
        background-color:"blue",    
        justify-ontent:'center',
    `
}

let ok = {
    owo:`        
        color:red;
        text-transform: uppercase;
    `
}
JSON.stringify(ok.owo)
const Flex = (attrs,...children) => {
    let styless = {
        Flex:`
            display:flex;
            background: blue;
            width:100vw;            
            height:100vh;
        
        `
    }
    return create(compt("div",{
        id:attrs.id,
        class:attrs.class,
        
        ...attrs
    },...children)).styles(styless.Flex);
}

init("app").Childs(Flex({id:"owo",class:"uwu",style:ok.owo},text({class:"text"},"hola")));


