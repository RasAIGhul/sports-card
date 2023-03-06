import {LitElement, html, css} from 'lit';

import "@lrnwebcomponents/meme-maker/meme-maker.js";

export class SportsCard extends LitElement {

  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      position: {
        type: String
      },
      accentColor: {
        type: String,
        reflect: true,
        attribute: 'accent-color'
      },
      topTitle: { 
        type: String,
        reflect: true
      },
      imgSource: {
        type: String,
      },
      opened: {
        type: Boolean,
        reflect: true
      }
    }
  }


  static get styles(){
    return [
      css`

      :host([accent-color="red"]) .wrapper {
        border: var(--sports-card-wrapper-border-color,8px solid white);   
        background-color: var(--sports-card-accent-color, red);
        color: black;
      }

   
      :host([accent-color="white"]) .wrapper {
        border: var(--sports-card-wrapper-border-color,8px solid #1B111D);
        background-color: var(--sports-card-accent-color, white);
        color: black;
      }

      :host([accent-color="orange"]) .wrapper {
        background-color:var(--sports-card-accent-color, #FF3C19); 
        color: black;
        border: var(--sports-card-wrapper-border-color,8px solid #1B111D);
      }

      :host([accent-color="black"]) .wrapper {
        background-color: var(--sports-card-accent-color,#1B111D );
        color: white;
        border: var(--sports-card-wrapper-border-color,8px solid #FF3C19);
      }
      .wrapper{
        border: var(--sports-card-wrapper-border-color,8px solid #000);
        display: inline-block;
        padding: var(--sports-card-wrapper-padding, 20px);
        margin: var(--sports-card-wrapper-margin, 20px);
        vertical-align: middle;
        width: 400px;
      }
      
      .outside{
          text-align: center;
      } 

      @media (max-width: 600px) {
        .outsidediv {
          transform: scale(.9);
        }
      }

      .information{
        padding-inline-start: 0px;
        margin-block-end: 0em;
      }

      p{
          margin-block-end: 0;
      } 
    `,
  ];
}


  constructor() {
    super();
    this.imgSource = "https://i.imgur.com/yLSPjIB.png";
    this.topTitle = "Hingle McCringleberry";
    this.position = "Tight End";
    this.accentColor = null;
    this.opened = false;
  }

  toggleDetails() {
    this.shadowRoot.querySelector('.details').toggleAttribute('open');
  }

  toggleEvent(e) {
    this.opened = e.target.open;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'opened') {
        this.dispatchEvent(new CustomEvent('opened-changed', 
        {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
            value: this[propName]}
        }));
        console.log(`${propName} changed. oldValue: ${oldValue}`);
      }
    });
  }

  render() {
    return html`
    <div class="wrapper">
      <div class='toChange'>
        <meme-maker 
          alt=${this.topTitle} 
          image-url=${this.imgSource} 
          top-text=${this.topTitle}>
        </meme-maker>
        <div class="outside">
          <details class ='details' .open="${this.opened}" @toggle="${this.toggleEvent}">
            <summary>Details</summary>
            <ul class="information">
              <p>
               <slot></slot>
              </p>
            </ul>
          </details>
        </div>
      </div>
    </div>
    `;
  }
}
customElements.define('sports-card', SportsCard);
