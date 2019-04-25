import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class JpResume extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          
        }

        #canvas{
          height: 95vh;
        }

        .pdf{
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

      <object class="pdf" data="css/images/JustinPlatzResume2018.pdf" type="application/pdf"/>
        <iframe class="pdf" src="https://drive.google.com/file/d/1Sa49KoTryUjGStI7QB_Uzc1pliRo0dLv/preview"></iframe>
      </object>



    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'jp-resume'
      }
    };
  }

   ready() {
      super.ready();
      // this._loadPDF();
    }

    connectedCallback() {
      super.connectedCallback();
      console.log(this.name + " connected");
    }

    _addSubscribers(){
      var self = this;
    }

    _loadPDF(){
      var canvas = this.$.canvas;
      var url = 'css/images/JustinPlatzResume2018.pdf';

      // Loaded via <script> tag, create shortcut to access PDF.js exports.
      var pdfjsLib = window['pdfjs-dist/build/pdf'];

      // The workerSrc property shall be specified.
      pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

      // Asynchronous download of PDF
      var loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then(function(pdf) {
        console.log('PDF loaded');
        
        // Fetch the first page
        var pageNumber = 1;
        pdf.getPage(pageNumber).then(function(page) {
          console.log('Page loaded');
          
          var scale = 1.5;
          var viewport = page.getViewport({scale: scale});

          // Prepare canvas using PDF page dimensions
          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          var renderTask = page.render(renderContext);
          renderTask.promise.then(function () {
            console.log('Page rendered');
          });
        });
      }, function (reason) {
        // PDF loading error
        console.error(reason);
      });
    }


}

window.customElements.define('jp-resume', JpResume);
