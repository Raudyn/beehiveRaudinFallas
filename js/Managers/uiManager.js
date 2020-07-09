class UIManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.loadingComponent = new LoadinComponent(document.body);
        this.headerComponent = new HeaderComponent(document.body);
        this.appComponent = new AppComponent(document.body);
    }

    showLoading() {
        //console.log('SHOW LOADING');
    }

    showUI(){
        this.loadingComponent.hide();
        this.appComponent.beesComponent.addBees(this.appManager.dataManager.bees);
    }

    refreshPostsComponet(bee){
        this.appComponent.postComponent.showBeePost(bee);
    }
}