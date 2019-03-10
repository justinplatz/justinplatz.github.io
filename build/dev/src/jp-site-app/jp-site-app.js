import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

class JpSiteApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          
        }

        .maincontainer {
          position: relative;
          top: calc(9vh - 4px);
          left: -8px;
          width: 100vw;
          overflow: scroll;
        }

      </style>

      <jp-nav></jp-nav>

      <template is="dom-if" if="[[_isHomeSelected(selected)]]">
        <jp-home
        name="jp-home">
        </jp-home>
      </template>

      <template is="dom-if" if="[[_isProjectsSelected(selected)]]">
        <jp-projects
        name="jp-projects">
        </jp-projects>
      </template>

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
    this.set("selected", "home");

    this._addSubscribers();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(this.getAttribute("name") + " connected");
  }

  _addSubscribers() {
    var self = this;
    $.subscribe("_goto", function (event, value) {
      if (value) {
        self.set("selected", value);
      }
    });
  }

  _isAboutSelected(selected) {
    return this.selected == "about";
  }

  _isHomeSelected(selected) {
    return this.selected == "home";
  }

  _isProjectsSelected(selected) {
    return this.selected == "projects";
  }

  _isResumeSelected(selected) {
    return this.selected == "resume";
  }

}

window.customElements.define('jp-site-app', JpSiteApp);