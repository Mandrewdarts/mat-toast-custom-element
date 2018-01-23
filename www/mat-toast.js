
class MatToast extends HTMLElement {
  constructor() {
    super();
  }

  // Called when element is inserted in the DOM
  connectedCallback() {
    console.log('Mat Toast');
    this.addEventListener('animationend', () => {
      this.close();
      console.log('done animating')
    });
  }

  // A getter for open
  // This will be returned when MatToast.open property is called
  get open() {
    return this.hasAttribute('open');
  }

  // A setter for open
  // When MatToast.open is assigned this method will be called
  // Ex. MatToast.open = 'yep'
  set open(val) {
    console.log(val);
    if (val === true) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }

  // A method to open and set toast message
  show(message) {
    const msg = message || null;
    if (msg) {
      this.innerText = msg;
    }
    this.open = true;
    
  }

  // A method to close toast message
  close() {
    this.open = false;
  }
}

customElements.define('mat-toast', MatToast);