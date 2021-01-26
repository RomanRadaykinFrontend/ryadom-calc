export type ArrOptionsType = {
    name: string
    value: number
    isChecked?: boolean
}

export type InitialStateType = {

    floors: {
        floorsOptionArray: Array<ArrOptionsType>
        floorsCount: number
        name: string
    }
    aprons: {
        apronsOptionArray: Array<ArrOptionsType>
        apronsCount: number
        name: string
    }
    tableTops: {
        tableTopsOptionArray: Array<ArrOptionsType>
        tableTopsCount: number
        name: string
    }
    cookingPanels: {
        cookingPanelsOptionArray: Array<ArrOptionsType>
        cookingPanelsCount: number
        name: string
    }
    cutOuts: {
        cutOutsOptionArray: Array<ArrOptionsType>
        cutOutsCount: number
        name: string
    }
    sinks: {
        sinksOptionArray: Array<ArrOptionsType>
        sinksCount: number
        name: string
    }
    mixerTap: {
        mixerTapOptionArray: Array<ArrOptionsType>
        mixerTapCount: number
        name: string
    }
    rangeHood: {
        rangeHoodOptionArray: Array<ArrOptionsType>
        rangeHoodCount: number
        name: string
    }
    four: {
        fourOptionArray: Array<ArrOptionsType>
        fourCount: number
        name: string
    }
    microwave: {
        microwaveOptionArray:  Array<ArrOptionsType>
        microwaveCount: number
        name: string
    }
    dishwasher: {
        dishwasherOptionArray:  Array<ArrOptionsType>
        dishwasherCount: number
        name: string
    }
    skirtingBoardTableTops: {
        skirtingBoardTableTopsOptionArray:  Array<ArrOptionsType>
        skirtingBoardTableTopsCount: number
        name: string
    }
    washingMachine: {
        washingMachineOptionArray:  Array<ArrOptionsType>
        washingMachineCount: number
        name: string
    }
    backLighting: {
        backLightingOptionArray:  Array<ArrOptionsType>
        backLightingCount: number
        name: string
    }
    filter: {
        filterOptionArray:  Array<ArrOptionsType>
        filterCount: number
        name: string
    }

}

export type ActionType = {
    type: string
    count: number
    name?: string
}