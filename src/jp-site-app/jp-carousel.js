define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@fabricelements/skeleton-carousel/skeleton-carousel.js"],function(_polymerElement,_skeletonCarousel){"use strict";class JpCarousel extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
        
        }


        .imagecontainer{
        }

        img.img{
        }

        skeleton-carousel.slider{
          width: 50vw;
          height: 50vw;
          display: inline-flex;
        }


        @media screen and (max-width: 580px) {
          skeleton-carousel.slider{
            width: 75vw;
            height: 75vw;
            min-width: 0;
            min-height: 0;
          }
          
        }
      </style>

      <div class="imagecontainer">
        <skeleton-carousel 
        class="slider" 
        loop
        auto
        duration="5000"
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
          data-src="../css/images/jp2.JPG"
          sizing="cover"
          preload
          fade> 
          </img>

          <img
          class="img"
          data-src="../css/images/jp3.JPG"
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

          <img
          class="img"
          data-src="../css/images/jp6.JPG"
          sizing="cover"
          preload
          fade> 
          </img>

        </skeleton-carousel>
      </div>

     
    `}static get properties(){return{prop1:{type:String,value:"jp-carousel"}}}}window.customElements.define("jp-carousel",JpCarousel)});