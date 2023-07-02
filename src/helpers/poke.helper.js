export function filterByProp(list, prop) {
    if (list && prop) {
        return list.map((poke) => poke[prop] || "")
    } else return list
}

export function filterPokeList(list, type, weakness, search){
    if(list) {
        //console.log(list)
        const filteredPokeList = list.filter((poke) => {
            const pokeType = type.length === 0 || poke.type.includes(type);
            const pokeWeakness = weakness.length === 0 || poke.weaknesses.includes(weakness);
            const pokeName = search.length === 0 || poke.name.toLowerCase().includes(search)
            return pokeType && pokeWeakness && pokeName
        })
        return filteredPokeList
    }
}