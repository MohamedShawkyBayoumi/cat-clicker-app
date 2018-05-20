
class Cat {
	constructor(catname){
		this.catname= catname;
		this.counter = 0;
		this.img = `<img class="cat-photo" src="${this.catname}.jpg">`;
		this.draw();
		
	}

	draw(){
		let catDivInit = document.querySelector('.cat-div-init');
		catDivInit.innerHTML += `<div class="cat ${this.catname}"><h3>${this.catname}</h3> ${this.img}</div>`;
		this.click();
	}

	click(){

		let cats = document.querySelectorAll('.cat');
		let catCounter = document.querySelector('.cat-counter');
		catCounter.innerHTML = `<h2>Counter is ${this.counter}</h2>`;
		


		cats.forEach(cat => {
			cat.addEventListener('click', () => {
			this.counter++;
			catCounter.innerHTML = `<h2>Counter is ${this.counter}</h2>`;
			});
		});

	}



}

new Cat('Ketty');
new Cat('Bosy');
