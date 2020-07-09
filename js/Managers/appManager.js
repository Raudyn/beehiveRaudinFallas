class AppManager { 


    var SingletonFactory = (() => {

        function AppManager(){
            this.dataManager = new DataManager(this);
            this.uiManager = new UIManager(this);
            this.dataManager.start();
        }

        var instance;

        return {
            getinstance: () => {
                if (!instance) {
                    instance = new AppManager();
                    delete instance.constructor;
                }
                return instance;
            }
        };
    })();
}