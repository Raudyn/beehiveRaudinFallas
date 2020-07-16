class Bee {
    constructor(name, address, phone, username, company, email, website, image, id,){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.username = username;
        this.company = company;
        this.email = email;
        this.website = website;
        this.image = image;
        this.id = id;
        this.posts = [];
        this.albumss = [];
        this.todos = [];
    }

    addPost(post){
        this.posts.push(post);
    }

    addAlbum(album){
        this.albumss.push(album);
    }

    addToDos(todo){
        this.todos.push(todo);
    }
}