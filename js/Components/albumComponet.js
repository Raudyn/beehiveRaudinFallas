class AlbumComponent extends Component {
    constructor(parent) {
        super(parent);

        this.container.id = 'AlbumComponent';
        this.container.classList.add('AlbumComponent');
        parent.appendChild(this.container);
    }

    addAlbums(bee) {
        this.container.innerHTML = '';
        var albumsTitle = document.createElement('p');
        albumsTitle.innerHTML = '';
        albumsTitle.classList.add('albumsTitle', 'titlesdisplay');
        this.container.appendChild(albumsTitle);

        bee.albumss.forEach(album => {
            if (bee.id === album.userId) {
                var albumContainerComponent = new AlbumContainerComponent(this.container, album);
            }
        });
    }
}