
function pageLoad(){
	modal = document.getElementById("myModal");
	var closeBtn = document.getElementById("closeBtn");
	modal.style.display = "block";
	closeBtn.onclick = closePopup;
}

function closePopup(){	
	modal.style.display = "none";
}
window.onload = pageLoad;