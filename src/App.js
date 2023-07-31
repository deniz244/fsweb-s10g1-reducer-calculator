import React from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import { useReducer } from "react";
import reducer from "./reducers";
import { initialState } from "./reducers";

//import { addOne } from "./actions";

import { CLEAR_DISPLAY, applyNumber } from "./actions";

import { changeOperator } from "./actions";

import { clearDisplay, concatNumber } from "./actions";

import {
  MEMORY_ADD,
  MEMORY_RECALL,
  MEMORY_CLEAR,
  EKRANA_YAZ,
  MEMORY_SUM,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*const handleAddOne = () => {
    dispatch(addOne()); 
  };*/

  const handleApplyNumber = (number) => {
    //dispatch(applyNumber(number));
    //dispatch({ type: EKRANA_YAZ, payload: number });
    dispatch(concatNumber(number));
  };

  const handleChangeOperator = (operation) => {
    dispatch(changeOperator(operation));
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handleOperatorMemory = (operation) => {
    dispatch(changeOperator(operation));
    dispatch({ type: MEMORY_ADD });
    dispatch({ type: CLEAR_DISPLAY });
  };

  /*
    + sayıya basıldıkça basılan sayı ekrandaki sayını sağına eklenecek

    + işleme basıldığında ekrandaki sayı memory'ye atılacak ekran sıfırlanacak ve işlem değişecek

   ekrandaki ve memory'deki = basıldığında sonuç gözükecek ---->>> tuşlara  = eklenecek
   */

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() =>
                  dispatch({
                    type: MEMORY_ADD,
                  })
                }
              />
              <CalcButton
                value={"MR"}
                onClick={() =>
                  dispatch({
                    type: MEMORY_RECALL,
                  })
                }
              />
              <CalcButton
                value={"MC"}
                onClick={() =>
                  dispatch({
                    type: MEMORY_CLEAR,
                  })
                }
              />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNumber(1)} />
              <CalcButton value={2} onClick={() => handleApplyNumber(2)} />
              <CalcButton value={3} onClick={() => handleApplyNumber(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumber(4)} />
              <CalcButton value={5} onClick={() => handleApplyNumber(5)} />
              <CalcButton value={6} onClick={() => handleApplyNumber(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumber(7)} />
              <CalcButton value={8} onClick={() => handleApplyNumber(8)} />
              <CalcButton value={9} onClick={() => handleApplyNumber(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => handleOperatorMemory("+")}
              />
              <CalcButton
                value={"*"}
                onClick={() => handleOperatorMemory("*")}
              />
              <CalcButton
                value={"-"}
                onClick={() => handleOperatorMemory("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay} />
              <CalcButton
                value={"="}
                onClick={() =>
                  dispatch({
                    type: MEMORY_SUM,
                  })
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
