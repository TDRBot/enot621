const modsList = []; // Will be populated from ModsList.json

async function fetchMods() {
    const response = await fetch('InvList.json');
    modsList.push(...await response.json());
    // displayMods(modsList);
}

function displayMods(mods) {
    const modGrid = document.getElementById('modGrid');
    modGrid.innerHTML = ''; // Clear previous results

    mods.forEach(mod => {
        const modCard = document.createElement('div');
        modCard.classList.add('foto-card');
		
		// const linkPage = mod.Image.replace(/\.[^/.]+$/, "");

        modCard.innerHTML = `
            <a href="posts.html?post=${mod.Image}" style="color: white;"><img src="assets/post-images/${mod.Image}" alt="${mod.Description}" title="${mod.Description}" style="border-radius: 10px;"></a>
        `; // right here

        modGrid.appendChild(modCard);
    });
}

function searchMods() {
    const query = document.getElementById('searchInput').value.toLowerCase();

    const filteredMods = modsList.filter(mod =>
        mod.Description.toLowerCase().includes(query) ||
		mod.Image.toLowerCase().includes(query) ||
		mod.Source.toLowerCase().includes(query)
    );

    displayMods(filteredMods);
}

window.onload = fetchMods;