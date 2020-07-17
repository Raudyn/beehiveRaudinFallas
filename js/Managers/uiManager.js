class UIManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.postReceiving = null,
        this.beemodel = null;
        this.headerComponent = new HeaderComponent(document.body);
        this.appComponent = new AppComponent(document.body);
        this.appComponent.commentFormComponent.hide();
    }

    showLoading() {
        //console.log('SHOW LOADING');
    }

    showUI(){
        this.appComponent.loadingComponent.hide();
        this.appComponent.beesComponent.addBees(this.appManager.dataManager.bees);
        //console.log(this.appManager.dataManager.bees);
    }

    showCommentForm(post){
        this.postReceiving = post;
        this.appComponent.commentFormComponent.show(post)
    }

    hideCommentForm(){
        this.appComponent.commentFormComponent.hide();
    }

    addNewComment(newtitle, newBody){
        var comment = new Comment(newBody, this.beemodel.email, this.beemodel.id, newtitle, this.beemodel.postId);
        this.postReceiving.addComment(comment);
        this.appComponent.commentFormComponent.hide();
        this.refreshPostsComponet(this.beemodel);
        console.log(this.appManager.dataManager.bees);
    }

    refreshPostsComponet(bee){
        this.beemodel = bee;
        this.appComponent.postsComponent.showBeePost(bee);
    }

    showComentsToPost(comment){
        this.appComponent.postsComponent.showBeePost(comment);
    }
}