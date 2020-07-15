class PostsComponent extends Component {
    constructor(parent){
        super(parent);
        this.container.id = 'PostsComponent';
        this.container.classList.add('PostsComponent');
        parent.appendChild(this.container);
    }

    showBeePost(bee){
        this.container.innerHTML = '';
        bee.posts.forEach(post => {
            console.log(post);
            var postComponent = new PostComponent(this.container, post);
        });
    }
}