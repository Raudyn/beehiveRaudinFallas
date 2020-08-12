class PostsComponent extends Component {
    constructor(parent) {
        super(parent);
        this.container.id = 'PostsComponent';
        this.container.classList.add('PostsComponent');
        parent.appendChild(this.container);
    }

    showBeePost(bee) {
        this.container.innerHTML = '';

        var containerAll = document.createElement('div');
        containerAll.classList.add('containerAll');
        this.container.appendChild(containerAll);

        var postsTitle = document.createElement('p');
        postsTitle.innerHTML = 'Posts';
        postsTitle.classList.add('postsTitle', 'titlesdisplay');
        containerAll.appendChild(postsTitle);

        this.btn = document.createElement('img');
        this.btn.classList.add('btnMas');
        this.btn.src = 'images/icons/plus.png';
        containerAll.appendChild(this.btn);

        this.btn.onclick = this.addPostBtn.bind(this);

        bee.posts.forEach(post => {
            var postComponent = new PostComponent(this.container, post);
        });
    }

    addPostBtn() {
        var appManager = AppManager.getInstance().uiManager.showPostForm();
    }
}