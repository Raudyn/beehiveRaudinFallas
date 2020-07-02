class Post {
    constructor(body, id, title, userId){
        this.body = body;
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.comments = [];
    }

    addComment(comment){
        this.comments.push(comment);
    }
}