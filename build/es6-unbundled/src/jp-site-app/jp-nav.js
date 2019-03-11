define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/iron-dropdown/iron-dropdown.js","../../node_modules/@polymer/neon-animation/neon-animation.js","../../node_modules/@polymer/paper-listbox/paper-listbox.js","../../node_modules/@polymer/paper-menu-button/paper-menu-button.js"],function(_polymerElement,_paperIconButton,_ironIcons,_paperButton,_ironDropdown,_neonAnimation,_paperListbox,_paperMenuButton){"use strict";class JpNav extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          display: block;
          width: auto;
          height: auto;
          clear: both;
        }

        div.logocontainer{
          display: flex;
          justify-content: left;
          align-items: center; 
        }

        span.bold{
          font-family: IBMBold;
        }

        paper-icon-button.menubutton{
          color: var(--jp-black);
        }

        paper-button.navbutton{
          font-family: IBMBold;
          border-radius: 0;
        }

        paper-button.navbutton:hover{
          color: var(--jp-light-blue);
          background: var(--jp-black);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        paper-button.red:hover{
          color: var(--jp-red);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        paper-button.green:hover{
          color: var(--jp-green);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        paper-button.purple:hover{
          color: var(--jp-purple);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        #navbar {
          overflow: hidden;
          background-color: var(--jp-white);
          transition: 0.4s;
          position: fixed;
          top: 0;
          z-index: 99;
          width: 98vw;
          left: 0px;
          border-bottom: 2px solid var(--jp-dark-border);
        }

        #navbar #logo {
          font-size: 1em;
          font-weight: bold;
          transition: 0.4s;
        }

        #navbar-right {
          position: fixed;
          right: 1vw;
        }

        .navbarexpanded-true{
          padding: 3vh 1vw;
        }

        .navbarexpanded-false{
          padding: 2vh 1vw;
        }

        .logotext{
          font-family: IBMLight;
          letter-spacing: -1.5px;
          color: var(--jp-black);
          display: inline-block;
        }

        div.logotextexpanded-true{
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
          font-size: 2em;
        }

        div.logotextexpanded-false{
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
          font-size: 2em;
        }

        @media screen and (max-width: 580px) {
          #navbar {
            padding: 20px 10px !important;
          }
          #navbar a {
            float: none;
            display: block;
            text-align: left;
          }
          
        }

        paper-button.dropdownbutton{
          display: block;
          font-family: IBMBold;
          text-align: center;
          background: var(--jp-white);

          border-radius: 0;
          padding-left: 0;
          padding-right: 0;
          margin-left: 0;
          margin-right: 0;
        }

        paper-button.bottom{
          border-bottom: 2px solid var(--jp-dark-border);
        }

        paper-listbox.listbox{
          position: fixed;
          left: 0;
          width: 100vw;
          margin-top: 0 !important;
          padding-top: 0 !important;
        }

        .logo{
          background: var(--jp-black);
          color: var(--jp-offwhite);
          border-radius: 50%;
          width: 5vh;
          height: 5vh;
          padding: 0;
          margin: 0;
          min-width: 0 !important;
          margin-top: .5vh;
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        .logo:hover{
          background: var(--jp-light-blue);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        .logodiv{
          font-family: IBMBold;
          font-size: 0.75em;
        }
      </style>


      <div id="navbar" class$="navbarexpanded-[[expanded]]">
        <div class="logocontainer" id="logo"> 

          <div class$="logotext logotextexpanded-[[expanded]]">
            <paper-button
            class="logo"
            on-tap="_gohome" 
            value="home">
              <div class="logodiv">
                JP
              </div>
            </paper-button>
          </div>
        
          <div id="navbar-right">
            <template is="dom-if" if="[[!mobile]]">
              <paper-button class="navbutton green" on-tap="_goto" value="projects">Projects</paper-button>
              <paper-button class="navbutton red" on-tap="_goto" value="resume">Resume</paper-button>
              <paper-button class="navbutton purple" on-tap="_goto" value="about">Contact</paper-button>
            </template>
            <template is="dom-if" if="[[mobile]]">

              <paper-menu-button
              horizontalAlign="left"
              verticalAlign="bottom"
              dynamicAlign="true"
              no-overlap="true">

                <paper-icon-button slot="dropdown-trigger" icon="menu" on-tap="_menuClicked" alt="menu">
                </paper-icon-button>
               
                <paper-listbox slot="dropdown-content" class="listbox">
                  <paper-button class="dropdownbutton" on-tap="_goto" value="projects">Projects</paper-button>
                  <paper-button class="dropdownbutton" on-tap="_goto" value="resume">Resume</paper-button>
                  <paper-button class="dropdownbutton bottom" on-tap="_goto" value="ontact">Contact</paper-button>
                </paper-listbox>
              </paper-menu-button>


            </template>
          </div>
        </div>
      </div>
      
    `}static get properties(){return{mobile:{notfiy:!0},expanded:{notfiy:!0}}}ready(){super.ready();this._addScrollListener();this.set("expanded",!0);this.set("dropdownexpanded",!1);var w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;w=760>w?!0:!1;if(w){this.set("expanded",!1)}}_addScrollListener(){var self=this;self._resizeWindowFunction();window.onresize=function(){self._resizeWindowFunction()};self._scrollFunction();window.onscroll=function(){self._scrollFunction()}}_resizeWindowFunction(){var w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;w=760>w?!0:!1;this.set("mobile",w);if(w){this.set("expanded",!1)}}_scrollFunction(){var self=this;if(this.mobile){return}if(80<document.body.scrollTop||80<document.documentElement.scrollTop){self.set("expanded",!1)}else{self.set("expanded",!0)}}_menuClicked(){$.publish("_closeModal");if(this.dropdownexpanded){this.set("dropdownexpanded",!1)}else{this.set("dropdownexpanded",!0)}}_gohome(){$.publish("_goto","home");$.publish("_closeModal")}_goto(e){var val=e.target.getAttribute("value");$.publish("_goto",val);$.publish("_closeModal")}}window.customElements.define("jp-nav",JpNav)});