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
          display: block;
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
        } 
      </style>
      
      <div class="auth0-lock-overlay"></div>
      <p>A paragraph</p>
    `;
  }
}

// Register the new element with the browser.
customElements.define('my-element', MyElement);

