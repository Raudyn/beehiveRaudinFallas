class HeaderComponent extends Component{
    constructor(parent){
        super(parent);
        this.container.id = 'headerComponent';
        this.container.classList.add('headerComponent');

        this.titlePage = new TitlePage(this.container);

    }
}