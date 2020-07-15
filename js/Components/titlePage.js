class TitlePage {
    constructor(parent){
        this.parent = parent;
        var title = document.createElement('p');
        title.classList.add('TitlePage');
        title.innerHTML = 'BeeHive Proyect';
        parent.appendChild(title);
    }
}