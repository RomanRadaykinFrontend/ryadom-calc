import {ArrOptionsType, InitialStateType} from "./types";

export let initialState: InitialStateType = {
    floors: {
        floorsOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: '2 яруса', value: 2100},
            {name: '3 яруса', value: 2800}],
        floorsCount: 0,
        name: 'Вырез отверстия'
    },
    aprons: {
        apronsOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Панель ПВХ ', value: 650},
            {name: 'Мазайка ', value: 4800},
            {name: 'Плитка ', value: 3800}],
        apronsCount: 0,
        name: 'Монтаж фартука'
    },
    tableTops: {
        tableTopsOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'ДСП', value: 500},
            {name: 'Каменная', value: 1800}],
        tableTopsCount: 0,
        name: 'Монтаж столешницы'
    },
    cutOuts: {
        cutOutsOptionArray: [
            {name: 'под мойку', value: 500, isChecked: false},
            {name: 'под варочную поверхность', value: 500, isChecked: false}
        ],
        cutOutsCount: 0,
        name: 'Вырез отверстия'
    },
    cookingPanels: {
        cookingPanelsOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 1100},
            {name: 'Не нужна', value: 0}
        ],
        cookingPanelsCount: 0,
        name: 'Монтаж варочной панели'
    },
    sinks: {
        sinksOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 1500},
            {name: 'Не нужна', value: 0}
        ],
        sinksCount: 0,
        name: 'Монтаж раковины с герметизацией и подключением сифона'
    },
    mixerTap: {
        mixerTapOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 1200},
            {name: 'Не нужна', value: 0}
        ],
        mixerTapCount: 0,
        name: 'Монтаж смесителя с подключением'
    },
    rangeHood: {
        rangeHoodOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 1600},
            {name: 'Не нужна', value: 0}
        ],
        rangeHoodCount: 0,
        name: 'Монтаж вытяжки'
    },
    four: {
        fourOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 1400},
            {name: 'Не нужна', value: 0}
        ],
        fourCount: 0,
        name: 'Монтаж духового шкафа'
    },
    microwave: {
        microwaveOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 900},
            {name: 'Не нужна', value: 0}
        ],
        microwaveCount: 0,
        name: 'Монтаж микроволновки'
    },
    dishwasher: {
        dishwasherOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 1600},
            {name: 'Не нужна', value: 0}
        ],
        dishwasherCount: 0,
        name: 'Монтаж посудамоечной машины'
    },
    skirtingBoardTableTops: {
        skirtingBoardTableTopsOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 350},
            {name: 'Не нужна', value: 0}
        ],
        skirtingBoardTableTopsCount: 0,
        name: 'Монтаж плинтуса на столещницу'
    },
    washingMachine: {
        washingMachineOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 1600},
            {name: 'Не нужна', value: 0}
        ],
        washingMachineCount: 0,
        name: 'Монтаж стиральной машины'
    },
    backLighting: {
        backLightingOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 1500},
            {name: 'Не нужна', value: 0}
        ],
        backLightingCount: 0,
        name: 'Монтаж подсветки на гарнитуре'
    },
    filter: {
        filterOptionArray: [
            {name: 'Не выбрано', value: 0},
            {name: 'Нужна', value: 1500},
            {name: 'Не нужна', value: 0}
        ],
        filterCount: 0,
        name: 'Монтаж фильтра под мойку'
    }
};