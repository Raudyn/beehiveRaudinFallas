var AppManager = (function() {

    function AppManager(){
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this);
        this.dataManager.start();
    }

    var instance;

    return {
        getInstance: function() {
            if (!instance) {
                instance = new AppManager();
                delete instance.constructor;
            }
            return instance;
        }
    };
})();

