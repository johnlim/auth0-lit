// Import the LitElement base class and html helper function
import {LitElement, html} from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <style>
        .auth0-lock-overlay {
          display: flex;
          background: radial-gradient(#40404b, #111118) rgba(34,34,40, 0.94);
          background-color: rgba(34,34,40, 0.94);
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 2;
          opacity: 0.9;
          -webkit-transition: opacity .2s ease-in .4s;
          transition: opacity .2s ease-in .4s; 
          font-family: Avenir Next, Avenir, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
        } 
        
      .auth0-lock-badge-bottom {
        position: absolute;
        bottom: 15px;
        left: 15px;
        z-index: -1;
        text-align: center;
        padding: 6px 10px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        background: rgba(255,255,255,0.1);
      }
      .auth0-lock-badge-bottom .auth0-lock-badge {
        display: inline-block;
        color: rgba(255,255,255,0.7);
        font-size: 14px;
        text-decoration: none;
      }
      .auth0-lock-badge-bottom .auth0-lock-badge svg {
        vertical-align: middle;
        margin: 0 4px;
      }
      .auth0-lock-badge-bottom .auth0-lock-badge:hover svg g#LogoBadge {
        fill: #eb5424;
        fill-opacity: 1;
      }
      
      .auth0-lock-center {
        display: flex; 
        background: red;
        justify-content: center;
        align-items: center;
        width: 300px;
        max-height: 100vh;
        border-radius: 5px;
      }
      img {
        max-height: 100%;
        max-width: 100%;
      } 
      .auth0-lock-header-welcome {
        display: flex;
        width: 100px;
        height: 100px;
      }
      .auth0-lock-header-logo {
      }
      </style>
      
      <div class="auth0-lock-overlay" style="justify-content: center; align-items: center">
        <div class="auth0-lock-center">
           <p>A paragraph</p>
          <div class="auth0-lock-header-welcome"><img alt="" class="auth0-lock-header-logo"
                                                      src="//cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/badge.png">
            <div class="auth0-lock-name" title="Auth0">Auth0</div>
          </div> 
        </div> 
      
        <span class="auth0-lock-badge-bottom">
          <a href="https://auth0.com/?utm_source=lock&amp;utm_campaign=badge&amp;utm_medium=widget" target="_blank" class="auth0-lock-badge">
            <!-- react-text: 37 -->Protected with <!-- /react-text -->
            <svg focusable="false" width="58px" height="21px" viewBox="0 0 462 168">
               <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="logo-grey-horizontal">
                    <g id="Group">
                      <g id="LogoText" transform="translate(188.000000, 41.500000)" fill="#D0D2D3">
                        <path d="M246.517,0.11 C238.439,0.11 231.607,3.916 226.759,11.115 C221.94,18.271 219.393,28.26 219.393,40 C219.393,51.74 221.94,61.729 226.759,68.884 C231.607,76.084 238.439,79.889 246.517,79.889 C254.595,79.889 261.427,76.084 266.275,68.884 C271.093,61.729 273.64,51.74 273.64,40 C273.64,28.26 271.093,18.271 266.275,11.115 C261.427,3.916 254.595,0.11 246.517,0.11 L246.517,0.11 Z M246.517,70.005 C242.655,70.005 239.604,67.82 237.187,63.324 C234.268,57.893 232.66,49.61 232.66,40 C232.66,30.39 234.268,22.106 237.187,16.676 C239.604,12.18 242.655,9.994 246.517,9.994 C250.378,9.994 253.43,12.18 255.847,16.676 C258.766,22.106 260.373,30.389 260.373,40 C260.373,49.611 258.766,57.895 255.847,63.324 C253.43,67.82 250.378,70.005 246.517,70.005 L246.517,70.005 Z M71.45,29.172 L71.45,63.484 C71.45,72.53 78.81,79.889 87.856,79.889 C95.746,79.889 101.707,75.975 103.902,74.291 C104.024,74.197 104.184,74.169 104.331,74.216 C104.478,74.263 104.592,74.379 104.637,74.527 L105.961,78.86 L115.737,78.86 L115.737,29.172 L103.175,29.172 L103.175,66.326 C103.175,66.501 103.076,66.662 102.921,66.743 C100.559,67.961 95.899,70.006 91.231,70.006 C87.252,70.006 84.012,66.768 84.012,62.787 L84.012,29.172 L71.45,29.172 L71.45,29.172 Z M197.237,78.859 L209.8,78.859 L209.8,44.547 C209.8,35.501 202.44,28.141 193.394,28.141 C186.735,28.141 181.393,31.004 178.802,32.71 C178.657,32.805 178.473,32.813 178.322,32.731 C178.171,32.649 178.075,32.491 178.075,32.318 L178.075,1.141 L165.513,1.141 L165.513,78.859 L178.075,78.859 L178.075,41.704 C178.075,41.529 178.174,41.368 178.33,41.288 C180.691,40.069 185.352,38.025 190.019,38.025 C191.947,38.025 193.76,38.776 195.123,40.139 C196.486,41.502 197.236,43.316 197.236,45.243 L197.236,78.859 L197.237,78.859 Z M124.792,39.055 L132.438,39.055 C132.697,39.055 132.907,39.265 132.907,39.524 L132.907,66.858 C132.907,74.043 138.753,79.888 145.938,79.888 C148.543,79.888 151.113,79.512 153.585,78.77 L153.585,69.796 C152.143,69.923 150.485,70.005 149.313,70.005 C147.193,70.005 145.469,68.28 145.469,66.161 L145.469,39.523 C145.469,39.264 145.679,39.054 145.938,39.054 L153.585,39.054 L153.585,29.171 L145.938,29.171 C145.679,29.171 145.469,28.961 145.469,28.702 L145.469,12.295 L132.907,12.295 L132.907,28.702 C132.907,28.961 132.697,29.171 132.438,29.171 L124.792,29.171 L124.792,39.055 L124.792,39.055 Z M51.361,78.859 L64.429,78.859 L44.555,9.55 C42.962,3.992 37.811,0.11 32.029,0.11 C26.247,0.11 21.096,3.992 19.502,9.55 L-0.372,78.859 L12.697,78.859 L18.449,58.798 C18.507,58.597 18.691,58.459 18.9,58.459 L45.158,58.459 C45.367,58.459 45.552,58.597 45.609,58.798 L51.361,78.859 L51.361,78.859 Z M42.056,48.576 L22.004,48.576 C21.857,48.576 21.718,48.507 21.629,48.388 C21.541,48.272 21.513,48.119 21.553,47.978 L31.579,13.012 C31.637,12.811 31.821,12.673 32.03,12.673 C32.239,12.673 32.423,12.811 32.48,13.012 L42.507,47.978 C42.547,48.12 42.519,48.272 42.43,48.388 C42.342,48.507 42.203,48.576 42.056,48.576 L42.056,48.576 Z" id="Shape"></path></g><g id="LogoBadge" fill-opacity="0.4" fill="#FFFFFF"><path d="M119.555,135.861 L102.705,83.997 L146.813,51.952 L92.291,51.952 L75.44,0.09 L75.435,0.076 L129.965,0.076 L146.82,51.947 L146.821,51.946 L146.835,51.938 C156.623,82.03 146.542,116.256 119.555,135.861 L119.555,135.861 Z M31.321,135.861 L31.307,135.871 L75.426,167.924 L119.555,135.862 L75.44,103.808 L31.321,135.861 L31.321,135.861 Z M4.052,51.939 L4.052,51.939 C-6.252,83.66 5.709,117.272 31.312,135.867 L31.316,135.851 L48.168,83.99 L4.07,51.951 L58.579,51.951 L75.431,0.089 L75.435,0.075 L20.902,0.075 L4.052,51.939 L4.052,51.939 Z" id="Shape">
                        </path>
                     </g>
                  </g>
               </g>
              </g>
            </svg>
          </a>
        </span>
      </div>
    `;
  }
}

// Register the new element with the browser.
customElements.define('my-element', MyElement);

