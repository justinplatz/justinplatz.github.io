import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@fabricelements/skeleton-carousel/skeleton-carousel.js';

/**
 * @customElement
 * @polymer
 */
class JpHome extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          
        }


        .maincontainer{
          background: var(--jp-default-white);
          margin-top: calc(7.5vh + 6vh + 5px);
          width: 100vw;
          height: calc(100vh - 7.5vh - 6vh - 5px - 5vh);
          clear: both;
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          left: 0;
          top: 0;
          overflow-y: scroll;
        }


        @media screen and (max-width: 580px) {
          .maincontainer{
            margin-top: calc(7.5vh + 45px);
            height: calc(100vh - 7.5vh - 45px - 1vh);
          }
          .modalOpentrue{
            margin-top: 0 !important;
            height: 100vh !important;
          }
        }
      </style>

      <div class$="maincontainer modalOpen[[modalOpen]]">
        <template is="dom-if" if="[[_isCarouselSelected(selected)]]">
          <jp-carousel
          name="jp-carousel">
          </jp-carousel>
        </template>

        <template is="dom-if" if="[[_isProjectsSelected(selected)]]">
          <jp-projects
          name="jp-projects">
          </jp-projects>
        </template>

        <template is="dom-if" if="[[_isContactSelected(selected)]]">
          <jp-contact
          name="jp-contact">
          </jp-contact>
        </template>

        <template is="dom-if" if="[[_isResumeSelected(selected)]]">
          <jp-resume
          name="jp-resume">
          </jp-resume>
        </template>
      </div>
     
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'jp-home'
      }
    };
  }

    ready() {
      super.ready();
      this.set("selected", "carousel");
      this._addSubscribers();
    }


    connectedCallback() {
      super.connectedCallback();
      console.log(this.name + " connected");
    }

    _addSubscribers(){
      var self = this;

      $.subscribe("_goto", function(event, value) {
        if(value){
          self.set("selected", value);
        }
      });

    }

    _isCarouselSelected(selected){
      return (this.selected == "carousel");
    }

    _isProjectsSelected(selected){
      return (this.selected == "projects");
    }

    _isResumeSelected(selected){
      return (this.selected == "resume");
    }

    _isContactSelected(selected){
      return (this.selected == "contact");
    }
}

window.customElements.define('jp-home', JpHome);
