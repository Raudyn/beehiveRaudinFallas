class MiniBar extends Component {
    constructor(parent) {
        super(parent);
        this.container.classList.add('miniBar');

        var p1 = document.createElement('p');
        p1.classList.add('pBees');
        p1.innerHTML = 'Bees';
        this.container.appendChild(p1);

        var p2 = document.createElement('p');
        p2.classList.add('pPosts');
        p2.innerHTML = 'Posts';
        this.container.appendChild(p2);

        var p3 = document.createElement('p');
        p3.classList.add('pAlbums');
        p3.innerHTML = 'Albums';
        this.container.appendChild(p3);

        var p4 = document.createElement('p');
        p4.classList.add('pToDos');
        p4.innerHTML = 'ToDos';
        this.container.appendChild(p4);
    }
}