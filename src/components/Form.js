import React from 'react';

export default function Form({ data, onChangeData }) {
  const { initialValue, monthlyPeriod, monthlyInterest } = data;

  const handleChangeInitialValue = (event) => {
    onChangeData(event.target.value, null, null);
  };

  const handleChangeMonthlyInterest = (event) => {
    onChangeData(null, event.target.value, null);
  };

  const handleChangeMonthlyPeriod = (event) => {
    onChangeData(null, null, event.target.value);
  };

  return (
    <div className="center row">
      <div className="col input-field s6 m4 l3">
        <input
          id="inputInitialValue"
          type="number"
          value={initialValue}
          min="100"
          onChange={handleChangeInitialValue}
        />
        <label htmlFor="inputInitialValue" className="active">
          Montante inicial
        </label>
      </div>

      <div className="col input-field s6 m4 l3">
        <input
          id="inputMonthlyInterest"
          value={monthlyInterest}
          type="number"
          min="-12"
          max="12"
          step="0.1"
          onChange={handleChangeMonthlyInterest}
        />
        <label htmlFor="inputMonthlyInterest" className="active">
          Taxa de juros inicial
        </label>
      </div>

      <div className="col input-field s6 m4 l3">
        <input
          id="inputMonthlyPeriod"
          value={monthlyPeriod}
          type="number"
          min="1"
          step="36"
          onChange={handleChangeMonthlyPeriod}
        />
        <label htmlFor="inputMonthlyPeriod" className="active">
          Quantidade de períodos
        </label>
      </div>
    </div>
  );
}
