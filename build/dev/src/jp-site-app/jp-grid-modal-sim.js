import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-dialog/paper-dialog.js";
/**
 * @customElement
 * @polymer
 */

class JpGridModalSim extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          
        }

        paper-dialog{
          max-width: none !important;
          max-height: none !important;
          margin: 0 !important;
          padding: 0 !important;
          left: 0 !important;
          box-shadow: none;
          height: 100%;
          width: 100%;
        }

        video.vid{
          width: 90%;
        }

        paper-button.gridModalCloseButton{
        }

        .modalcontainer{
          text-align: center;
        }

        div.controls{
          width: 100%;
          display: block;
          clear: both;
          text-align: right;
          padding: 0 !important;
          margin: 0 !important;
        }

        @media screen and (max-width: 580px) {
          .modalcontainer{
            margin-top: 2.5vh;
          }
          
        }

        .bold{
          font-family: IBMBold;
          text-align: justify;
          color: var(--jp-light-blue);
          text-decoration: none;
          font-size: 1.25em;
          display: block;
          padding-bottom: 2.5vh;
        }

        .text{
          font-family: IBMLight;
          text-align: justify;
          color: var(--jp-black);
          padding-bottom: 2.5vh;
        }

      </style>

      <paper-dialog 
        id="modal" 
        no-overlap 
        horizontal-align="auto" 
        vertical-align="auto"
        entry-animation="fade-in-animation"
        exit-animation="fade-out-animation"
        no-cancel-on-outside-click
        no-cancel-on-esc-key>
       
        <div class="controls">
          <paper-button 
            on-tap="_close" 
            class="gridModalCloseButton">
              <iron-icon
              class="gridModalCloseButtonIcon" 
              icon="close">
              </iron-icon>
          </paper-button>
        </div>

        <div class="modalcontainer">
          <a class="bold" href="https://dl.acm.org/citation.cfm?doid=3240323.3243228">Published in RecSys '18 - Cognitive Company Discovery</a>
          <div class="text">
          Cognitive Company Discovery is an application that helps business professionals 
          identify companies of interest to them. The application employs a variety of artificial 
          intelligence and data science techniques to build a corpus of company data, rapidly search 
          the corpus based on implicit and explicit user queries, present the results using 
          visualization techniques that yield insight into areas of interest to the user and to 
          scan vast amounts of news and blog posts to aid users in discovering new companies. 
          The application is currently deployed in a major corporation
          </div>
          <a class="bold" href="https://dl.acm.org/citation.cfm?doid=3240323.3243228">Also published in IDEA '18 - Towards a Generalized Similarity Service</a>
          <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/285129679" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        </div>

      </paper-dialog>
    `;
  }

  static get properties() {
    return {
      name: {
        type: String,
        value: 'jp-grid-modal-sim'
      }
    };
  }

  ready() {
    super.ready();
    this.set("selected", "home");

    this._addSubscribers();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.getAttribute("name") + " connected");
  }

  _addSubscribers() {
    var self = this;
    $.subscribe("_openModalSim", function (event, data) {
      self.$.modal.open();
    });
    $.subscribe("_closeModal", function (event, data) {
      self._close();
    });
  }

  _close() {
    this.$.modal.close();
  }

}

window.customElements.define('jp-grid-modal-sim', JpGridModalSim);