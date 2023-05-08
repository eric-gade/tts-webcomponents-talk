const templateString = /*html*/ `
  <style>
    :host {
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .full-frame {
      width: 100vw;
      height: 100vh;
    }
  </style>
  <slot name="current"></slot>
  <slot></slot>
`;

class TTSPresentation extends HTMLElement {
  constructor() {
    super();

    this.template = document.createElement("template");
    this.template.innerHTML = templateString;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    this.setAttribute("tabindex", "-1");
    this.addEventListener("keyup", this.handleKeyUp);
  }

  disconnectedCallback() {
    this.removeEventListener("keyup", this.handleKeyUp);
  }

  handleKeyUp(event) {
    if (event.key === "ArrowRight") {
      this.next();
    } else if (event.key === "ArrowLeft") {
      this.previous();
    }
  }

  toggleFullFrame() {
    this.classList.toggle("full-frame");
  }

  next() {
    const current = this.querySelector('[slot="current"]');
    if (current) {
      let next = current.nextElementSibling || this.firstElementChild;
      current.removeAttribute("slot");
      next.setAttribute("slot", "current");
    }
  }

  previous() {
    const current = this.querySelector('[slot="current"]');
    if (current) {
      let previous = current.previousElementSibling || this.lastElementChild;
      current.removeAttribute("slot");
      previous.setAttribute("slot", "current");
    }
  }

  isFirstCard(element) {}
}

const cardTemplateString = /*html*/ `
  <style>
    :host {
      position: absolute;
      display: block;
      height: 100%;
      width: 100%;
    }

    :host(:not([slot="current"])) {
      display: none;
    }
  </style>
<slot></slot>
`;

class TTSCard extends HTMLElement {
  constructor() {
    super();

    this.template = document.createElement("template");
    this.template.innerHTML = cardTemplateString;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(this.template.content.cloneNode(true));
  }
}

window.customElements.define("tts-presentation", TTSPresentation);
window.customElements.define("tts-slide", TTSCard);
