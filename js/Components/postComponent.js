class PostComponent extends Component {
    constructor(parent, model){
        super(parent);
        this.model = model;
        this.container.id = 'PostComponent';
        this.container.classList.add('PostComponent');

        var title = document.createElement('p');
        title.id = 'titlePost';
        title.classList.add('titlePost');
        title.innerHTML = model.title;
        this.container.appendChild(title);

        var body = document.createElement('p');
        body.id = 'bodyPost';
        body.classList.add('bodyPost');
        body.innerHTML = model.body;
        this.container.appendChild(body);
        this.container.onclick = this.onContainerClick.bind(this);
    }

    onContainerClick(){
        //console.log(this.model);
        var appManager = AppManager.getInstance();
           
    }
}