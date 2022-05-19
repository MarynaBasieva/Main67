async function responseFetch(){
	let response = await fetch('http://127.0.0.1:5500/script/photo.json');
	let content = await response.json();
	content = content.splice(0,15);
	
	let list = document.querySelector('.posts');
	
	
	let key;
	for(key in content){
		list.innerHTML +=`
		<li class="post">
			<img src="${content[key].url}" />
			<h2>${content[key].title}</h2>
			<a class="watch_link" href="${content[key].link}" target="_blank">Переглянути огляд</a>
			<div class="price">
        		<div class="prise_now">${content[key].price}</div>
        		<a class="buy_now" href="${content[key].buy}" target="_blank">buy now</a>
    		</div>
		</li>
		`
	}
}
responseFetch();

