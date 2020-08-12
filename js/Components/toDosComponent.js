class ToDosComponent extends Component {
    constructor(parent) {
        super(parent);
        this.container.id = 'ToDosComponent';
        this.container.classList.add('ToDosComponent');
    }

    addTodos(bee) {
        this.container.innerHTML = '';

        var containerAll = document.createElement('div');
        containerAll.classList.add('containerAll');
        this.container.appendChild(containerAll);

        var todosTitle = document.createElement('p');
        todosTitle.innerHTML = 'ToDos';
        todosTitle.classList.add('todosTitle', 'titlesdisplay');
        containerAll.appendChild(todosTitle);

        this.btn = document.createElement('img');
        this.btn.classList.add('btnMas');
        this.btn.src = 'images/icons/plus.png';
        containerAll.appendChild(this.btn);

        this.btn.onclick = this.addToDosBtn.bind(this);

        bee.todos.forEach(todo => {
            var todoComponent = new TodoComponent(this.container, todo);
        });
    }

    addToDosBtn() {
        var appManager = AppManager.getInstance().uiManager.showToDosForm();
    }
}