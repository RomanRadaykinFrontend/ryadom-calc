import React, {useReducer} from 'react';
import './App.css';
import SelectWithNumber from "./SelectWithNumberInput";
import SelectComponent from "./SelectComponent";
import SelectWithCheckbox from "./SelectWithCheckBox";
import {initialState} from "./State";
import {
    CHANGE_APRONS,
    CHANGE_BACKLIGHTING,
    CHANGE_CHECKED, CHANGE_COOKINGPANELS, CHANGE_DISHWASHER, CHANGE_FILTER, CHANGE_FLOOR, CHANGE_FOUR,
    CHANGE_MICROWAVE,
    CHANGE_MIXERTAP,
    CHANGE_RANGEHOOD,
    CHANGE_SINKS, CHANGE_SKIRTINGBOARD, CHANGE_TABLETOPS, CHANGE_WASHINGMACHINE, reducer, RESET_ALL
} from './reducer';
import CountField from "./CountField";

function App() {

    let [state, dispatch] = useReducer(reducer, initialState);

    let totalCount = state.floors.floorsCount +
        state.aprons.apronsCount +
        state.tableTops.tableTopsCount +
        state.cookingPanels.cookingPanelsCount +
        state.cutOuts.cutOutsCount +
        state.mixerTap.mixerTapCount +
        state.rangeHood.rangeHoodCount +
        state.four.fourCount +
        state.microwave.microwaveCount +
        state.dishwasher.dishwasherCount +
        state.skirtingBoardTableTops.skirtingBoardTableTopsCount +
        state.washingMachine.washingMachineCount +
        state.backLighting.backLightingCount +
        state.filter.filterCount +
        state.sinks.sinksCount;

    return (
        <div className="App">

            <div>
                <SelectWithNumber optionArray={state.floors.floorsOptionArray}
                                  changeCount={dispatch}
                                  name={state.floors.name} actionType={CHANGE_FLOOR}/>
                <SelectWithNumber optionArray={state.aprons.apronsOptionArray}
                                  changeCount={dispatch} name={state.aprons.name}
                                  actionType={CHANGE_APRONS}/>
                <SelectWithNumber optionArray={state.tableTops.tableTopsOptionArray}
                                  changeCount={dispatch} name={state.tableTops.name}
                                  actionType={CHANGE_TABLETOPS}/>
                <SelectWithCheckbox optionArray={state.cutOuts.cutOutsOptionArray} changeCount={dispatch}
                                    actionType={CHANGE_CHECKED}
                                    name={state.cutOuts.name}/>
                <SelectComponent optionArray={state.cookingPanels.cookingPanelsOptionArray}
                                 changeCount={dispatch} name={state.cookingPanels.name}
                                 actionType={CHANGE_COOKINGPANELS}/>
                <SelectComponent optionArray={state.sinks.sinksOptionArray} name={state.sinks.name}
                                 changeCount={dispatch}
                                 actionType={CHANGE_SINKS}/>
                <SelectComponent optionArray={state.mixerTap.mixerTapOptionArray} name={state.mixerTap.name}
                                 changeCount={dispatch}
                                 actionType={CHANGE_MIXERTAP}/>
            </div>
            <div>
                <SelectComponent optionArray={state.rangeHood.rangeHoodOptionArray} name={state.rangeHood.name}
                                 changeCount={dispatch}
                                 actionType={CHANGE_RANGEHOOD}/>
                <SelectComponent optionArray={state.four.fourOptionArray} changeCount={dispatch} actionType={CHANGE_FOUR}
                                 name={state.four.name}/>
                <SelectComponent optionArray={state.microwave.microwaveOptionArray} changeCount={dispatch}
                                 actionType={CHANGE_MICROWAVE} name={state.microwave.name}/>
                <SelectComponent optionArray={state.dishwasher.dishwasherOptionArray} changeCount={dispatch}
                                 actionType={CHANGE_DISHWASHER} name={state.dishwasher.name}/>
                <SelectWithNumber optionArray={state.skirtingBoardTableTops.skirtingBoardTableTopsOptionArray}
                                  changeCount={dispatch} actionType={CHANGE_SKIRTINGBOARD}
                                  name={state.skirtingBoardTableTops.name}/>
                <SelectComponent optionArray={state.washingMachine.washingMachineOptionArray} changeCount={dispatch}
                                 actionType={CHANGE_WASHINGMACHINE} name={state.washingMachine.name}/>
                <SelectComponent optionArray={state.backLighting.backLightingOptionArray} changeCount={dispatch}
                                 actionType={CHANGE_BACKLIGHTING} name={state.backLighting.name}/>
                <SelectComponent optionArray={state.filter.filterOptionArray} changeCount={dispatch}
                                 actionType={CHANGE_FILTER} name={state.filter.name}/>
            </div>


          <div>
              <CountField count={totalCount} changeCount={dispatch} actionType={RESET_ALL}/>
          </div>
        </div>
    );
}

export default App;
