class Banner2 extends HTMLElement {
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
        
        <section>
        <h1>Star Wars Outlaws</h1>
        <p>Obtén un acceso anticipado de 3 días con Ubisoft+ Premium o con la Edición dorada.</p>
    </section>
    `;
	}
}

customElements.define('banner2-component', Banner2);
export default Banner2;
