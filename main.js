export default const init = (tag) => {

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

export default const compt = (tagName,attr,...childs) => {
    return{
        tagName,
        attr:{
            ...attr,
        },
        childs,

    }
}
export default const create = (compt) =>{
    let result = document.createElement(compt.tagName);
    for(const name in compt.attr){
        result.setAttribute(name, compt.attr[name]);

    }

    for(const child of compt.childs){

        result.appendChild(child);
    }

    result.styles = (styles) =>{
        for(const key in styles){
            result.style[key] = styles[key];
        }
        return result;
    }
    result.onclick = (callback) => {
        result.addEventListener("click", callback);
        return result;
    }
    return result;
}
export default const div = (attr,...children) => {
    return create(compt("div",attr,...children));
}
const a = (attr,...children) => {

    return create(compt("a",attr,...children));
}
const p = (attr,...children) => {
    return create(compt("p",attr,...children));
}
const h1 = (attr,...children) => {
    return create(compt("h1",attr,...children));
}
const h2 = (attr,...children) => {
    return create(compt("h2",attr,...children));
}
const h3 = (attr,...children) => {
    return create(compt("h3",attr,...children));
}
const h4 = (attr,...children) => {
    return create(compt("h4",attr,...children));
}
const h5 = (attr,...children) => {
    return create(compt("h5",attr,...children));
}
const h6 = (attr,...children) => {
    return create(compt("h6",attr,...children));
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
const text = (txt) => {
    return document.createTextNode(txt);
}
