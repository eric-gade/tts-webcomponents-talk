const navTemplateString = /*html*/ `
  <style>
    ::slotted(tts-slide) {
      transform: scale(0.1);
      margin-right: 40px;
      position: relative;
    }
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: 20px;
      padding-left: 10px;
      padding-right: 10px;
      position: absolute;
      width: 100%;
      height: 16vh;
      bottom: 0%;
      transform: translateY(100%);
      transition: transform 0.1s linear;
      z-index: 10;
backdrop-filter: blur(10px);
background-color: rgba(255, 255, 255, 0.3);
    }

    :host([hide]){
        transform: translateY(0);
        transition: transform 0.1s linear;
    }

    button.tab {
      position: absolute;
      right: 60px;
      bottom: 100%;
      backdrop-filter: blur(10px);
background-color: rgba(255, 255, 255, 0.3);
      outline: none;
      border: none;
   }
  </style>
  <button class="tab">^^^</button>
  <slot></slot>
`;

class TTSNavigator extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement("template");
    this.template.innerHTML = navTemplateString;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(this.template.content.cloneNode(true));

    // Bound methods
      this.handleWindowResize = this.handleWindowResize.bind(this);
      this.handleTabClick = this.handleTabClick.bind(this);
  }

  connectedCallback() {
    if (this.isConnected) {
        window.addEventListener("resize", this.handleWindowResize);
        this.shadowRoot.querySelector('button.tab').addEventListener('click', this.handleTabClick);
    }
  }

  disconnectedCallback() {
      this.removeEventListener("resize", this.handleWindowResize);
      this.shadowRoot.querySelector('button.tab').removeEventListener('click', this.handleTabClick);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "for" && oldVal !== newVal) {
      console.log(`Name: ${name}, old: ${oldVal}, new: ${newVal}`);
      const presenter = document.querySelector(newVal);
      if (presenter) {
        this.addCardsFromPresentation(presenter);
      }
    }
  }

  handleWindowResize() {
    Array.from(this.querySelectorAll(".nav-scaled")).forEach((element) => {
      element.style.width = `${window.innerWidth}px`;
      element.style.height = `${window.innerHeight}px`;
    });
  }

    handleTabClick(event){
        if(this.hasAttribute('hide')){
            event.target.innerHTML = "^^^";
            this.removeAttribute('hide');
        } else {
            event.target.innerHTML = "...";
            this.setAttribute('hide', true);
        }
    }

  addCardsFromPresentation(aTTSPresenterElement) {
    console.log("adding cards from parent...");
    const children = Array.from(aTTSPresenterElement.children).map(
        (childElement) => {
            const scaleFactor = 0.1;
            const wrapperElement = document.createElement('div');
            wrapperElement.style.position = "relative";
            wrapperElement.style.display = "block";
            wrapperElement.style.width = `${Math.ceil(scaleFactor * window.innerWidth)}px`;
            wrapperElement.style.height = `${Math.ceil(scaleFactor * window.innerHeight)}px`;
            wrapperElement.style.marginRight = "24px";
            
            const clonedElement = childElement.cloneNode(true);
            clonedElement.id = `${clonedElement.id}-clone`;
        clonedElement.classList.add("nav-scaled");
        clonedElement.style.height = `${window.innerHeight}px`;
            clonedElement.style.width = `${window.innerWidth}px`;
            clonedElement.style.transform = `scale(${scaleFactor})`;
            clonedElement.style.transformOrigin = `top left`;
            clonedElement.style.position = "absolute";
        if (clonedElement.getAttribute("slot") === "current") {
          clonedElement.removeAttribute("slot");
          clonedElement.setAttribute("data-current", "");
        }
        const computed = window.getComputedStyle(childElement);
        let display = computed.getPropertyValue("display");
        if (!display || display === "none") {
          display = "block";
        }
            clonedElement.style.display = display;
            wrapperElement.append(clonedElement);
        return wrapperElement;
      }
    );
    this.innerHTML = "";
    this.append(...children);
  }

  static get observedAttributes() {
    return ["for"];
  }
}

/* const navCardTemplate = html`
 *     <style>
 *      :host  {
 *          display: block;
 *          position: relative;
 *          overflow: hidden;
 *      }
 *     </style>
 *     <slot></slot>
 * `;
 * 
 * class NavigatorCard extends HTMLElement {
 *   constructor(){
 *       super();
 *       this.template = document.createElement('template');
 *       this.template.innerHTML = navCardTemplate;
 *       this.attachShadow({mode: 'open'});
 *       this.shadowRoot.append(
 *           this.template.content.cloneNode(true)
 *       );
 *   }
 * } */

window.customElements.define("tts-navigator", TTSNavigator);
