class BasicCountdown extends HTMLElement {
  constructor() {
    super();
  }

  startCountdown() {
    clearInterval();
    this.displaySeconds();
    this.interval = setInterval(() => {
      if (this.seconds < 1) {
        this.seconds = parseInt(this.getAttribute("seconds"));
        this.displaySeconds();
      } else {
        this.seconds -= 1;
        this.displaySeconds();
      }
    }, 1000);
  }

  clearInterval() {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  }

  displaySeconds() {
    this.innerHTML = `<strong>${this.seconds}</strong>`;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "seconds") {
      this.seconds = parseInt(newVal);
      this.startCountdown();
    }
  }

  static get observedAttributes() {
    return ["seconds"];
  }
}

window.customElements.define("tts-countdown-basic", BasicCountdown);
