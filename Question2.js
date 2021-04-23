let stringArray =  ["Anteneh","Javascript","C#","Django","Go","Typescript","Reactjs"];
let filteredArray = stringArray.filter(s=>s.length>=5).filter(value => value.includes("a"));
filteredArray.forEach(value => console.log(value));
