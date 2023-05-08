const haloTemplateString = `
<style>
:host {
    --halo-padding: 4px;
    --halo-border-color-start: rgba(150, 150, 150, 1.0);
    --halo-border-color-end: rgba(210, 210, 210, 1.0);
    display: block;
    position: absolute;
    width: calc(100% + (var(--halo-padding) * 2));
    height: calc(100% + (var(--halo-padding) * 2));
    top: calc(-1 * var(--halo-padding));
    left: calc(-1 * var(--halo-padding));
    border: 1px solid var(--halo-border-color-start);
    z-index: 1000;
}
</style>
`;

class Halo extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = haloTemplateString;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.append(
            this.template.content.cloneNode(true)
        );

        // Let's cheat! Store the delta values
        // on the element itself
        this.deltaX = 0;
        this.deltaY = 0;

        // Bound component methods
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    connectedCallback() {
        this.parentElement.addEventListener('mousedown', this.handleMouseDown);
    }

    disconnectedCallback(){
        this.parentElement.removeEventListener('mousedown', this.handleMouseDown);
    }

    handleMouseDown(event){
        document.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseUp(event){
        event.stopPropagation();
        event.preventDefault();
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove(event){
        const nextX = this.deltaX + event.movementX;
        const nextY = this.deltaY + event.movementY;
        this.parentElement.style.tranform = `translate(${nextX}px, ${nextY}px)`;
    }
}

window.customElements.define('tts-halo', Halo);
