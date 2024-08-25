class buttom extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'alt', 'title', 'description', 'txtbutton'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
    `;
	}
}

customElements.define('buttom-component', buttom);
export default buttom;