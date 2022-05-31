async function responseFetch(){
	let response = await fetch('http://127.0.0.1:5500/js/photo.json');
	let content = await response.json();
	content = content.splice(0,15);
	
	let list = document.querySelector('.posts');
	
	
	let key;
	for(key in content){
		list.innerHTML +=`
		<li class="post">
			<img src="${content[key].url}" />
			<h2>${content[key].title}</h2>
			<div class="price">
        		<div class="priseUsd">${content[key].price}</div>
        		<a class="btnBuy" href="${content[key].buy}">NFT buy</a>
    		</div>
		</li>
		`
	}
}
responseFetch();

