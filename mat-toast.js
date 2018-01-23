
class MatToast extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log('Mat Toast');
  }
}

customElements.define('mat-toast', MatToast);