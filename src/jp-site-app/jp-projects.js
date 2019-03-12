define(["../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class JpProjects extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host{
          display: block;
          width: auto;
          height: auto;
          clear: both;
        }

        .panel{
          width: 100%;
          position: relative;
          font-family: IBMLight;
          font-size: 1em;
          align-items: center;
          margin-top: calc(10vh + 6px);
        }

      </style>  
      <div class="panel">
        <jp-projects-grid
        name="jp-projects-grid">
        </jp-projects-grid>
      </div>

      <jp-grid-modal-qa
      name="jp-grid-modal-qa">
      </jp-grid-modal-qa>

      <jp-grid-modal-sim
      name="jp-grid-modal-sim">
      </jp-grid-modal-sim>

      <jp-grid-modal-co
      name="jp-grid-modal-co">
      </jp-grid-modal-co>

      
    `}static get properties(){return{}}}window.customElements.define("jp-projects",JpProjects)});