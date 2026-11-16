
// enot621 - search.js

// -----------------------------
// RETRIEVING AND DISPLAYING POSTS
// -----------------------------

const modsList = [];

async function fetchMods() {
    const response = await fetch('InvList.json');
    modsList.push(...await response.json());
	if (localStorage.getItem("autosearch") == true) {
		displayMods(modsList);
	}
}

function displayMods(mods) {
    const modGrid = document.getElementById('modGrid');
    modGrid.innerHTML = '';

    mods.forEach(mod => {
        const modCard = document.createElement('div');
        modCard.classList.add('foto-card');
		
		// const linkPage = mod.Image.replace(/\.[^/.]+$/, "");
		// redundant for enot621

        modCard.innerHTML = `
            <a href="posts.html?post=${mod.Image}" style="color: white;"><img src="assets/post-images/${mod.Image}" alt="${mod.Description}" title="${mod.Description}" style="border-radius: 10px;"></a>
        `;

        modGrid.appendChild(modCard);
    });
}

// -----------------------------
// SEARCH POSTS
// -----------------------------

function searchMods() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    const filteredMods = modsList.filter(mod =>
        mod.Description.toLowerCase().includes(query) ||
		mod.Image.toLowerCase().includes(query) ||
		mod.Source.toLowerCase().includes(query) ||
		mod.Tags.toLowerCase().includes(query)
    );

    displayMods(filteredMods);
}

// -----------------------------
// INITIALIZATION
// -----------------------------

window.onload = fetchMods;