import { LitElement, html } from '@polymer/lit-element';
import { css } from 'lit-css';
import '../../variables/b-color.css.js';
import '../../variables/b-shadow.css.js';
import '../../variables/b-radius.css.js';
import boxCss from './b-box.css.js';

class Box extends LitElement {
  static get style() {
    return css`
      ${boxCss}
    `;
  }

  render() {
    return html`
      <style>
        ${this.constructor.style}
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('b-box', Box);
