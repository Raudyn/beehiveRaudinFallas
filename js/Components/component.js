class Component {
    constructor(parent) {
        this.container = document.createElement('div');
        this.parent = parent;
        this.parent.appendChild(this.container);
        this.children = [];
    }

    hide() {
        this.container.style.display = 'none';
    }

    show() {
        this.container.style.display = 'block';
    }

    addChild(component) {
        this.children.push(component);
    }

    eliminarElemento(id) {
        this.elemento = document.getElementById(id);
        if (!this.elemento) {
            alert("El elemento selecionado no existe");
        } else {
            $(this.elemento).hide(200);
            setTimeout(() => {
                this.padre = this.elemento.parentNode;
                this.padre.removeChild(this.elemento);
            }, 200);
        }
    }

}