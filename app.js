
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

		

/*
		cats.forEach(cat => {
		});
*/
	}



}

//new Cat('Ketty');
//new Cat('Bosy');
//new Cat('Liza-Rene');
//new Cat('Nini');
//new Cat('Losy');

const allCats = [
	new Cat('Ketty'),
	new Cat('Bosy'),
	new Cat('Liza-Rene'),
	new Cat('Nini'),
	new Cat('Losy')
];




for(let cat of allCats){

	let cats = document.querySelectorAll('.cat');
	let catCounter = document.querySelector('.cat-counter');
	let display = document.querySelector('.display');
	catCounter.innerHTML = `<h2>Click on photos</h2>`;

	
	cat.addEventListener('click', () => {
		cat.counter++;
		catCounter.innerHTML = `<h2>Counter is ${cat.counter}</h2>`;
		display.innerHTML = cat.innerHTML;
	
	});


}