

class MatButton extends HTMLElement {
  constructor() {
    super();
  }

  get styles() {
    return `
      mat-button {
        display: inline-block;
        color: white;
        background-color: blueviolet;
        padding: 0 2rem;
        font-size: 1rem;
        border-radius: 2px;
        letter-spacing: .5px;
        text-align: center;
        text-decoration: none;
        height: 36px;
        line-height: 36px;
        cursor: pointer;
        box-shadow: 
          0 2px 2px 0 rgba(0,0,0,0.14), 
          0 1px 5px 0 rgba(0,0,0,0.12), 
          0 3px 1px -2px rgba(0,0,0,0.2)
      } 
    `
  }

  applyStyles() {
    let styleElement = document.createElement('style')
    styleElement.innerHTML = this.styles;
    document.head.appendChild(styleElement);
  }

  connectedCallback() {
    console.log('Mat Button');
    this.applyStyles();
  }
}

customElements.define('mat-button', MatButton);
