class UserComment extends HTMLElement {
  constructor() {
    super();
  }

  // Observe these attributes for changes
  static get observedAttributes() {
    return ['author', 'number', 'text', 'date'];
  }

  connectedCallback() {
    const author = this.getAttribute('author') || 'Anonymous';
    const number = this.getAttribute('number') || '';
    const text = this.getAttribute('text') || '';
    const date = this.getAttribute('date') || '';

    this.innerHTML = `
      <h4>${author} <span class="commentID">${number}</span></h4>
      <p>${text}</p>
      <div class="commentDate">${date}</div>
    `;
  }
}

// Register the custom element
customElements.define('user-comment', UserComment);