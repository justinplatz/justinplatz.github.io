define(["../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class JpProjects extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host{
          
        }

      </style>  
      
      <jp-projects-grid
      name="jp-projects-grid">
      </jp-projects-grid>


      <jp-grid-modal-qa
      name="jp-grid-modal-qa">
      </jp-grid-modal-qa>

      <jp-grid-modal-sim
      name="jp-grid-modal-sim">
      </jp-grid-modal-sim>

      <jp-grid-modal-co
      name="jp-grid-modal-co">
      </jp-grid-modal-co>

      <jp-grid-modal-pnco
      name="jp-grid-modal-pnco">
      </jp-grid-modal-pnco>

      
    `}static get properties(){return{}}}window.customElements.define("jp-projects",JpProjects)});