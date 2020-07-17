class CommentFormComponent extends Component {
    constructor(parent){
        super(parent);
        this.container.id = 'commentFormComponent';
        this.container.classList.add('commentFormComponent');

        var formBackGround = document.createElement('div');
        formBackGround.id = 'formBackGround';
        formBackGround.classList.add('formBackGround');
        this.container.appendChild(formBackGround);

        var titleForm = document.createElement('p');
        titleForm.classList.add('titleForm');
        titleForm.innerHTML = 'What Would like to comment on ??? post';
        formBackGround.appendChild(titleForm);

        var labelTitleComment = document.createElement('label');
        labelTitleComment.classList.add('labelTitleComment');
        labelTitleComment.innerHTML = 'Title';
        formBackGround.appendChild(labelTitleComment);

        this.inputTitleComment = document.createElement('input');
        this.inputTitleComment.classList.add('inputTitleComment');
        this.inputTitleComment.placeholder = 'Enter you Title comment';
        formBackGround.appendChild(this.inputTitleComment);

        var labelBody = document.createElement('label');
        labelBody.classList.add('labelBody');
        labelBody.innerHTML = 'Body';
        formBackGround.appendChild(labelBody);

        this.inputBody = document.createElement('textarea');
        this.inputBody.classList.add('inputBody');
        this.inputBody.placeholder = 'Enter the body on you post here';
        formBackGround.appendChild(this.inputBody);

        var btnContainer =  document.createElement('div');
        btnContainer.classList.add('btnContainer');
        formBackGround.appendChild(btnContainer);

        var btnCancel = document.createElement('button');
        btnCancel.classList.add('btnCancel');
        btnCancel.innerHTML = 'Cancel';
        btnContainer.appendChild(btnCancel);
        btnContainer.onclick = this.onClickCancel.bind(this);

        var btnOk = document.createElement('button');
        btnOk.classList.add('btnOk');
        btnOk.innerHTML = 'Ok';
        btnContainer.appendChild(btnOk);
        btnOk.onclick = this.onClickOk.bind(this);
    }

    hide(){
        this.container.style.display = 'none';
    }

    show(){
        this.container.style.display = 'Flex';
    }

    onClickCancel(){
        var appManager = AppManager.getInstance().uiManager.hideCommentForm();
    }

    onClickOk(){
        var newtitle = this.inputTitleComment.value;
        var newBody = this.inputBody.value;
        var appManager = AppManager.getInstance().uiManager.addNewComment(newtitle, newBody);
        //Validar los campos
    }
}