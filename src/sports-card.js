import {LitElement, html, css} from 'lit';

const hingle = new URL('../assets/hingle.jpeg', import.meta.url).href; 

export class SportsCard extends LitElement {
  static properties() {
    return {
      name: {
        type: String
      },
      description: {
        type: String
      },
      position: {
        type: String
      },
      color:{
        type: String,
        reflect: true
      }
    }
  }


  static get styles() {
    return css`
      .outsidediv{
        border: 8px solid #000;
        display: inline-block;
        vertical-align: middle;
        width: 400px;
      }
      .hingle {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 400;
      }
      .titleCardHingle{
        text-align: center;
        font-family: "Copperplate",fantasy;
        font-size: 1.75em; 
        width: 400px;
        margin: auto;
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
    `;
    
  }

  constructor() {
    super();
    this.name = "Hingle McCringleBerry"
    this.description = "Hingle McCringleberry is the 2012 Heisman-winning tight end out of Penn State University, selected No. 1 overall by the Rhinos in the 2016 NFL Draft."
    this.position = "Tight End"
    this.color = "white"
  }

  render() {
    return html`
    <div class="outsidediv">
      <img class="hingle" src="${hingle}" />
      <div id='toChange' style ="background-color:white">
        <h1 class="titleCardHingle" id='title'>
          ${this.name}
         <br>
          ${this.position}
        </h1>
        <div class="outside">
          <details class ='details' open>
            <summary>Details</summary>
            <ul class="information">
              <p>
                ${this.description}
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
