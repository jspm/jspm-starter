import {LitElement, html, css} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {animate} from '@lit-labs/motion';

export class MotionSlide extends LitElement {
  slid = false;

  static properties = {
    slid: { type: Boolean },
  };

  static styles = css`
    ::host {
      --circle-size: 10vw;
    }
    .container {
      border: 1px solid #eee;
      background-color: #efefef;
      border-radius: var(--circle-size);
      width: calc(var(--circle-size) * 2);
      padding: calc(var(--circle-size) / 20);
    }
    .circle {
      position: relative;
      background: steelblue;
      height: var(--circle-size);
      width: var(--circle-size);
      border-radius: 50%;
      margin: 0;
    }
    .slid {
      left: calc(100% - var(--circle-size));
    }
  `;

  render() {
    return html`
      <div class="container" @click=${() => this.slid = !this.slid}>
        <p class="circle ${classMap({slid: this.slid})}" ${animate()}></p>
      </div>
    `;
  }
}

customElements.define('motion-slide', MotionSlide);
