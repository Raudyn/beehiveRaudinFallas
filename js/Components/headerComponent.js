class HeaderComponent extends Component{
    constructor(parent){
        super(parent);
        this.container.id = 'HeaderComponent';
        this.container.classList.add('HeaderComponent');

        this.titlePage = new TitlePage(this.container);

    }
}