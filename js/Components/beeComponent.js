class BeeComponent extends Component {
    constructor(parent, model) {
        super(parent);
        this.model = model;
        this.container.id = 'beeComponent';
        this.container.classList.add('beeComponent');

        this.col1 = document.createElement('div');
        this.col1.classList.add('bee-col1')
        this.container.appendChild(this.col1);

        this.col2 = document.createElement('div');
        this.col2.classList.add('bee-col2')
        this.container.appendChild(this.col2);

        var imageContainer = document.createElement('img')
        imageContainer.id = 'imageContainer';
        imageContainer.classList.add('imageContainer');
        imageContainer.src = model.image;
        this.col1.appendChild(imageContainer);

        var name = document.createElement('p');
        name.classList.add('BeeComponentName');
        name.innerHTML = model.name;
        this.col2.appendChild(name);

        var userName = document.createElement('p');
        userName.classList.add('UserNameBee');
        userName.innerHTML = model.username;
        this.col2.appendChild(userName);

        var useremail = document.createElement('p');
        useremail.classList.add('useremail');
        useremail.innerHTML = model.email;
        this.col2.appendChild(useremail);

        var userPhone = document.createElement('p');
        userPhone.classList.add('userPhone');
        userPhone.innerHTML = model.phone;
        this.col2.appendChild(userPhone);

        this.container.onclick = this.onContainerClick.bind(this);
    }

    onContainerClick() {
        //console.log(this.model);
        var appManager = AppManager.getInstance();
        appManager.uiManager.refreshPostsComponet(this.model);

    }
}
