function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const sidebar = document.querySelector('.sidebar');
  menuToggle.classList.toggle('active');
  sidebar.classList.toggle('active');
};

// ==================================

const list = document.querySelectorAll('.link_item_menu');
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


// Функция для смены картинок при нажатии на кнопки
var i=0;
        var image=document.getElementById("furniture_img");
        // Добавте свои картинки через запятую
        var imgs=new Array('./img/main/furniture/foto_2.jpg');
        function imgsrc() {
            i;
            image.src=imgs[i];
        }

        var imgs_2=new Array('./img/main/furniture/foto_3.jpg');
        function imgsrc_2() {
            i;
            image.src=imgs_2[i];
        }

        var imgs_3=new Array('./img/main/furniture/foto_4.jpg');
        function imgsrc_3() {
            i;
            image.src=imgs_3[i];
        }

        var imgs_4=new Array('./img/main/furniture/foto_1.png');
        function imgsrc_4() {
            i;
            image.src=imgs_4[i];
        }

        var imgs_5=new Array('./img/main/furniture/foto_5.jpg');
        function imgsrc_5() {
            i;
            image.src=imgs_5[i];
        }

        var imgs_6=new Array('./img/main/furniture/foto_6.jpg');
        function imgsrc_6() {
            i;
            image.src=imgs_6[i];
        }



