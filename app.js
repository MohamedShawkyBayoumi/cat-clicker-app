
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
		catCounter.innerHTML = `Counter is ${this.counter}`;

		cat.addEventListener('click', function(){

		this.counter++;
		catCounter.innerHTML = `Counter is ${this.counter}`;
		});

	}
}

new Cat('Ketty');
new Cat('Bosy');