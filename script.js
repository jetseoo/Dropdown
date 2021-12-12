const options = [
  { value: 'bmw', label: 'bmw' },
  { value: 'audi', label: 'audi' },
  { value: 'tesla', label: 'tesla' },
];

const random = {
  value1: 'Значение 1',
  'key': 2,
  value3: 'Значение 3',
  value: 4
}

const primitive = [1, 2, 'три', 'четыре'];



function convertInputForSelect(input) {

  for (let i in input) {
    let child = input[i]

    if (typeof child === 'object') {
      return input;
    }

    if ( child !== 'object' ) {
      let newArray = [];

      for (let i in input) {
        newArray[`${i}`] = {
          value: `${input[i]}`,
          label: `${input[i]}`,
        }
      }
      return newArray;
    } else {
      return input;
    }
  }
}


function createSelect(arr, selectedValue = 0) {  

  let select = document.createElement('select');
  document.body.appendChild(select);

  let newArr = convertInputForSelect(arr);

  for (let prop in newArr) {
    let option = document.createElement('option');
    let obj = newArr[prop];

    option.setAttribute('value', obj.value);
    option.setAttribute('label', obj.label);

    select.appendChild(option);
  }

  if (selectedValue > select.childNodes.length - 1) {
    selectedValue = 0;
  }
  select[selectedValue].setAttribute('selected', 'selected');
}