let root = document.querySelector("#main")

let customReactElement = {
    tag: "a",
    props : {
        href: "https://www.youtube.com/",
        target:"_blank"
    },
    children:"Click to visit Youtube"
}


function customCreateReactElement(customReactElement, container){

    let elem = document.createElement(customReactElement.tag)
    elem.innerHTML = customReactElement.children
    
     
    for (const prop in customReactElement.props){
        if(prop === "children")
        continue;
        elem.setAttribute(prop, customReactElement.props[prop])
    }
    // elem.setAttribute("href", customReactElement.props.href)
    // elem.setAttribute("target", customReactElement.props.target)


    container.appendChild(elem)
}

customCreateReactElement(customReactElement, root)