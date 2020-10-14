import React from 'react';

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatPositiveNegative(value) {
  const money = moneyFormatter.format(value);
  if (value >= 0) {
    return `+${money}`;
  }

  return money;
}

function formatMoney(value) {
  return moneyFormatter.format(value);
}

function formatPercent(value) {
  return value.toFixed(2).replace('.', ',') + '%';
}

export default function Installment({ data }) {
  const { id, value, difference, percentage, profit } = data;
  const classPositiveValue = 'green-text darken-4';
  const classPositivePercent = 'green-text darken-4';
  const classNegativeValue = 'red-text darken-4';
  const classNegativePercent = 'red-text darken-4';

  const classValue = profit ? classPositiveValue : classNegativeValue;
  const classPercent = profit ? classPositivePercent : classNegativePercent;

  return (
    <div className="col s6 m3 l2">
      <div style={styles.flexRow}>
        <span>
          <strong>{id}</strong>
        </span>
        <div>
          <div className={classValue}>{formatMoney(value)}</div>
          <div className={classValue}>{formatPositiveNegative(difference)}</div>
          <div className={classPercent}>{formatPercent(percentage)}</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flexStart',

    border: '1px solid lightgrey',
    borderRadius: '4px',
    padding: '4px',
    margin: '4px',
  },
};
