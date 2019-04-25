import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class JpSiteApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          margin: 0 !important;
          padding: 0 !important;
        }

      </style>

      <jp-nav></jp-nav>
      <jp-home></jp-home>


    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'jp-site-app'
      }
    };
  }

   ready() {
      super.ready();
    }

    connectedCallback() {
      super.connectedCallback();
      console.log(this.name + " connected");
    }

    _addSubscribers(){
      var self = this;
    }


}

window.customElements.define('jp-site-app', JpSiteApp);
