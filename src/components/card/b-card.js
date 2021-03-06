import { LitElement, html } from '@polymer/lit-element';
import { css } from 'lit-css';
import '../../variables/b-color.css.js';
import '../../variables/b-shadow.css.js';
import cardCss from './b-card.css.js';

class Card extends LitElement {
  static get style() {
    return css`
      ${cardCss}
    `;
  }

  render() {
    return html`
      <style>
        ${this.constructor.style}
      </style>
      <div class="header">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="icon">
          <slot name="icon"></slot>
        </div>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    `;
  }
}

customElements.define('b-card', Card);
