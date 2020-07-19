class AppComponent extends Component {
    constructor(parent){
        super(parent);
        this.container.id = 'appComponent';
        this.container.classList.add('appComponent');

        
        this.loadingComponent = new LoadinComponent(this.container);
        this.beesComponent = new BeesComponent(this.container);
        this.postsComponent = new PostsComponent(this.container);
        this.albumComponent = new AlbumComponent(this.container);
        this.toDosComponent = new ToDosComponent(this.container);
        this.commentFormComponent = new CommentFormComponent(this.container);
        this.alertForm = new AlertForm(this.container);
    }
}