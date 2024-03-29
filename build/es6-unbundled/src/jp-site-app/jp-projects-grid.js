define(["../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class JpProjectsGrid extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          
        }

        .grid {
          list-style: none;
          width: 75vw;
        }

        @media screen and (max-width: 580px) {
          .grid {
            list-style: none;
            width: 75vw;
            position: absolute;
            top: 2.5vh;
            left: 12.5vw;
            margin: 0 !important;
            padding: 0 !important;
          }
        }

        .grid li {
          position: relative;
          float: left;
          overflow: hidden;
          margin: .25vw;
          width: calc(33.34% - 2*(1.75vw / 3)); /* Fallback */
          width: -webkit-calc((100% / 3) - 2*(1.75vw / 3));
          width: calc((100% / 3) - 2*(1.75vw / 3));
        }


        paper-button.gridbutton{
          width: 100%;
          cursor: pointer;
          margin: 0;
          padding: 0;
          color: transparent;
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
          border: 3px solid var(--jp-default-white);
          border-radius: 0;
          
          text-align: center;
          display: table-cell;
          vertical-align: middle;
        }

        paper-button.gridbutton:hover{
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
          border: 3px solid var(--jp-black);
          color: var(--jp-black);
        }

        paper-button.blue:hover{
          color: var(--jp-light-blue);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        paper-button.darkblue:hover{
          color: var(--jp-dark-blue);
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

        paper-button.red:hover{
          color: var(--jp-red);
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

        paper-button.gridbutton:hover img{
          visibility: hidden;
        }

        paper-button.gridbutton img {
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: cover;
          width: 20vw;
        }

        .griddiv{
          text-transform: uppercase;
          font-size: 1.25em;
          font-family: IBMBold;
          text-align: center;
          
          clear: both;
          display: flex;
          justify-content: center;
          align-items: center;
          
          position: absolute;
          top: 0;
          height: 100%;
          width: 80%;
          left: 10%;
        }

         @media screen and (max-width: 1190px) {
            .grid li {
              width: calc(33.34% - 2*(1.75vw / 3)); /* Fallback */
              width: -webkit-calc((100% / 3) - 2*(1.75vw / 3));
              width: calc((100% / 3) - 2*(1.75vw / 3));
            }
          }

          @media screen and (max-width: 945px) {
            .grid li {
              width: calc(33.34% - 2*(1.75vw / 3)); /* Fallback */
              width: -webkit-calc((100% / 3) - 2*(1.75vw / 3));
              width: calc((100% / 3) - 2*(1.75vw / 3));
            }
          }

          @media screen and (max-width: 660px) {
            .grid li {
              width: calc(50% - 2*(1.5vw / 2)); /* Fallback */
              width: -webkit-calc((100% / 2) - 2*(1.5vw / 2));
              width: calc((100% / 2) - 2*(1.5vw / 2));
            }
          }

          
          @media screen and (max-width: 400px) {
            .grid li {
              width: calc(100% - 2.5vw);
            }
          }

          @media screen and (max-width: 580px) {
            paper-button.gridbutton{
              display: block;
            }
            paper-button.gridbutton img{
              height: 25vh;
              width: 25vh;
            }
          }



      </style>  

      <ul class="grid">

        <li>
          <paper-button 
          class="gridbutton blue"
          on-tap="_openModalSim">
            <img src="../css/images/animat-compass-color.gif" />
            <div class="griddiv">
              <div class="buttonlabel">
                AI Driven Company Discovery (2019)
              </div>
            </div>
          </paper-button>
        </li>

        <li>
          <paper-button
          class="gridbutton green"
          on-tap="_openModalCo"
          value="xx">
            <img src="../css/images/animat-rocket-color.gif" />
            <div class="griddiv">
              AI Decision Support Co-Pilot (2018)
            </div>
          </paper-button>
        </li>


        <li>
         <paper-button
          class="gridbutton red"
          on-tap="_openModalQa"
          value="qa">
            <img src="../css/images/watson2.gif" />
            <div class="griddiv">
              Natural Language Q&A System (2017)
            </div>
          </paper-button>
        </li>

        <li>
         <paper-button
          class="gridbutton blue"
          on-tap="_openModalPnCo"
          value="qa">
            <img src="../css/images/cobeats.gif" />
            <div class="griddiv">
              Music Sync Collab. App (2015)
            </div>
          </paper-button>
        </li>

        <li>
         <paper-button
          class="gridbutton green"
          on-tap="_openModalLm"
          value="lm">
            <img src="../css/images/leap.gif" />
            <div class="griddiv">
              IoT Motion Controlled Servos (2015)
            </div>
          </paper-button>
        </li>
        
      </ul>

      
    `}static get properties(){return{}}_openModalQa(event){$.publish("openModal");$.publish("_openModalQa")}_openModalSim(event){$.publish("openModal");$.publish("_openModalSim")}_openModalCo(event){$.publish("openModal");$.publish("_openModalCo")}_openModalPnCo(event){$.publish("openModal");$.publish("_openModalPnCo")}_openModalLm(event){$.publish("openModal");$.publish("_openModalLm")}}window.customElements.define("jp-projects-grid",JpProjectsGrid)});