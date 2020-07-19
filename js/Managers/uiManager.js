class UIManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.postReceiving = null,
        this.beemodel = null;
        this.headerComponent = new HeaderComponent(document.body);
        this.appComponent = new AppComponent(document.body);
        this.appComponent.commentFormComponent.hide();
        this.appComponent.alertForm.hideAlert();
    }

    showLoading() {
        //console.log('SHOW LOADING');
    }

    showUI(){
        this.appComponent.loadingComponent.hideLoader();
        this.appComponent.beesComponent.addBees(this.appManager.dataManager.bees);
        console.log(this.appManager.dataManager.bees);
    }

    showCommentForm(post){
        this.postReceiving = post;
        this.appComponent.commentFormComponent.show();
    }

    showCommentFormAlert(){
        this.appComponent.commentFormComponent.show();
    }
    
    hideCommentForm(){
        this.appComponent.commentFormComponent.hide();
    }

    showAlertForm(){
        this.appComponent.alertForm.showAlert();
    }

    hideAlertForm(){
        this.appComponent.alertForm.hideAlert();
    }

    addNewComment(newtitle, newBody){
        var comment = new Comment(newBody, this.beemodel.email, this.beemodel.id, newtitle, this.beemodel.postId);
        this.postReceiving.addComment(comment);
        //this.appComponent.commentFormComponent.hide();
        this.refreshPostsComponet(this.beemodel);
        console.log(this.appManager.dataManager.bees);
    }

    refreshPostsComponet(bee){
        this.beemodel = bee;
        this.appComponent.postsComponent.showBeePost(bee);
        this.appComponent.albumComponent.addAlbums(bee);
    }

    showComentsToPost(comment){
        this.appComponent.postsComponent.showBeePost(comment);
    }
}