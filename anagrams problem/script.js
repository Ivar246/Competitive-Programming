let input = ['eat', "tea", "ate", "tan", "bat", "tab", "nat", "pan", "nap"];

let groupAnnagrams = (strs) => {
    let ordered = strs.map(str => str.split("").sort().join(""))
    let mapped = {};
    for (let i = 0; i < strs.length; i++) {
        if (!mapped[ordered[i]]) {
            mapped[ordered[i]] = [strs[i]];
        }
        else {
            mapped[ordered[i]].push(strs[i]);
        }
    }

    return mapped;
}


let output = groupAnnagrams(input)
console.log(output)