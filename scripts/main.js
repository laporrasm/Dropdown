class Dropdown {
	constructor(element) {
		this.element = document.querySelector(element);
		this.list = this.element.querySelector("ul");
		this.status = false;

		this.element.addEventListener("click", () => {
			this.status ? this.hideDropdown() : this.showDropdown();
		});

		this.element.addEventListener("focusout", () => {
			this.hideDropdown();
		});
	}

	showDropdown() {
		this.status = true;
		this.list.classList.add("is-active");
	}

	hideDropdown() {
		this.status = false;
		this.list.classList.remove("is-active");
	}
}

let dropdown1 = new Dropdown(".dropdown");
let dropdown2 = new Dropdown(".dropdown2");
let dropdown3 = new Dropdown(".dropdown3");
