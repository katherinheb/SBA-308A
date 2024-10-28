const fetchSpells = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells')
    const spells = await res.json()

    return spells
}

fetch ("https://potterapi-fedeperin.vercel.app/en/spells")
   .then(response => {
    if (!response.ok) {
        throw new Error("Could not fetch resource")
    }
    return response.json();
})
   .then(data => console.log(data.id))
   .catch (error => console.error(error));
   
