const ttsTargetTemplateString = `
<style>
#text-content { display: none; }
</style>
<div id="text-content">
<slot name="text-content"></slot>
</div>
<span>
<slot></slot>
</span>
`;

class TTSTargetElement extends HTMLElement {
    constructor() {
        super();

        this.template = document.createElement('template');
        this.template.innerHTML = ttsTargetTemplateString;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.append(
            this.template.content.cloneNode(true)
        );

        // Bound methods
        this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback(){
        if(!this.isConnected){
            return;
        }
        this.span = this.shadowRoot.querySelector('span');
        this.addEventListener('click', this.handleClick);
        this.textSlot = this.shadowRoot.querySelector('slot[name="text-content"]');
    }

    disconnectedCallback(){
        this.removeEventListener('click', this.handleClick);
    }

    handleClick(){
        const target = document.querySelector(
            this.getAttribute('target')
        );

        if(!target){
            return;
        }
        
        if(!this.classList.contains('active')){
            // Clear any existing targets
            Array.from(document.querySelectorAll('tts-target.active')).forEach(el => {
                el.classList.remove('active');
            });
            
            const slottedElements = this.textSlot.assignedNodes().map(el => {
                return el.cloneNode(true);
            });
            target.innerHTML = "";
            target.append(...slottedElements);
        } else {
            target.innerHTML = "";
        }

        this.span.classList.toggle('active');
        this.classList.toggle('active');
    }
};

window.customElements.define('tts-target', TTSTargetElement);
