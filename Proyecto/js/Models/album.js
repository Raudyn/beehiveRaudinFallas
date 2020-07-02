class Album {
    constructor(id, title, userId){
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.photos = [];
    }

    addPhotos(photo){
        this.photos.push(photo);
    }
}