import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-dialog/paper-dialog.js";
/**
 * @customElement
 * @polymer
 */

class JpGridModalQa extends PolymerElement {
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
            margin-top: 10vh;
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
          <div class="bold"> 
            NBA Guru
          </div>
          <div class="text">
            A NBA Question Answering System Powered by Watson.
            The NLQ system uses an ontology to capture domain knowledge
            It converts natural language into queries over the ontology;
            these queries then get translated into SQL queries, 
            which are executed against a DB instance to retrieve answers.
          </div>
          <video width="100%" height="100%" controls controlsList="nodownload" class="vid">
            <source src="../css/videos/qa.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>

      </paper-dialog>
    `;
  }

  static get properties() {
    return {
      name: {
        type: String,
        value: 'jp-grid-modal-qa'
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
    $.subscribe("_openModalQa", function (event, data) {
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

window.customElements.define('jp-grid-modal-qa', JpGridModalQa);