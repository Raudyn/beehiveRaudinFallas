class PostComponent extends Component {
    constructor(parent){
        super(parent);
        this.container.id = 'PostComponent';
        this.container.classList.add('PostComponent');
        parent.appendChild(this.container);
        this.bee = null;
    }

    showBeePost(bee){
        console.log('SHOWIMG', bee);
    }
}