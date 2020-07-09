class BeesComponent extends Component {
    constructor(parent){
        super(parent);
        this.container.id = 'BeesComponent';
        this.container.classList.add('BeesComponent');
        parent.appendChild(this.container);
    }

    addBees(bees){
        //console.log(bees);
        bees.forEach(bee => {
            var beeComponent = new BeeComponent(this.container, bee);
        });
    }
}