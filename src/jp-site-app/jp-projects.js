import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class JpProjects extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host{
          
        }

        .modalhiddentrue:{
          display: none;
        }

        jp-projects-grid.gridshiddentrue:{
          display: none;
        }
      </style>  
      
      <template is="dom-if" if="[[!modalOpen]]">
        <jp-projects-grid
        name="jp-projects-grid">
        </jp-projects-grid>
      </template>
      
      <jp-grid-modal-qa
      name="jp-grid-modal-qa"
      class$="modalhidden[[modalOpen]]">
      </jp-grid-modal-qa>

      <jp-grid-modal-sim
      name="jp-grid-modal-sim"
      class$="modalhidden[[modalOpen]]">
      </jp-grid-modal-sim>

      <jp-grid-modal-co
      name="jp-grid-modal-co"
      class$="modalhidden[[modalOpen]]">
      </jp-grid-modal-co>

      <jp-grid-modal-pnco
      name="jp-grid-modal-pnco"
      class$="modalhidden[[modalOpen]]">
      </jp-grid-modal-pnco>

      <jp-grid-modal-lm
      name="jp-grid-modal-lm"
      class$="modalhidden[[modalOpen]]">
      </jp-grid-modal-lm>
      
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'jp-projects'
      },
      modalOpen:{
        type: Boolean,
        value: false
      }
    };
  }

  ready() {
    super.ready();
    this._addSubscribers();
    this.set("modalOpen", false);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  _addSubscribers(){
    var self = this;
  
    $.subscribe("_closeModal", function(event, data) {
        self.set("modalOpen", false);
    });

     $.subscribe("openModal", function(event, data) {
        self.set("modalOpen", true);
    });
  }


   
}

window.customElements.define('jp-projects', JpProjects);
