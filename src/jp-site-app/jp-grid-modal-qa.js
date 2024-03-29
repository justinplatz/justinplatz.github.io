import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-dialog/paper-dialog.js';

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

        paper-dialog {
          max-width: none !important;
          max-height: none !important;
          margin: 0 !important;
          padding: 0 !important;
          box-shadow: none;
          height: 100vh;
          width: 100vw;
          top: 0 !important;
          left: 0 !important;
          position: absolute !important;
        }

        video.vid{
          width: 90%;
        }

        paper-button.gridModalCloseButton{
          background: var(--jp-black);
          border-radius: 0;
          color: var(--jp-default-white);
          height: 7.5vh;
          padding: 0 !important;
          margin: 0 !important;
        }

        paper-button.gridModalCloseButton:hover{
          background: var(--jp-light-blue);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }


        .modalcontainer{
          text-align: center;
          height: calc(100vh - 10vh);
        }

        div.controls{
          width: 100%;
          display: block;
          clear: both;
          text-align: right;
          padding: 0 !important;
          margin: 0 !important;
          background: var(--jp-dark-border);
        }

        @media screen and (max-width: 580px) {
          .modalcontainer{
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
          padding-top: 1vh;
        }

        .text{
          font-family: IBMLight;
          text-align: justify;
          color: var(--jp-black);
          padding-bottom: 2.5vh;
        }

        .frame{
          padding:40% 0 0 0;
          position:relative;
        }

        @media screen and (max-width: 580px) {
          .frame{
            padding:55% 0 0 0;
          }
          
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
          <div class="bold title"> 
            NBA Guru
          </div>
          <div class="text">
            A NBA Question Answering System Powered by Watson.
            The NLQ system uses an ontology to capture domain knowledge.
            Using Natural Language we can query over a self-developed ontology to retrieve question answers.
          </div>
          <div class="frame"><iframe src="https://player.vimeo.com/video/324369298" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>        </div>

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

    _addSubscribers(){
      var self = this;
      $.subscribe("_openModalQa", function(event, data) {
          self.$.modal.open();
      });
      // $.subscribe("_closeModal", function(event, data) {
      //     self._close();
      // });
    }

    _close(){
      $.publish("_closeModal");
      this.$.modal.close();
    }
      
 

}

window.customElements.define('jp-grid-modal-qa', JpGridModalQa);
