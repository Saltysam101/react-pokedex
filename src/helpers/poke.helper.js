export function filterByProp(list, prop) {
    if (list && prop) {
        return list.map((poke) => poke[prop] || "")
    } else return list
}

export function filterPokeListByType(list, type) {
    if (type) return list.filter((poke) => poke.type[0] == type || poke.type[1] == type)
    else return list
}