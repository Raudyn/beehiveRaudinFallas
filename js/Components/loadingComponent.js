class LoadinComponent extends Component{
    constructor(parent){
        super(parent);
        this.container.id = 'loadinComponent';
        this.container.classList.add('loadinComponent');

        var circleContainer = document.createElement('div');
        circleContainer.classList.add('circleContainer');
        circleContainer.style.backgroundImage = "url('images/Loading/giphy.gif')";
        this.container.appendChild(circleContainer);

        //this.tween = gsap.to(circleContainer, {rotation: 360, duration: 2, ease: "linear", repeat: -1});


        var loadinTitle = document.createElement('p');
        loadinTitle.innerText = 'LOADIN';
        this.container.appendChild(loadinTitle);
        
    }

    hideLoader(){
        //this.tween.kill();
        this.container.style.display = 'none';
    }
}