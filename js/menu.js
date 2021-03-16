// AOS animation initialization

AOS.init();


let addbtn = document.getElementById('add');
let cart = document.getElementById('cart');
let price = document.querySelector('.C-price span');
let orderNo = 0;
cart.innerHTML = orderNo;



function adding(){
 orderNo++;
 console.log(addbtn.innerHTML);
 console.log(cart.innerHTML);
 let num = orderNo.toString();
 // console.log(`${num},${typeof(num)}`)
 cart.innerHTML = num;
}

// order form
	
	let form1 = document.querySelector('#form1');
	let form2 = document.querySelector('#form2');
	let btn1 = document.querySelector('.btn1');
	let btn2 = document.querySelector('.btn2');
	let btn3 = document.querySelector('.btn3');
	let order_container = document.querySelector('.order-container');
	let ico = document.querySelector('.order-icon');
	let x = document.querySelector('.x');
	let progressing1 = document.querySelector('.ichi .progressing');
	let progressing2 = document.querySelector('.ni .progressing');
	let progressing3 = document.querySelector('.san .progressing');
	let pop = document.querySelector('.cart');
	// let shopping = docuemnt.querySelector('.fa-shopping-cart');
	// let address = docuemnt.querySelector('');

	pop.addEventListener('click', function(){

		if(cart.innerHTML != "0"){
			order_container.style.display = `block`;
			order_container.style.opacity = 1;
		}else{
			alert("Please choose items first..");
		}
		
	})

	ico.addEventListener('click', function(){

		if(cart.innerHTML != "0"){
			order_container.style.display = `block`;
			order_container.style.opacity = 1;
		}else{
			alert("Please choose items first..");
		}
		
	})
	

	btn1.addEventListener('click',function(){
		
		form1.style.display = "none";
		form1.style.opacity = 0;
		form2.style.opacity = 1;
		form2.style.display = `block`;
		// address.style.animation = `anime1 .5s forwards`;
		document.querySelector('.progress-col:nth-child(2)').style.backgroundColor=`var(--green2)`;
		progressing1.style.animation = `anime1 .5s forwards`;
	})	

	btn2.addEventListener('click',function(){
		
		form2.style.display = "none";
		form2.style.opacity = 0;
		form3.style.opacity = 1;
		form3.style.display = `block`;
		// address.style.animation = `anime1 .5s forwards`;
		document.querySelector('.progress-col:nth-child(3)').style.backgroundColor=`var(--green2)`;
		progressing2.style.animation = `anime1 .5s forwards`;
	})

	btn3.addEventListener('click',function(){
		order_container.style.display = `none`;
		document.querySelector('.progress-col:nth-child(3)').style.backgroundColor=`var(--primary-light)`;
		document.querySelector('.progress-col:nth-child(2)').style.backgroundColor=`var(--primary-light)`;
		form3.style.display = "none";
		form3.style.opacity = 0;
		form1.style.opacity = 1;
		form1.style.display = `block`;
		progressing3.style.animation = `anime1 .5s forwards`;

		progressing1.style.animation = `anime2 .5s forwards`;
		progressing2.style.animation = `anime2 .5s forwards`;
		progressing3.style.animation = `anime2 .5s forwards`;
	})

	x.addEventListener('click', function(){
		
		order_container.style.display = `none`;
		progressing1.style.animation = `anime2 .5s forwards`;
		progressing2.style.animation = `anime2 .5s forwards`;
		progressing3.style.animation = `anime2 .5s forwards`;
		form2.style.display = "none";
		form2.style.opacity = 0;
		form3.style.display = "none";
		form3.style.opacity = 0;
		form1.style.display = "block";
		form1.style.opacity = 1;
		document.querySelector('.progress-col:nth-child(3)').style.backgroundColor=`var(--primary-light)`;
		document.querySelector('.progress-col:nth-child(2)').style.backgroundColor=`var(--primary-light)`;
	})