import {create,compt,changePage} from './bic.js';
import { StyleCSS } from './Styles.js';

export const Flex = ({id,className,styles,...attrs}={},...children) => {
    let styless = {
        Flex:`
            display:flex;
        `
    }

    if(id && className){
        StyleCSS("#"+id,styles);
    }else if(className){
        StyleCSS("."+className,styles);
    }else if(id){
        StyleCSS("#"+id,styles);
    }

    let args = {id:id,
                class:className,
                ...attrs}
    return create(compt("div",args,...children));
}
export const Text = ({id,className,styles,...attrs}={},txt)=>{
    if(id && className){
        StyleCSS("#"+id,styles);
    }else if(className){
        StyleCSS("."+className,styles);
    }else{
        StyleCSS("#"+id,styles);
    }

    let args = {id:id,
                class:className,
                ...attrs}
     return create(compt('p',args,document.createTextNode(txt)));
}


export const Link = ({id,className,styles,...attrs}={},...children) => {
    let retString = children.map(x => typeof x == "string" ? document.createTextNode(x) : x);
    if(id && className){
        StyleCSS("#"+id,styles);
    }else if(className){
        StyleCSS("."+className,styles);
    }else{
        StyleCSS("#"+id,styles);
    }

    let args = {id:id,
                class:className,
                ...attrs}

    return create(compt("a",args,...retString)).onclick(e=>changePage(e));


}

export const video = (attr,...children) => {
    return create(compt("video",attr,...children));
}
export const img = (attr,...children) => {
    return create(compt("img",attr,...children));
}
export const ul = (attr,...children) => {
    return create(compt("ul",attr,...children));
}
export const ol = (attr,...children) => {
    return create(compt("ol",attr,...children));
}
export const li = (attr,...children) => {
    return create(compt("li",attr,...children));
}
export const nav = (attr,...children) => {
    return create(compt("nav",attr,...children));
}
