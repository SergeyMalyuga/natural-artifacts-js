import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Artefact} from "../../types/artefact.ts";
import {ArtefactsState} from "../../types/artefacts-state.ts";

const initialState: ArtefactsState = {
    artefacts: [
        {
            image: {
                url: "./images/raster/artefacts-plant.png",
                height: 223,
                width: 120,
            },
            title: "Fig. 1 (plant)",
            description:
                "Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира " +
                "своевременно верифицированы.",
        },
        {
            image: {
                url: "./images/raster/artefacts-flower.png",
                height: 197,
                width: 120,
            },
            title: "Fig. 2 (flower)",
            description:
                "Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.",
        },
        {
            image: {
                url: "./images/raster/artefacts-leaf.png",
                height: 204,
                width: 120,
            },
            title: "Fig. 3 (leaf)",
            description:
                "Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.",
        },
        {
            image: {
                url: "./images/raster/artefacts-wood.png",
                height: 226,
                width: 120,
            },
            title: "Fig. 4 (wood)",
            description:
                "Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.",
        },
    ],
    error: null,
}

const artefactSlice = createSlice({
    name: 'artefact',
    initialState,
    reducers: {
        addArtefact: (state, action: PayloadAction<Artefact>) => {
            const exist = state.artefacts.some(artefact => artefact.title === action.payload.title);
            if(exist) {
                return {...state, error: 'Артефакт уже существует'};
            }
            return {...state, artefacts: [...state.artefacts, action.payload], error: null};
        }
    }
});

export const {addArtefact} = artefactSlice.actions;
export default artefactSlice.reducer;
