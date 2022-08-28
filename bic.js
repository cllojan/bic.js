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
            ...attr,
        },
        childs,

    }
}
 const create = (compt) =>{
    let result = document.createElement(compt.tagName);
    for(const name in compt.attr){
        result.setAttribute(name, compt.attr[name]);

    }

    for(const child of compt.childs){
        console.log(child)
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
const text = (attr,...children) => {
    let att = ['class','id','style']
    return create(compt("p",attr,...children));
}

const Flex = (attr,...children) => {
    let style = {
        'display':'flex',
    }
    return create(compt("div",attr,...children)).styles(style)
}

//init("app").Childs(div({"class":"owo"},text({type:"s",attr:{"class":"owo"}},text("owo"))))

console.log(text({"class":"ow"}));