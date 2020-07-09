class AlbumComponent extends Component {
    constructor(parent){
        super(parent);
        this.container.id = 'AlbumComponent';
        this.container.classList.add('AlbumComponent');
        parent.appendChild(this.container);
    }
}