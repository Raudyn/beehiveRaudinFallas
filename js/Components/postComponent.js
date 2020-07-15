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

        var commentsContainer = document.createElement('div');
        commentsContainer.classList.add('CommentsContainer');
        this.container.appendChild(commentsContainer);

        model.comments.forEach(comm => {
            var commentP = document.createElement('p');
            commentP.id = 'Comments';
            commentP.classList.add('Comments');
            commentP.innerHTML = comm.body;
            commentsContainer.appendChild(commentP);
        });
    }

    onContainerClick(){
        var appManager = AppManager.getInstance();
        //appManager.uiManager.showComentsToPost(this.model);
           
    }
}
