import {create,compt} from './bic.js';
import { StyleCSS } from './Styles.js';

export const Flex = (attrs,...children) => {
    let styless = {
        Flex:`
            display:flex;
        `
    }
    //stylesDef(id,sty);
    return create(compt("div",{
        id:attrs.id,
        class:attrs.class,
        style:attrs.styles,
        ...attrs
    },...children));
}
export const Text = ({id,className,sty,...attrs}={},txt)=>{
    if(id && className){
        StyleCSS("#"+id,sty);
    }else if(className){
        StyleCSS("."+className,sty);
    }else{
        StyleCSS("#"+id,sty);
    }


    let args = {id:id,
                class:className,
                ...attrs}
     return create(compt('p',args,document.createTextNode(txt)));
}


export const Link = (attr,...children) => {
    let retString = children.map(x => typeof x == "string" ? document.createTextNode(x) : x);
    return create(compt("a",attr,...retString));

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
