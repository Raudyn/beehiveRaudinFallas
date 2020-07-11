class UIManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.headerComponent = new HeaderComponent(document.body);
        this.appComponent = new AppComponent(document.body);
    }

    showLoading() {
        //console.log('SHOW LOADING');
    }

    showUI(){
        this.appComponent.loadingComponent.hide();
        this.appComponent.beesComponent.addBees(this.appManager.dataManager.bees);
        //this.appComponent.postsComponent.addPosts(this.appManager.dataManager.bees);
    }

    refreshPostsComponet(bee){
        this.appComponent.postsComponent.showBeePost(bee);
    }

    verPostEnConsola(post){
        this.appComponent.postsComponent.showPost(post);
    }
}