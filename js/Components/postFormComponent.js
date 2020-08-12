class PostFormComponent extends Component {
    constructor(parent) {
        super(parent);
        this.container.id = 'postFormComponent';
        this.container.classList.add('postFormComponent');

        var formBackGround = document.createElement('div');
        formBackGround.id = 'formBackGround';
        formBackGround.classList.add('formBackGround');
        this.container.appendChild(formBackGround);

        var titleForm = document.createElement('p');
        titleForm.classList.add('titleForm');
        titleForm.innerHTML = 'add new post';
        formBackGround.appendChild(titleForm);

        var labelTitleComment = document.createElement('label');
        labelTitleComment.classList.add('labelTitleComment');
        labelTitleComment.innerHTML = 'Title';
        formBackGround.appendChild(labelTitleComment);

        this.inputTitleComment = document.createElement('input');
        this.inputTitleComment.classList.add('inputTitleComment');
        this.inputTitleComment.placeholder = 'Enter you Title Post';
        formBackGround.appendChild(this.inputTitleComment);

        var labelBody = document.createElement('label');
        labelBody.classList.add('labelBody');
        labelBody.innerHTML = 'Body';
        formBackGround.appendChild(labelBody);

        this.inputBody = document.createElement('textarea');
        this.inputBody.classList.add('inputBody');
        this.inputBody.placeholder = 'Enter the body on you post here';
        formBackGround.appendChild(this.inputBody);

        var btnContainer = document.createElement('div');
        btnContainer.classList.add('btnContainer');
        formBackGround.appendChild(btnContainer);

        var btnOk = document.createElement('div');
        btnOk.classList.add('btnOk');
        var pContent = document.createElement('p');
        pContent.classList.add('pContent');
        pContent.innerHTML = 'Ok';
        btnOk.appendChild(pContent);
        btnContainer.appendChild(btnOk);
        btnOk.onclick = this.onClickOk.bind(this);

        var btnCancel = document.createElement('div');
        btnCancel.classList.add('btnCancel');
        var pContent = document.createElement('p');
        pContent.classList.add('pContent');
        pContent.innerHTML = 'Cancel';
        btnCancel.appendChild(pContent);
        btnContainer.appendChild(btnCancel);
        btnContainer.onclick = this.onClickCancel.bind(this);

    }

    hide() {
        this.container.style.display = 'none';
    }

    hideJquery() {
        $("#postFormComponent").hide(200);
    }

    show() {
        $("#postFormComponent").show(300);
        //this.container.style.display = 'Flex';
    }

    onClickOk() {

        if (this.inputTitleComment.value == '' || this.inputBody.value == '') {
            AppManager.getInstance().uiManager.showAlertForm();
        } else {
            AppManager.getInstance().uiManager.addNewPost(this.inputTitleComment.value, this.inputBody.value);
            this.inputTitleComment.value = '';
            this.inputBody.value = '';
        }

    }

    onClickCancel() {
        AppManager.getInstance().uiManager.hidePostJquery();
    }

}