class UIManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.postReceiving = null;
        this.beeComponent = null;
        this.beemodel = null;
        this.headerComponent = new HeaderComponent(document.body);
        this.appComponent = new AppComponent(document.body);
        this.appComponent.commentFormComponent.hide();
        this.appComponent.alertForm.hideAlert();
    }

    showLoading() {
        //console.log('SHOW LOADING');
    }

    showUI() {
        this.appComponent.loadingComponent.hideLoader();
        this.appComponent.beesComponent.addBees(this.appManager.dataManager.bees);
        console.log(this.appManager.dataManager.bees);
    }

    showCommentForm(post) {
        this.postReceiving = post;
        this.appComponent.commentFormComponent.show();
    }

    showCommentFormAlert() {
        this.appComponent.commentFormComponent.show();
    }

    hideCommentForm() {
        this.appComponent.commentFormComponent.hide();
    }

    hideCommentFormJquery() {
        this.appComponent.commentFormComponent.hideJquery();
    }

    showAlertForm() {
        this.appComponent.alertForm.showAlert();
    }

    hideAlertForm() {
        this.appComponent.alertForm.hideAlert();
    }

    addNewComment(newtitle, newBody) {
        var comment = new Comment(newBody, this.beemodel.email, this.beemodel.id, newtitle, this.beemodel.postId);
        this.postReceiving.addComment(comment);
        //this.appComponent.commentFormComponent.hide();
        this.refreshPostsComponet(this.beeComponent, this.beemodel);
        console.log(this.appManager.dataManager.bees);
    }

    refreshPostsComponet(beeComponent, bee) {
        this.beemodel = bee;
        if (this.beeComponent !== null) { //dejo de estar seleccionado el component
            this.beeComponent.container.classList.remove('beeComponentSelected');
        }

        this.beeComponent = beeComponent;
        this.beeComponent.container.classList.add('beeComponentSelected');
        this.appComponent.postsComponent.showBeePost(this.beeComponent.model);
        this.appComponent.albumComponent.addAlbums(this.beeComponent.model);
    }

    showComentsToPost(comment) {
        this.appComponent.postsComponent.showBeePost(comment);
    }
}