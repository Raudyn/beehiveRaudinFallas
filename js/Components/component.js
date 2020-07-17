class Component {
    constructor(parent){
        this.container = document.createElement('div');
        this.parent = parent;
        this.parent.appendChild(this.container);
    }

    hide(){
        this.container.style.display = 'none';
    }

    show(){
        this.container.style.display = 'block';
    }
}