import {createSlice} from "@reduxjs/toolkit";
import {Artefact} from "../../types/artefact.ts";

const initialState: Artefact[] = [
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
];

const artefactSlice = createSlice({
    name: 'artefactSlice',
    initialState,
    reducers: {
        addArtefact: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {addArtefact} = artefactSlice.actions;
export default artefactSlice.reducer;
