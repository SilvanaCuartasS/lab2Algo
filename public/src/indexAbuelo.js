import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' }); 
		
	}
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
     <nav-component></nav-component>
	 <banner-component></banner-component>
	 <buttom-component></buttom-component>
	 <banner2-component></banner2-component>
    `;
	}
}

customElements.define('app-container', AppContainer);