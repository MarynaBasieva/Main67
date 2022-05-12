let textImg1 = document.querySelector ('.text_img_1')
let textImg2 = document.querySelector ('.text_img_2')
let textImg3 = document.querySelector ('.text_img_3')

let img = document.querySelector('.img_1');
	img.addEventListener('click', function(event){
		console.log(event.target.title);
        textImg1.innerHTML = (event.target.title);
	});

let img_2 = document.querySelector('.img_2');
	img_2.addEventListener('click', function(event){
		console.log(event.target.title);
        textImg2.innerHTML = (event.target.title);
	});

let img_3 = document.querySelector('.img_3');
	img_3.addEventListener('click', function(event){
		console.log(event.target.title);
        textImg3.innerHTML = (event.target.title);
	});


img.addEventListener('click', ()=>{

  if(textImg1.classList.contains('wav')){
    textImg1.classList.add('active')
    textImg1.classList.remove('wav')
  }else{
    textImg1.classList.add('wav')
    textImg1.classList.remove('active')
  }
});

img_2.addEventListener('click', ()=>{

	if(textImg2.classList.contains('wav')){
	  textImg2.classList.add('active')
	  textImg2.classList.remove('wav')
	}else{
	  textImg2.classList.add('wav')
	  textImg2.classList.remove('active')
	}
  });

  img_3.addEventListener('click', ()=>{

	if(textImg3.classList.contains('wav')){
	  textImg3.classList.add('active')
	  textImg3.classList.remove('wav')
	}else{
	  textImg3.classList.add('wav')
	  textImg3.classList.remove('active')
	}
  });