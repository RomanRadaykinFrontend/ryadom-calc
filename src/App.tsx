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
import logoApron from './img/apron.jpg';
import logoskirtingBoardTableTops from './img/skirtingBoardTableTops.jpg';
import logotableTops from './img/tableTops.jpg';

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
            <div className={'categoriesWrap'}>

            <div>
                <SelectWithNumber optionArray={state.floors.floorsOptionArray}
                                  dispatch={dispatch}
                                  name={state.floors.name} actionType={CHANGE_FLOOR}/>
                <SelectWithNumber optionArray={state.aprons.apronsOptionArray}
                                  dispatch={dispatch} name={state.aprons.name}
                                  img={logoApron}
                                  actionType={CHANGE_APRONS}/>
                <SelectWithNumber optionArray={state.tableTops.tableTopsOptionArray}
                                  dispatch={dispatch} name={state.tableTops.name}
                                  img={logotableTops}
                                  actionType={CHANGE_TABLETOPS}/>
                <SelectWithCheckbox optionArray={state.cutOuts.cutOutsOptionArray} dispatch={dispatch}
                                    actionType={CHANGE_CHECKED}
                                    name={state.cutOuts.name}/>
                <SelectComponent optionArray={state.cookingPanels.cookingPanelsOptionArray}
                                 dispatch={dispatch} name={state.cookingPanels.name}
                                 actionType={CHANGE_COOKINGPANELS}/>
                <SelectComponent optionArray={state.sinks.sinksOptionArray} name={state.sinks.name}
                                 dispatch={dispatch}
                                 actionType={CHANGE_SINKS}/>
                <SelectComponent optionArray={state.mixerTap.mixerTapOptionArray} name={state.mixerTap.name}
                                 dispatch={dispatch}
                                 actionType={CHANGE_MIXERTAP}/>
            </div>
            <div>
                <SelectComponent optionArray={state.rangeHood.rangeHoodOptionArray} name={state.rangeHood.name}
                                 dispatch={dispatch}
                                 actionType={CHANGE_RANGEHOOD}/>
                <SelectComponent optionArray={state.four.fourOptionArray} dispatch={dispatch} actionType={CHANGE_FOUR}
                                 name={state.four.name}/>
                <SelectComponent optionArray={state.microwave.microwaveOptionArray} dispatch={dispatch}
                                 actionType={CHANGE_MICROWAVE} name={state.microwave.name}/>
                <SelectComponent optionArray={state.dishwasher.dishwasherOptionArray} dispatch={dispatch}
                                 actionType={CHANGE_DISHWASHER} name={state.dishwasher.name}/>
                <SelectWithNumber optionArray={state.skirtingBoardTableTops.skirtingBoardTableTopsOptionArray}
                                  img={logoskirtingBoardTableTops}
                                  dispatch={dispatch} actionType={CHANGE_SKIRTINGBOARD}
                                  name={state.skirtingBoardTableTops.name}/>
                <SelectComponent optionArray={state.washingMachine.washingMachineOptionArray} dispatch={dispatch}
                                 actionType={CHANGE_WASHINGMACHINE} name={state.washingMachine.name}/>
                <SelectComponent optionArray={state.backLighting.backLightingOptionArray} dispatch={dispatch}
                                 actionType={CHANGE_BACKLIGHTING} name={state.backLighting.name}/>
                <SelectComponent optionArray={state.filter.filterOptionArray} dispatch={dispatch}
                                 actionType={CHANGE_FILTER} name={state.filter.name}/>
            </div>
            </div>

          <div>
              <CountField count={totalCount} changeCount={dispatch} actionType={RESET_ALL}/>
          </div>
        </div>
    );
}

export default App;
