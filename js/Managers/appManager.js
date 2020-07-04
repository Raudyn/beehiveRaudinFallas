class AppManager {  // se encarga de la comunicacion entre managers
    constructor(){
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this);
        this.dataManager.start();
    }
}