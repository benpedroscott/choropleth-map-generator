let statesArray1 = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas',];
let statesArray2 = ['Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York',];
let statesArray3 = ['North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];


function createTables() {

  for(let i = 0; i < statesArray1.length; i++){
    let stateName = statesArray1[i];

    let tableOne = document.getElementById("tableOne");
    let tableRow = document.createElement("tr");
    let stateCell = document.createElement('td');
    let valueCell = document.createElement('td');
    let valueCellField = document.createElement('input');
    valueCellField.setAttribute('type', 'number');

    tableRow;
    tableOne.appendChild(tableRow);

    stateCell;
    tableRow.appendChild(stateCell);
    stateCell.innerHTML = (stateName);

    valueCell;
    tableRow.appendChild(valueCell);
    valueCell.appendChild(valueCellField);
    valueCellField.setAttribute("id", statesArray3[i] + i);
  }

  for(let i = 0; i < statesArray2.length; i++){
    let stateName = statesArray2[i];

    let tableTwo = document.getElementById("tableTwo");
    let tableRow = document.createElement("tr");
    let stateCell = document.createElement('td');
    let valueCell = document.createElement('td');
    let valueCellField = document.createElement('input');
    valueCellField.setAttribute('type', 'number');

    tableRow;
    tableTwo.appendChild(tableRow);

    stateCell;
    tableRow.appendChild(stateCell);
    stateCell.innerHTML = (stateName);

    valueCell;
    tableRow.appendChild(valueCell);
    valueCell.appendChild(valueCellField);
    valueCellField.setAttribute("id", statesArray3[i] + i);
  }
  for(let i = 0; i < statesArray3.length; i++){
    let stateName = statesArray3[i];

    let tableThree = document.getElementById("tableThree");
    let tableRow = document.createElement("tr");
    let stateCell = document.createElement('td');
    let valueCell = document.createElement('td');
    let valueCellField = document.createElement('input');
    valueCellField.setAttribute('type', 'number');

    tableRow;
    tableThree.appendChild(tableRow);

    stateCell;
    tableRow.appendChild(stateCell);
    stateCell.innerHTML = (stateName);

    valueCell;
    tableRow.appendChild(valueCell);
    valueCell.appendChild(valueCellField);

    valueCellField.setAttribute("id", statesArray3[i] + i);
  }
}
