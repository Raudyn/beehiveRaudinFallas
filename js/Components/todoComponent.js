class TodoComponent extends Component {
    constructor(parent, model){
        super(parent)
        this.model = model;
        this.container.classList.add('todoComponent');
        parent.appendChild(this.container);

        var title1 = document.createElement('p');
        title1.classList.add('title1');
        title1.innerHTML = model.title;
        this.container.appendChild(title1);
    }
}