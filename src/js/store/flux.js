const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			character: {},
			characterPicture: {},
			favorites: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeople: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people");
					let data = await response.json();
					console.log("data.results:", data.results)
					setStore({people: data.results})
				} catch (error) {
					console.log("ERROR LOADPEOPLE")
					console.error(error)
				}

			},
			loadCharacter: async (id) => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					console.log("response", response)
					let data = await response.json();
					console.log("data:", data)
					getActions().loadCharacterPicturer(id);
					setStore({character: data.result})
				} catch (error) {
					console.error(error)
					console.log("NO ENCONTRO EL PERSONAjE:")
				}
			},
			loadCharacterPicturer: async (id) => {
				try {
					let response = await fetch(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`);
					console.log("response", response)
					setStore({characterPicture: response.url})
				} catch (error) {
					console.error(error)
					console.log("NO ENCONTRO EL PERSONAjE:")
				}
			},
			addFavorites: (item) => {
				const store = getStore();
				console.log("item:", item)
				if (!store.favorites.includes(item)) {
					setStore({ favorites: [...store.favorites, item] });
				}else {
					setStore({ favorites: store.favorites.filter(fav => fav !== item) });
				}

			},
			loadPlanets: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/planets");
					let data = await response.json();
					console.log("data.results:", data.results)
					setStore({planets: data.results})
				} catch (error) {
					console.log("ERROR loadPlanets")
					console.error(error)
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
