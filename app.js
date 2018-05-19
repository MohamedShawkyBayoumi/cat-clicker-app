
class Cat {
	constructor(catname){
		this.catname= catname;
		this.counter = 0;
		this.img = `<img class="cat-photo" src="cat.jpg">`;
		this.draw();
		
	}

	draw(){
		let catDivInit = document.querySelector('.cat-div-init');
		catDivInit.innerHTML += `<h3>${this.catname}</h3> ${this.img}`;
		this.click();
	}

	click(){

		let cat = document.querySelector('.cat-photo');
		let catCounter = document.querySelector('.cat-counter');
		catCounter.innerHTML = `<h2>Counter is ${this.counter}</h2>`;

		cat.addEventListener('click', function(){

		this.counter++;
		catCounter.innerHTML = `<h2>Counter is ${this.counter}</h2>`;
		});

	}
}

new Cat('Ketty');
new Cat('Bosy');