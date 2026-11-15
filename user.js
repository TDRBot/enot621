
// enot621 - user.js

// -----------------------------
// LOCAL STORAGE RETRIEVAL
// -----------------------------

let totalposts = localStorage.getItem('posts-viewed');
if (totalposts == null) {
	localStorage.setItem('posts-viewed', '0');
	totalposts = localStorage.getItem('posts-viewed');
}

let pfp = localStorage.getItem('userpfp');
if (pfp == null) {
	localStorage.setItem('userpfp', 'pfp_surv');
	pfp = localStorage.getItem('userpfp');
}

let username = localStorage.getItem('username');
if (username == null) {
	localStorage.setItem('username', 'Guest User');
	username = localStorage.getItem('username');
}

let asearchval = localStorage.getItem('autosearch');
if (asearchval == null) {
	localStorage.setItem('autosearch', false);
	asearchval = localStorage.getItem('autosearch');
}

// -----------------------------
// USER PAGE CONTENT
// -----------------------------
function userPage() {
	if (window.location.href.includes("user")) {
		document.getElementById("totalcount").innerHTML = "Total posts viewed: " + totalposts;
		document.getElementById('pfpUserpage').src = "assets/" + pfp + ".png";
		document.getElementById('username').textContent = username;
	}
}

function setPfp() {
	document.getElementById('pfpUser').src = "assets/" + pfp + ".png";
}

function previewPfp() {
	let previewpfp = document.getElementById('pfpSelector').value;
	
	document.getElementById('pfpUserpage').src = "assets/" + previewpfp + ".png";
}

// -----------------------------
// SETTING CONFIGURATION
// -----------------------------

function submitPfp() {
	let temppfp = document.getElementById('pfpSelector');
	
	localStorage.setItem('userpfp', temppfp.value);
	window.location.reload();
}

function changeUsername() {
	let tempuser = document.getElementById('usernameinput');
	
	localStorage.setItem('username', tempuser.value);
	window.location.reload();
}

function changeAutoSearch() {
	let asearch = document.getElementById('settingAutosearch');
	
	localStorage.setItem("autosearch", asearch.value);
	window.location.reload();
}


// -----------------------------
// INITIALIZATION
// -----------------------------

window.addEventListener("load", userPage);
window.addEventListener("load", setPfp);