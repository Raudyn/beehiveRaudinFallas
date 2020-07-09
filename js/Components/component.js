class Component {
    constructor(parent){
        this.container = document.createElement('div');
        this.parent = parent;
        this.parent.appendChild(this.container);
    }

    hide(){
        this.container.hidden = true;
    }

    show(){
        this.container.hidden = false;
    }
}