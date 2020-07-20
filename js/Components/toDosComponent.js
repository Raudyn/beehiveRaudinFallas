class ToDosComponent extends Component {
    constructor(parent) {
        super(parent);
        this.container.id = 'ToDosComponent';
        this.container.classList.add('ToDosComponent');
        parent.appendChild(this.container);
    }
}