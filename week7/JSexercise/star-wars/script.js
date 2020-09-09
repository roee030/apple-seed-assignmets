const startApp = async () => {
  const data = [];
  const getData = async () => {
    for (let index = 1; index < 11; index++) {
      try {
        const baseUrl = "https://swapi.dev/api/";
        const reqPeople = await fetch(`${baseUrl}people/${index}`);
        const peopleData = await reqPeople.json();
        // console.log(peopleData);
        const reqPlanet = await fetch(peopleData.homeworld);
        const planetData = await reqPlanet.json();
        // console.log(planetData);
        const obj = {
          name: peopleData.name,
          hair: peopleData.hair,
          height: peopleData.height,
          planet: {
            name: planetData.name,
            population: planetData.population,
          },
        };
        data.push(obj);
      } catch (e) {
        console.log(e);
      }
    }
  };
  getData();
};
startApp();
