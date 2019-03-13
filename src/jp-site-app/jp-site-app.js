define(["../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class JpSiteApp extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          margin: 0 !important;
          padding: 0 !important;
        }

      </style>

      <jp-nav></jp-nav>
      <jp-home></jp-home>
      

    `}static get properties(){return{name:{type:String,value:"jp-site-app"}}}ready(){super.ready()}connectedCallback(){super.connectedCallback();console.log(this.getAttribute("name")+" connected")}_addSubscribers(){var self=this}}window.customElements.define("jp-site-app",JpSiteApp)});