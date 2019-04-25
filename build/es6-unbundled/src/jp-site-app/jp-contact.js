define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/fa-icon-polymer/fa-icon.js"],function(_polymerElement,_faIcon){"use strict";class JpContact extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
        
        }

        .buttoncontainer{
          text-align: center;
          width: 100%;
          margin-left: 0;
        }

        @media screen and (max-width: 580px) {
          .buttoncontainer{
            margin-top: 2.5vh;
            width: 60%;
            margin-left: 20%;
          }
        }

        paper-button.socialbutton{
          margin: 1vh 1.5vw !important;
          min-width: 0 !important;
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
          border: 3px solid var(--jp-black);
          height: 7.5vh;
          width: 7.5vh;
        }

        paper-button.socialbutton:hover, paper-button.socialbutton:hover *{
          background: var(--jp-black);
          --icon-background-color: var(--jp-black);
        }

        paper-button.red:hover, paper-button.red:hover *{
          color: var(--jp-red);
          --icon-color: var(--jp-red);
        }

        paper-button.blue:hover, paper-button.blue:hover *{
          color: var(--jp-light-blue);
          --icon-color: var(--jp-light-blue);
        }

        paper-button.green:hover, paper-button.green:hover *{
          color: var(--jp-green);
          --icon-color: var(--jp-green);
        }

        paper-button.pink:hover, paper-button.pink:hover *{
          color: var(--jp-pink);
          --icon-color: var(--jp-pink);
        }

        paper-button.purple:hover, paper-button.purple:hover *{
          color: var(--jp-purple);
          --icon-color: var(--jp-purple);
        }

        fa-icon.icon{
          --icon-color: var(--jp-black);
          --icon-background-color: transparent;
          font-size: 1em;
        }

        .link{
          text-decoration: none;
        }

      </style>

      <div class="buttoncontainer">
        <a href="tel:516-4763716" class="link">
          <paper-button class="socialbutton red">
            <fa-icon icon-prefix="fa" icon-name="fa-phone" class="icon"></fa-icon> 
          </paper-button>
        </a>

        <a href="mailto:justinmplatz@gmail.com" class="link">
          <paper-button class="socialbutton blue">
            <fa-icon icon-prefix="fa" icon-name="fa-envelope" class="icon"></fa-icon>
          </paper-button>
        </a>
        
        <a href="https://www.linkedin.com/in/justinplatz/" class="link">
          <paper-button class="socialbutton green">
            <fa-icon icon-prefix="fab" icon-name="fa-linkedin" class="icon"></fa-icon>
          </paper-button>
        </a>
        
        <a href="https://github.com/justinplatz" class="link">
          <paper-button class="socialbutton pink">
            <fa-icon icon-prefix="fab" icon-name="fa-github" class="icon"></fa-icon>
          </paper-button>
        </a>
      
        <a href="https://twitter.com/justin_m_platz" class="link">
          <paper-button class="socialbutton purple">
            <fa-icon icon-prefix="fab" icon-name="fa-twitter" class="icon"></fa-icon>
          </paper-button>
        </a>
      </div>
    `}static get properties(){return{prop1:{type:String,value:"jp-contact"}}}}window.customElements.define("jp-contact",JpContact)});