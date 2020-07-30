class ToDosComponent extends Component {
    constructor(parent) {
        super(parent);
        this.container.id = 'ToDosComponent';
        this.container.classList.add('ToDosComponent');
        parent.appendChild(this.container);
    }

    addTodos(bee){
        this.container.innerHTML = '';
        bee.todos.forEach(todo => {
            var todoComponent = new TodoComponent(this.container, todo);
        });
    }
}