class ViewPhoto extends Component {
    constructor(parent, photo) {
        super(parent);
        this.photo = photo;
        this.container.id = 'viewPhoto';
        this.container.classList.add('viewPhoto');

        this.formBackGroundView = document.createElement('div');
        this.formBackGroundView.id = 'formBackGroundView';
        this.formBackGroundView.classList.add('formBackGroundView');
        this.container.appendChild(this.formBackGroundView);

        this.titlePhoto = document.createElement('p');
        this.titlePhoto.classList.add('titlePhoto');
        this.titlePhoto.innerHTML = photo.title;
        this.formBackGroundView.appendChild(this.titlePhoto);

        this.imgView = document.createElement('img');
        this.imgView.classList.add('imgView');
        this.imgView.src = photo.thumbnailUrl;
        this.formBackGroundView.appendChild(this.imgView);

        this.formBackGroundView.onclick = this.close.bind(this, 'viewPhoto');
    }

    close(id) {
        AppManager.getInstance().uiManager.closeViewPic(id);
    }

}