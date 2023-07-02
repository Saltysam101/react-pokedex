export function filterByProp(list, prop) {
    if (list && prop) {
        return list.map((poke) => poke[prop] || "")
    } else return list
}

export function filterPokeList(list, type, weakness){
    if(list) {
        //console.log(list)
        const filteredPokeList = list.filter((poke) => {
            const pokeType = type.length === 0 || poke.type.includes(type);
            const pokeWeakness = weakness.length === 0 || poke.weaknesses.includes(weakness);
            return pokeType && pokeWeakness
        })
        return filteredPokeList
    }
}