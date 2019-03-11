import{html,PolymerElement}from"../../node_modules/@polymer/polymer/polymer-element.js";class JpProjectsGrid extends PolymerElement{static get template(){return html`
      <style>
        :host {
          display: inline-block;
          width: 80vw;
          height: 88vh;
          position: fixed;
          left: 10%;
          overflow-y: scroll;
          margin-top: 2vh;
        }

        .grid {
          padding: 1vw;
          list-style: none;
          position: relative;
          width: 100%;
          margin-top: 0em !important;
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
          display: block;
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
        }

        paper-button.gridbutton:hover{
          color: var(--jp-black);
          -webkit-transition: all 350ms ease;
          -moz-transition: all 350ms ease;
          -ms-transition: all 350ms ease;
          -o-transition: all 350ms ease;
          transition: all 350ms ease;
        }

        paper-button.gridbutton img {
          max-width: 100%;
        }

        .griddiv{
          width: 100%;
          text-transform: uppercase;
          font-size: 1.25em;
          font-family: IBMBold;
          position: absolute;
          top: 45%;
          text-align: center;
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


      </style>  

      <ul class="grid">

        <li>
          <paper-button 
          class="gridbutton"
          on-tap="_openModalSim">
            <img src="../css/images/animat-compass-color.gif" />
            <div class="griddiv">
              AI Driven Company Discovery
            </div>
          </paper-button>
        </li>

        <li>
         <paper-button
          class="gridbutton"
          on-tap="_openModalQa"
          value="qa">
            <img src="../css/images/watson2.gif" />
            <div class="griddiv">
              Natural Language Q&A System
            </div>
          </paper-button>
        </li>
        
        <li>
          <paper-button
          class="gridbutton"
          on-tap="_openModalCo"
          value="xx">
            <img src="../css/images/animat-rocket-color.gif" />
            <div class="griddiv">
              AI Decision Support Co-Pilot
            </div>
          </paper-button>
        </li>
        <li>
          <paper-button 
          class="gridbutton">
            <img src="../css/images/jp1.JPG" />
            <div class="griddiv">
              Felis catus
            </div>
          </paper-button>
        </li>
        <li>
          <paper-button
          class="gridbutton">
            <img src="../css/images/jp1.JPG" />
            <div class="griddiv">
              Felis catus
            </div>
          </paper-button>
        </li>
        <li>
          <paper-button
          class="gridbutton">
            <img src="../css/images/jp2.JPG" />
            <div class="griddiv">
              Felis catus
            </div>
          </paper-button>
        </li>
      </ul>

      
    `}static get properties(){return{}}_openModalQa(event){$.publish("_openModalQa")}_openModalSim(event){$.publish("_openModalSim")}_openModalCo(event){$.publish("_openModalCo")}}window.customElements.define("jp-projects-grid",JpProjectsGrid);