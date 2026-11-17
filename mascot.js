
// enot621 - mascot.js

// -----------------------------
// LOCAL STORAGE RETRIEVAL & VARIABLES
// -----------------------------

let mascot_homepage = localStorage.getItem('mascot');
if (mascot_homepage == null) {
	localStorage.setItem('mascot', 'normal');
	mascot_homepage = localStorage.getItem('mascot');
}

let mascots_total = ["normal", "rain", "invkiss", "monk", "arti", "rivy", "hunter"];
let mascots_monthly = ["january", "february", "march", "easter", "may", "june", "july", "august", "september", "october", "november", "december"]
let mascots_random = [...mascots_total, ...mascots_monthly]
 // Add more mascots as needed

// -----------------------------
// INITIALIZATION - DYNAMIC MASCOTS
//
// Notes: ALWAYS put dynamic mascots at the top, so that they
// 		  can just do their own logic, and then the script handles
//		  the class additions.
// -----------------------------

if (mascot_homepage == "random") {
	mascot_homepage = mascots_random[Math.floor(Math.random() * mascots_random.length)];
}

if (mascot_homepage == "month") {
	const current_month = new Date().getMonth();
	mascot_homepage = mascots_monthly[current_month];
	console.log(current_month);
}

// -----------------------------
// INITIALIZATION - APPLYING MASCOTS
// -----------------------------

if (mascot_homepage == "normal" || mascot_homepage == null) { // checking for null again in the off-chance somehow my earlier logic doesnt get run
	document.getElementById('mascot').classList.add("mascot");
}

if (mascot_homepage == "rain") {
	document.getElementById('mascot').classList.add("mascot-rain");
}

if (mascot_homepage == "invkiss") {
	document.getElementById('mascot').classList.add("mascot-invkiss");
}

if (mascot_homepage == "monk") {
	document.getElementById('mascot').classList.add("mascot-monk");
}

if (mascot_homepage == "easter") {
	document.getElementById('mascot').classList.add("mascot-easter");
}

if (mascot_homepage == "arti") {
	document.getElementById('mascot').classList.add("mascot-arti");
}

if (mascot_homepage == "rivy") {
	document.getElementById('mascot').classList.add("mascot-rivy");
}

if (mascot_homepage == "hunter") {
	document.getElementById('mascot').classList.add("mascot-hunter");
}

// MONTHLY MASCOTS

if (mascot_homepage == "january") {
	document.getElementById('mascot').classList.add("mascot-january");
}

if (mascot_homepage == "february") {
	document.getElementById('mascot').classList.add("mascot-february");
}

if (mascot_homepage == "march") {
	document.getElementById('mascot').classList.add("mascot-march");
}

if (mascot_homepage == "may") {
	document.getElementById('mascot').classList.add("mascot-may");
}

if (mascot_homepage == "june") {
	document.getElementById('mascot').classList.add("mascot-june");
}

if (mascot_homepage == "july") {
	document.getElementById('mascot').classList.add("mascot-july");
}

if (mascot_homepage == "august") {
	document.getElementById('mascot').classList.add("mascot-august");
}

if (mascot_homepage == "september") {
	document.getElementById('mascot').classList.add("mascot-september");
}

if (mascot_homepage == "october") {
	document.getElementById('mascot').classList.add("mascot-october");
}

if (mascot_homepage == "november") {
	document.getElementById('mascot').classList.add("mascot-november");
}

if (mascot_homepage == "december") {
	document.getElementById('mascot').classList.add("mascot-december");
}