const apiUrl = 'https://potterapi-fedeperin.vercel.app/en/spells';

async function fetchSpells() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const spells = await response.json();
        populateSpellDropdown(spells);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        const spellInfoDiv = document.getElementById('spell-info');
        spellInfoDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function populateSpellDropdown(spells) {
    const spellSelect = document.getElementById('spell-select');
    spells.forEach(spell => {
        const option = document.createElement('option');
        option.value = spell.spell;
        option.textContent = spell.spell; 
        spellSelect.appendChild(option);
    });
    spellSelect.addEventListener('change', (event) => {
        const selectedSpell = spells.find(s => s.spell === event.target.value);
        displaySpellInfo(selectedSpell);
    });
}

function displaySpellInfo(spell) {
    const spellInfoDiv = document.getElementById('spell-info');
    if (spell) {
        spellInfoDiv.textContent = `${spell.spell}: ${spell.use}`;
    } else {
        spellInfoDiv.textContent = ''; 
    }
}

fetchSpells();

