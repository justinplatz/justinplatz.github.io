import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-dropdown/iron-dropdown.js';
import '@polymer/neon-animation/neon-animation.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-menu-button/paper-menu-button.js';

/**
 * @customElement
 * @polymer
 */
class JpNav extends PolymerElement {
  static get template() {
    return html`
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
          right: 2.5vw;
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


        paper-menu-button.papermenubutton{
          --paper-menu-button-dropdown:{}
        }
        
        /* paper-listbox.listbox{
          position: fixed;
          left: 0;
          top: calc(5vh + 43px);
          width: 100vw;
          margin-top: 0 !important;
          padding-top: 0 !important;
          z-index: 100 !important;
        } */

        .logo{
          background: var(--jp-black);
          color: var(--jp-offwhite);
          border-radius: 0;
          width: 7.5vh;
          height: 7.5vh;
          padding: 0;
          margin: 0;
          min-width: 0 !important;
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        .logo:hover{
          color: var(--jp-black);
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

        paper-button.socialbutton{
          margin: 0vh .5vw !important;
          min-width: 0 !important;
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
          border: 3px solid var(--jp-black);
          height: 7.5vh;
          width:  7.5vh;
          border-radius: 0;
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

        .modalOpentrue{
          visibility: hidden;
        }
      </style>


      <div id="navbar" class$="navbarexpanded-[[expanded]] modalOpen[[modalOpen]]">
        <div class="logocontainer" id="logo"> 

          <div class$="logotext logotextexpanded-[[expanded]]">
            <paper-button
            class="logo"
            on-tap="_gohome" 
            value="carousel">
              <div class="logodiv">
                JP
              </div>
            </paper-button>
          </div>
        
          <div id="navbar-right">
            
            <template is="dom-if" if="[[!mobile]]">
              <paper-button class="navbutton green" on-tap="_goto" value="projects">Projects</paper-button>
              <paper-button class="navbutton red" on-tap="_goto" value="resume">Resume</paper-button>
              <paper-button class="navbutton purple" on-tap="_goto" value="contact">Contact</paper-button>
            </template>
            
            <template is="dom-if" if="[[mobile]]">
              <!-- <paper-menu-button
              horizontalAlign="left"
              verticalAlign="bottom"
              no-overlap="true"
              class="papermenubutton">

                <paper-icon-button 
                slot="dropdown-trigger" 
                icon="menu" 
                on-tap="_menuClicked" 
                alt="menu">
                </paper-icon-button>
                <paper-listbox slot="dropdown-content" class="listbox">
                  <paper-button class="dropdownbutton" on-tap="_goto" value="projects">Projects</paper-button>
                  <paper-button class="dropdownbutton" on-tap="_goto" value="resume">Resume</paper-button>
                  <paper-button class="dropdownbutton bottom" on-tap="_goto" value="contact">Contact</paper-button>
                </paper-listbox>

              </paper-menu-button> -->

              <paper-button class="socialbutton purple" on-tap="_goto" value="projects">
                <fa-icon icon-prefix="fas" icon-name="fa-code" class="icon"></fa-icon>
              </paper-button>
              <paper-button class="socialbutton green" on-tap="_goto" value="resume">
                <fa-icon icon-prefix="fas" icon-name="fa-file" class="icon"></fa-icon>
              </paper-button>
              <paper-button class="socialbutton red" on-tap="_goto" value="contact">
                <fa-icon icon-prefix="fas" icon-name="fa-comments" class="icon"></fa-icon>
              </paper-button>


            </template>

          </div>

        </div>

      </div>
      
    `;
  }
  static get properties() {
    return {
      mobile:{
        notfiy: true
      },
      expanded:{
        notfiy: true
      }
    };
  }

  ready(){
    super.ready();
    this._addScrollListener();
    this._addSubscribers();
    this.set("expanded", true);
    // this.set("dropdownexpanded", false);

    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    w = w < 760 ? true : false;
    if(w){
      this.set("expanded", false);
    }
  }

  _addSubscribers(){
    var self = this;
  }


  _addScrollListener(){
    var self = this;
    
    self._resizeWindowFunction();
    window.onresize = function() {self._resizeWindowFunction()};

    self._scrollFunction()
    window.onscroll = function() {self._scrollFunction()};
  }

  _resizeWindowFunction(){
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    w = w < 760 ? true : false;
    this.set("mobile", w);
    if(w){
      this.set("expanded", false);
    }
  }

  _scrollFunction(){
    var self = this;
    
    if(this.mobile){
      return;
    }

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      self.set("expanded", false);
    }else {
      self.set("expanded", true);
    }
  }

  _menuClicked(){
    $.publish("_closeModal");
    // if(this.dropdownexpanded){
    //   this.set("dropdownexpanded", false);
    // }else{
    //   this.set("dropdownexpanded", true);
    // }
  }

  _gohome(){
    $.publish("_goto", "carousel");
    $.publish("_closeModal");
  }

  _goto(e){
    var val = e.target.getAttribute("value");
    $.publish("_goto", val);
    $.publish("_closeModal");
  }

}

window.customElements.define('jp-nav', JpNav);
