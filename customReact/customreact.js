function customRender(element, container){
    /*
    // first create element and then inject it 
    const domElement = document.createElement(reactElement.type) // create
    // injected 
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    
    container.appendChild(domElement)
    repeat the code for every element. */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
       if(prop == 'children')continue;
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}


// React create a tree of HTML elements in a way :-
const reactElement = {
    type:'a',
    props:{ // object
        href:'https://google.com',
        target:'_blanck'
    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer) // how will it works? so we design a methode.
