const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			sections: [
				{
					title: "characters",
					description: "All characters here",
					url: "https://starwars-visualguide.com/assets/img/categories/character.jpg"
				},
				{
					title: "planets",
					description: "All planets here",
					url: "https://starwars-visualguide.com/assets/img/categories/planets.jpg"
				},
				{
					title: "films",
					description: "All films here",
					url: "https://starwars-visualguide.com/assets/img/categories/films.jpg"
				},
				{
					title: "species",
					description: "All Species here",
					url: "https://starwars-visualguide.com/assets/img/categories/species.jpg"
				},
			],
			people: [],
			character: {},
			characterPicture: {},
			planets: [],
			planet: {},
			planetPicture: {},
			favorites: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeople: async () => {
				try {
					console.log("-----------loadPeople------------");
					let response = await fetch("https://www.swapi.tech/api/people");
					let data = await response.json();
					console.log("loadPeople: data.results:", data.results)
					setStore({people: data.results})
				} catch (error) {
					console.log("ERROR LOADPEOPLE")
					console.error(error)
				}

			},
			loadCharacter: async (id) => {
				try {
					console.log("-----------loadCharacter------------");
					let response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					console.log("loadCharacter-response", response)
					let data = await response.json();
					console.log("loadCharacter-data:", data)
					getActions().loadCharacterPicture(id);
					setStore({character: data.result})
				} catch (error) {
					console.error(error)
					console.log("NO ENCONTRO EL PERSONAjE:")
				}
			},
			loadCharacterPicture: async (id) => {
				try {
					console.log("-----------loadCharacterPicture------------");
					let response = await fetch(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`);
					console.log("loadCharacterPicture-response", response);
					setStore({characterPicture: response.url})
				} catch (error) {
					console.error(error)
					console.log("NO ENCONTRO FOTO DEL PERSONAjE:")
				}
			},
			addFavorites: (item) => {
				console.log("-----------addFavorites------------");
				const store = getStore();
				console.log("addFavorites-item:", item)
				if (!store.favorites.includes(item)) {
					setStore({ favorites: [...store.favorites, item] });
				}else {
					setStore({ favorites: store.favorites.filter(fav => fav !== item) });
				}

			},
			loadPlanets: async () => {
				try {
					console.log("-----------loadPlanets------------");
					let response = await fetch("https://www.swapi.tech/api/planets");
					let data = await response.json();
					console.log("loadPlanets-data.results:", data.results)
					setStore({planets: data.results})
				} catch (error) {
					console.log("ERROR loadPlanets")
					console.error(error)
				}

			},
			//Trabajando aca
			loadPlanet: async (id) => {
				try {
					console.log("-----------loadPlanet------------");
					let response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					console.log("loadPlanet-response", response)
					let data = await response.json();
					console.log("loadPlanet-data:", data)
					getActions().loadPlanetPicture(id);
					setStore({planet: data.result})
				} catch (error) {
					console.error(error)
					console.log("NO ENCONTRO EL PLANETA:")
				}
			},
			loadPlanetPicture: async (id) => {
				try {
					console.log("-----------loadPlanetPicture------------");
					if (id != 1) {
						let response = await fetch(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`);
						console.log("loadCharacterPicture-response", response);
						setStore({planetPicture: response.url})
					} else {
						console.log("Id = 1 ?, id:", id);
						setStore({planetPicture: "https://img.freepik.com/foto-gratis/representacion-3d-planeta-tierra_23-2150498436.jpg"})
					}

				} catch (error) {
					console.error(error)
					console.log("NO ENCONTRO FOTO DEL PLANETA:")
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
