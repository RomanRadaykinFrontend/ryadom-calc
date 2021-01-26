import {ActionType, InitialStateType} from "./types";
import {initialState} from "./State";

export const CHANGE_FLOOR = 'CHANGE_FLOOR';
export const CHANGE_APRONS = 'CHANGE_APRONS';
export const CHANGE_TABLETOPS = 'CHANGE_TABLETOPS';
export const CHANGE_COOKINGPANELS = 'CHANGE_COOKINGPANELS';
export const CHANGE_CHECKED = 'CHANGE_CHECKED';
export const CHANGE_SINKS = 'CHANGE_SINKS';
export const CHANGE_MIXERTAP = 'CHANGE_MIXERTAP';
export const CHANGE_RANGEHOOD = 'CHANGE_RANGEHOOD';
export const CHANGE_FOUR = 'CHANGE_FOUR';
export const CHANGE_MICROWAVE = 'CHANGE_MICROWAVE';
export const CHANGE_DISHWASHER = 'CHANGE_DISHWASHER';
export const CHANGE_SKIRTINGBOARD = 'CHANGE_SKIRTINGBOARD';
export const CHANGE_WASHINGMACHINE = 'CHANGE_WASHINGMACHINE';
export const CHANGE_BACKLIGHTING = 'CHANGE_BACKLIGHTING';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const RESET_ALL = 'RESET_ALL';

export const reducer = (state: InitialStateType, action: ActionType) => {
    let newObj: InitialStateType = JSON.parse(JSON.stringify(state));
    let resetObj: InitialStateType = JSON.parse(JSON.stringify(initialState));
    switch (action.type) {
        case CHANGE_FLOOR:
            newObj.floors.floorsCount = newObj.floors.floorsCount + (+action.count - newObj.floors.floorsCount)
            return newObj;
        case CHANGE_APRONS:
            newObj.aprons.apronsCount = newObj.aprons.apronsCount + (+action.count - newObj.aprons.apronsCount)
            return newObj;
        case CHANGE_TABLETOPS:
            newObj.tableTops.tableTopsCount = newObj.tableTops.tableTopsCount + (+action.count - newObj.tableTops.tableTopsCount)
            return newObj;
        case CHANGE_COOKINGPANELS:
            newObj.cookingPanels.cookingPanelsCount = newObj.cookingPanels.cookingPanelsCount + (+action.count - newObj.cookingPanels.cookingPanelsCount);
            return newObj;
        case CHANGE_CHECKED:
            if (action.name === 'под мойку') {
                if (newObj.cutOuts.cutOutsOptionArray[0].isChecked) {
                    newObj.cutOuts.cutOutsCount = newObj.cutOuts.cutOutsCount - +action.count
                } else {
                    newObj.cutOuts.cutOutsCount = newObj.cutOuts.cutOutsCount + +action.count
                }
                newObj.cutOuts.cutOutsOptionArray[0].isChecked = !newObj.cutOuts.cutOutsOptionArray[0].isChecked;
                return newObj
            } else if (action.name === 'под варочную поверхность') {
                if (newObj.cutOuts.cutOutsOptionArray[1].isChecked) {
                    newObj.cutOuts.cutOutsCount = newObj.cutOuts.cutOutsCount - +action.count
                } else {
                    newObj.cutOuts.cutOutsCount = newObj.cutOuts.cutOutsCount + +action.count
                }
                newObj.cutOuts.cutOutsOptionArray[1].isChecked = !newObj.cutOuts.cutOutsOptionArray[1].isChecked;
                return newObj
            } else {
                return newObj
            }
        case CHANGE_SINKS:
            newObj.sinks.sinksCount = newObj.sinks.sinksCount + (+action.count - newObj.sinks.sinksCount);
            return newObj;
        case CHANGE_MIXERTAP:
            newObj.mixerTap.mixerTapCount = newObj.mixerTap.mixerTapCount + (+action.count - newObj.mixerTap.mixerTapCount);
            return newObj;
        case CHANGE_RANGEHOOD:
            newObj.rangeHood.rangeHoodCount = newObj.rangeHood.rangeHoodCount + (+action.count - newObj.rangeHood.rangeHoodCount);
            return newObj;
        case CHANGE_FOUR:
            newObj.four.fourCount = newObj.four.fourCount + (+action.count - newObj.four.fourCount);
            return newObj;
        case CHANGE_MICROWAVE:
            newObj.microwave.microwaveCount = newObj.microwave.microwaveCount + (+action.count - newObj.microwave.microwaveCount);
            return newObj;
        case CHANGE_DISHWASHER:
            newObj.dishwasher.dishwasherCount =  newObj.dishwasher.dishwasherCount + (+action.count -  newObj.dishwasher.dishwasherCount);
            return newObj;
        case CHANGE_SKIRTINGBOARD:
            newObj.skirtingBoardTableTops.skirtingBoardTableTopsCount = newObj.skirtingBoardTableTops.skirtingBoardTableTopsCount +
                (+action.count - newObj.skirtingBoardTableTops.skirtingBoardTableTopsCount);
            return newObj;
        case CHANGE_WASHINGMACHINE:
            newObj.washingMachine.washingMachineCount = newObj.washingMachine.washingMachineCount +
                (+action.count - newObj.washingMachine.washingMachineCount);
            return newObj;
        case CHANGE_BACKLIGHTING:
            newObj.backLighting.backLightingCount = newObj.backLighting.backLightingCount +
                (+action.count - newObj.backLighting.backLightingCount);
            return newObj;
        case CHANGE_FILTER:
            newObj.filter.filterCount = newObj.filter.filterCount +
                (+action.count - newObj.filter.filterCount);
            return newObj;
        case RESET_ALL:
            return resetObj;
        default:
            return {...state}
    }
}