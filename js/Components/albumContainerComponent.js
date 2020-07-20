class AlbumContainerComponent extends Component {
    constructor(parent, model) { // model = album 
        super(parent)
        this.parent = parent;
        this.model = model;
        this.container.classList.add('albumContainerComponent');
        this.parent.appendChild(this.container);

        var titleAlbum = document.createElement('p');
        titleAlbum.classList.add('titleAlbum');
        titleAlbum.innerHTML = model.title;
        this.container.appendChild(titleAlbum);


        model.photos.forEach(photo => {

            var photoContainer = document.createElement('div');
            photoContainer.classList.add('photoContainer');
            this.container.appendChild(photoContainer);

            var titlePhoto = document.createElement('p');
            titlePhoto.classList.add('titlePhoto');
            titlePhoto.innerHTML = photo.title;
            photoContainer.appendChild(titlePhoto);

            var imgContainer = document.createElement('img');
            imgContainer.classList.add('imgContainer');
            imgContainer.src = photo.thumbnailUrl;
            photoContainer.appendChild(imgContainer);

        });
    }
}