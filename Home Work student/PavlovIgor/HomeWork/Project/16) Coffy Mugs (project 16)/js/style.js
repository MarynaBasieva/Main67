function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const sidebar = document.querySelector('.sidebar');
  menuToggle.classList.toggle('active');
  sidebar.classList.toggle('active');
};

// ==================================

const list = document.querySelectorAll('.our_requirements_item');
function activeLink(){
  list.forEach((item) => 
  item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

// ===================================

const list_2 = document.querySelectorAll('.furniture_item');
function activeLink2(){
  list_2.forEach((item) => 
  item.classList.remove('active'));
  this.classList.add('active');
}
list_2.forEach((item) =>
item.addEventListener('click', activeLink2));

// ===================================

let block = document.querySelector('.row_2');
let button = document.querySelector('.listings_link_wrapper')

button.addEventListener('click', ()=>{

  if(block.classList.contains('active')){
    block.classList.add('wav')
    block.classList.remove('active')
  }else{
    block.classList.add('active')
    block.classList.remove('wav')
  }
});


// =====================================

let block2 = document.querySelector('.row_3');
let button2 = document.querySelector('.newsroom_link_wrapper')

button2.addEventListener('click', ()=>{

  if(block2.classList.contains('active')){
    block2.classList.add('wav')
    block2.classList.remove('active')
  }else{
    block2.classList.add('active')
    block2.classList.remove('wav')
  }
});

// ==========================================

let brr = document.querySelector('.link_open');

brr.addEventListener('click', ()=>{

  if(brr.classList.contains('close')){
    brr.classList.add('open')
    brr.classList.remove('close')
  }else{
    brr.classList.add('close')
    brr.classList.remove('open')
  }
});

// ==============================================

let brv = document.querySelector('.link_open_2');

brv.addEventListener('click', ()=>{

  if(brv.classList.contains('close')){
    brv.classList.add('open')
    brv.classList.remove('close')
  }else{
    brv.classList.add('close')
    brv.classList.remove('open')
  }
});

// Функция для смены картинок при нажатии на кнопки
var i=0;
        var image=document.getElementById("our_requirements_img");
        // Добавте свои картинки через запятую
        var imgs=new Array('./img/main/our_requirements/foto_1.png');
        function imgsrc() {
            i;
            image.src=imgs[i];
        }

        var imgs_2=new Array('./img/main/our_requirements/foto_2.png');
        function imgsrc_2() {
            i;
            image.src=imgs_2[i];
        }

        var imgs_3=new Array('./img/main/our_requirements/foto_3.png');
        function imgsrc_3() {
            i;
            image.src=imgs_3[i];
        }





