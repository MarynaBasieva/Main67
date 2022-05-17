<?php

  $login = trim($_GET['login']);
  $pass = trim($_GET['pass']);

if($login  == '' || $pass == ''){
	echo "Помилка. Заповніть поля";
	return;
}

if($login != 'login' || $pass != '123'){
	echo "Такий користувач не знайден";
    return;
}else{
	echo "Заходьте будь ласка";

}


  /*$action = $_GET['action'];

 if($action == 'Book'){
	 echo Book();
 }
function Book(){
	$arrName = array('1' => "Avtor", "2" => "Book", "3" => "USA");
	return json_encode($arrName);
}*/


?>