class LoadinComponent extends Component{
    constructor(parent){
        super(parent);
        this.container.id = 'LoadinComponent';
        this.container.classList.add('LoadinComponent');

        var loadinTitle = document.createElement('p');
        loadinTitle.innerText = 'LOADIN';
        this.container.appendChild(loadinTitle);
    }
}