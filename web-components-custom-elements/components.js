class Greetings extends HTMLElement{
    constructor(){
        super();
        this.saludo = "How're you doing?";
        this.created;
    }
    connectedCallback(){
        //do something when the custom element is added to the DOM
        this.innerHTML = this.saludo;
        this.created = true;
        let bold = document.createElement("strong");
        bold.innerHTML = this.saludo;
        this.appendChild(bold);
    }
    disconnectedCallback(){
        this.created = false;
    }
    attributeChangedCallback(attrName, oldValue, newValue){
        if( attrName === "name"){
            this.saludo = "Hola, " + newValue;
        }
    }
    static get observedAttribues(){
        return ['name'];
    }

}

// Browser must support HTML custom elements
// "Window" object has a method inside "customElements" object
// ".define" takes 2 parameters to map the web component to a class
window.customElements.define("greetings-component", Greetings);

// Create new custom component instance
let secondGreeting = document.createElement("greetings-component");
document.body.appendChild(secondGreeting);
