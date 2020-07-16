class BeeComponent extends Component {
    constructor(parent, model){
        super(parent);
        this.model = model;
        this.container.id = 'BeeComponent';
        this.container.classList.add('BeeComponent');

        var name = document.createElement('p');
        name.classList.add('BeeComponentName');
        name.innerHTML = model.name;
        this.container.appendChild(name);

        var userName = document.createElement('p');
        userName.classList.add('UserNameBee');
        userName.innerHTML = model.username;
        this.container.appendChild(userName);

        
        var ImageContainer = document.createElement('div')
        ImageContainer.id = 'ImageContainer';
        ImageContainer.classList.add('ImageContainer');
        ImageContainer.style.background = model.image;
        this.container.appendChild(ImageContainer);

        this.container.onclick = this.onContainerClick.bind(this);
    }

    onContainerClick(){
        //console.log(this.model);
        var appManager = AppManager.getInstance();
        appManager.uiManager.refreshPostsComponet(this.model);
        
    }
}
