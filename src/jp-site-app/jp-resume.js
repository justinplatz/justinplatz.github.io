define(["../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class JpResume extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          
        }

        #canvas{
          height: 95vh;
        }

        embed.pdf{
          width: 80vw;
          height: 80vh;
        }

        @media screen and (max-width: 580px) {
          #canvas{
            height: auto;
            max-width: 100vw;
          }
        }
      </style>

      <!-- <canvas id="canvas"></canvas> -->

      <embed class="pdf" src="css/images/JustinPlatzResume2018.pdf" type="application/pdf" width="100%" height="600px" />

   


    `}static get properties(){return{name:{type:String,value:"jp-resume"}}}ready(){super.ready();this._loadPDF()}connectedCallback(){super.connectedCallback();console.log(this.name+" connected")}_addSubscribers(){var self=this}_loadPDF(){var canvas=this.$.canvas,url="css/images/JustinPlatzResume2018.pdf",pdfjsLib=window["pdfjs-dist/build/pdf"];pdfjsLib.GlobalWorkerOptions.workerSrc="//mozilla.github.io/pdf.js/build/pdf.worker.js";var loadingTask=pdfjsLib.getDocument(url);loadingTask.promise.then(function(pdf){console.log("PDF loaded");var pageNumber=1;pdf.getPage(pageNumber).then(function(page){console.log("Page loaded");var scale=1.5,viewport=page.getViewport({scale:scale}),context=canvas.getContext("2d");canvas.height=viewport.height;canvas.width=viewport.width;var renderContext={canvasContext:context,viewport:viewport},renderTask=page.render(renderContext);renderTask.promise.then(function(){console.log("Page rendered")})})},function(reason){console.error(reason)})}}window.customElements.define("jp-resume",JpResume)});