document.addEventListener("DOMContentLoaded", () => {
    const bandsList = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
	const bands=document.querySelector("#bands");
	
	//console.log(ul);
	
	bandsList.sort(function (a,b) {
		let aArr=a.split(" ");
		let bArr=b.split(" ");
		let str1=aArr[0];
		let str2=bArr[0];
		let articles=["A", "An", "The"];
	
		if(articles.includes(str1)&&articles.includes(str2)){
			return aArr[1].localeCompare(bArr[1]);
		}else if(articles.includes(str1)){
			return aArr[1].localeCompare(str2);
		}else if(articles.includes(str2)){
			return str1.localeCompare(bArr[1]);
		}else{
			return str1.localeCompare(str2);
		}
	});
	
	bandsList.map((band)=>{
		bands.insertAdjacentHTML("beforeend", `<li>${band}</li>`);
	})
});