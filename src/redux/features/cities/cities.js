import { createSlice } from "@reduxjs/toolkit";


function getSectorsNames(data) {
    let sectorsNames = [];
    let provincesNames = Object.keys(data);

    for(let i = 0; i < provincesNames.length; i++) {
        let citiesNames = Object.keys(data[provincesNames[i]]);


        for(let j = 1; j < citiesNames.length; j++) {
            sectorsNames.push(data[provincesNames[i]][citiesNames[j]].city_name.name);
        }
    }

    return sectorsNames;
}

const initialState = {
    data: null,
    filteredData: {},
    provincesNames: null,
    sectorsNames: null,
};

export const cities = createSlice({
    name: "cities",
    initialState,
    reducers: {
        setAllValues: (state, action) => {
            state.data = action.payload;
            state.sectorsNames = getSectorsNames(action.payload);
            state.provincesNames = Object.keys(action.payload);

            let counter = 1;

            for(let i = 0; i < state.provincesNames.length; i++) {
                let citiesNames = Object.keys(state.data[state.provincesNames[i]]);

                for(let j = 1; j < citiesNames.length; j++) {

                    state.filteredData[`city_${counter}`] = state.data[state.provincesNames[i]][citiesNames[j]].city_name;
                    counter++;
                }
            }
        },
        filterBySectorName: (state, action) => {
            state.filteredData = {};
   
            let counter = 1;

            
            for(let i = 0; i < state.provincesNames.length; i++) {
                const citiesNames = Object.keys(state.data[state.provincesNames[i]]);
                
                for(let j = 1; j < citiesNames.length; j++) {
                    if(action.payload === state.data[state.provincesNames[i]][citiesNames[j]].city_name.name) {
                        state.filteredData[`city_${counter}`] = state.data[state.provincesNames[i]][citiesNames[j]].city_name;
                        counter++;
                    }
                }
            }
        },
        filterByProvinceName: (state, action) => {
            state.filteredData = {};


            for(let i = 0; i < state.provincesNames.length; i++) {

                if(action.payload === state.provincesNames[i]) {
                    for(let j = 1; j < Object.keys(state.data[action.payload]).length; j++) {
                        state.filteredData[`city_${j}`] = state.data[action.payload][`city_${j}`].city_name;
                    }
                }

            }            
        },
        filterByCenterName: (state, action) => {
            state.filteredData = {};


            let counter = 1;

            for(let i = 0; i < state.provincesNames.length; i++) {
                const citiesNames = Object.keys(state.data[state.provincesNames[i]]);
                for(let j = 1; j < citiesNames.length; j++) {
                    
                    for(let k = 1; k < Object.keys(state.data[state.provincesNames[i]][citiesNames[j]].city_name).length; k++) {

                        if(state.data[state.provincesNames[i]][citiesNames[j]].city_name[`center_${k}`].center_name.includes(action.payload)) {
                            state.filteredData[`city_${counter}`] = {};
                            state.filteredData[`city_${counter}`][`center_${k}`]  = state.data[state.provincesNames[i]][citiesNames[j]].city_name[`center_${k}`];
                            counter++;
                        }                
                    }
                }            
            }
        }
    },
});


export const { filterByProvinceName, filterBySectorName, filterByCenterName, setAllValues } = cities.actions;
export default cities.reducer;