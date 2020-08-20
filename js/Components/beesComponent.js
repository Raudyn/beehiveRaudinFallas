class BeesComponent extends Component {
    constructor(parent) {
        super(parent);
        this.container.id = 'BeesComponent';
        this.container.classList.add('BeesComponent');
    }

    addBees(bees) {
        //console.log(bees);
        var beesTitle = document.createElement('p');
        beesTitle.innerHTML = '';
        beesTitle.classList.add('beesTitle', 'titlesdisplay');
        this.container.appendChild(beesTitle);

        bees.forEach(bee => {
            var beeComponent = new BeeComponent(this.container, bee);
            this.addChild(beeComponent);

        });
    }

    findOwner() {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].model.owner) {
                return this.children[i];
            }
        }
    }
}