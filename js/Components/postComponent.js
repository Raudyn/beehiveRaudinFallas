class PostComponent extends Component {
    constructor(parent, model){
        super(parent);
        this.model = model;
        this.container.id = 'postComponent';
        this.container.classList.add('postComponent');

        var headerPostComp = document.createElement('div');
        headerPostComp.id = 'headerPostComp'; 
        headerPostComp.classList.add('headerPostComp');
        this.container.appendChild(headerPostComp);

        var title = document.createElement('p');
        title.id = 'titlePost';
        title.classList.add('titlePost');
        title.innerHTML = model.title;
        headerPostComp.appendChild(title);

        var body = document.createElement('p');
        body.id = 'bodyPost';
        body.classList.add('bodyPost');
        body.innerHTML = model.body;
        this.container.appendChild(body);

        var addCommentBtn = document.createElement('div');
        addCommentBtn.id = 'commentBtn';
        addCommentBtn.classList.add('commentBtn');
        addCommentBtn.value = 'ocultar';
        this.container.appendChild(addCommentBtn);
        addCommentBtn.onclick = this.addCommentBtn.bind(this); 

        var titleBtn = document.createElement('p');
        titleBtn.id = 'titleBtn';
        titleBtn.classList.add('titleBtn');
        titleBtn.innerHTML = 'Add Comment';
        addCommentBtn.appendChild(titleBtn);


        var commentsContainer = document.createElement('div');
        commentsContainer.classList.add('CommentsContainer');
        this.container.appendChild(commentsContainer);

        model.comments.forEach(comm => {

            var commBox = document.createElement('div');
            commBox.id = 'commBox';
            commBox.classList.add('commBox');
            commentsContainer.appendChild(commBox);

            var titleP = document.createElement('p');
            titleP.id = 'titleComm';
            titleP.classList.add('titleComm');
            titleP.innerHTML = comm.name;
            commBox.appendChild(titleP);

            var commentP = document.createElement('p');
            commentP.id = 'bodyComm';
            commentP.classList.add('bodyComm');
            commentP.innerHTML = comm.body;
            commBox.appendChild(commentP);

            var emailP = document.createElement('p');
            emailP.id = 'emailComm';
            emailP.classList.add('emailComm');
            emailP.innerHTML = comm.email;
            commBox.appendChild(emailP);
        });
    }

    addCommentBtn(){
        var appManager = AppManager.getInstance().uiManager.showCommentForm(this.model);
    }
}
