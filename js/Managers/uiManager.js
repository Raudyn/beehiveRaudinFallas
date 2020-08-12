class UIManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.postReceiving = null;
        this.beeComponent = null;
        this.beemodel = null;
        this.headerComponent = new HeaderComponent(document.body);
        this.appComponent = new AppComponent(document.body);
        this.appComponent.commentFormComponent.hide();
        this.appComponent.postFormComponent.hide();
        this.appComponent.toDosFormComponent.hide();
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

    showPostForm() {
        this.appComponent.postFormComponent.show();
    }

    showToDosForm() {
        this.appComponent.toDosFormComponent.show();
    }

    showCommentFormAlert() {
        this.appComponent.commentFormComponent.show();
    }

    hidePostJquery() {
        this.appComponent.postFormComponent.hideJquery();
    }

    hideCommentFormJquery() {
        this.appComponent.commentFormComponent.hideJquery();
    }

    hideFormJquery() {
        this.appComponent.toDosFormComponent.hideJquery();
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
        this.refreshPostsComponet(this.beeComponent, this.beemodel);
        console.log(this.appManager.dataManager.bees);
    }

    addNewPost(newtitle, newBody) {
        var post = new Post(newBody, AppManager.getInstance().owner.id, newtitle, AppManager.getInstance().owner.userId);
        AppManager.getInstance().owner.posts.unshift(post);
        this.beeComponentSelected = this.appComponent.beesComponent.findOwner();
        this.refreshPostsComponet(this.beeComponent, this.beemodel);
    }
    addNewToDo(newtitle) {
        var todo = new ToDo(false, this.beemodel.id, newtitle, this.beemodel.userId);
        this.beemodel.todos.unshift(todo);
        this.refreshPostsComponet(this.beeComponent, this.beemodel);

        var request = new XMLHttpRequest();
        request.open('POST', 'https://beehive-270a2.firebaseio.com/data/todos.json');
        request.onload = function(e) {
            console.log(e.target);
        }
        request.send(JSON.stringify(todo));
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
        this.appComponent.toDosComponent.addTodos(this.beeComponent.model);
    }

    showComentsToPost(comment) {
        this.appComponent.postsComponent.showBeePost(comment);
    }
}