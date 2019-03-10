import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@fabricelements/skeleton-carousel/skeleton-carousel.js";
/**
 * @customElement
 * @polymer
 */

class JpHome extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          margin-top: calc(10vh + 6px);
          width: auto;
          height: auto;
          clear: both;
        }


        .imagecontainer{
        }

        img.img{
        }

        skeleton-carousel.slider{
          margin-top: 7.5vh;
          margin-left: calc(25vw - 6px);
          width: 50vw;
          height: 50vw;
          display: inline-flex;
        }


        @media screen and (max-width: 580px) {
          skeleton-carousel.slider{
            margin-top: 5vh;
            width: 75vw;
            height: 75vw;
            min-width: 0;
            min-height: 0;
            margin-left: calc(12.5vw - 6px);
          }
          
        }
      </style>

      <div class="imagecontainer">
       <skeleton-carousel 
       class="slider" 
       loop
       auto
       duration="10000"
       disable-swipe
       disable-keys>
        <img 
        class="img"
        data-src="../css/images/jp1.JPG"
        sizing="cover"
        preload
        fade> 
        </img>
        <img
        class="img"
        data-src="../css/images/jp6.JPG"
        sizing="cover"
        preload
        fade> 
        </img>
        </skeleton-carousel>
        <img
        class="img"
        data-src="../css/images/jp3.JPG"
        sizing="cover"
        preload
        fade> 
        </img>
        <img
        class="img"
        data-src="../css/images/jp2.JPG"
        sizing="cover"
        preload
        fade> 
        </img>
        <img
        class="img"
        data-src="../css/images/jp4.JPG"
        sizing="cover"
        preload
        fade> 
        </img>
        
      </div>

     
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'jp-home'
      }
    };
  }

}

window.customElements.define('jp-home', JpHome);