class AlertForm extends Component {
    constructor(parent) {
        super(parent)
        this.container.id = 'alertForm';
        this.container.classList.add('alertForm');

        var alertComponent = document.createElement('div');
        alertComponent.id = 'alertComponent';
        alertComponent.classList.add('alertComponent');
        this.container.appendChild(alertComponent);

        var message = document.createElement('p');
        message.classList.add('message');
        message.innerHTML = 'Debe llenar todos los Campos para continuar';
        alertComponent.appendChild(message);

        this.closeBtn = document.createElement('div');
        this.closeBtn.classList.add('closeBtn');
        var inner = document.createElement('p');
        inner.classList.add('inner');
        inner.innerHTML = 'Close';
        this.closeBtn.appendChild(inner);
        alertComponent.appendChild(this.closeBtn);
        this.closeBtn.onclick = this.closeBtnClick.bind(this);

    }

    closeBtnClick() {
        AppManager.getInstance().uiManager.hideAlertForm();
        AppManager.getInstance().uiManager.showCommentFormAlert();
    }

    hideAlert() {
        this.container.style.display = 'none';
    }

    showAlert() {
        this.container.style.display = 'flex';
    }
}