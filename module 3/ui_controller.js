import MaskInput from 'mask-input';

export default class UIController {
  constructor() {
    this.cardInput = document.getElementById('card');
    this.nameInput = document.getElementById('name');
    this.button = document.getElementById('get');
    this.loader = document.getElementById('loader');

    this.nameValid = false;
    this.cardValid = false;

    this.initCardInput();
    this.initNameInput();
  }

  validateButton() {
    if (this.nameValid && this.cardValid) {
      this.button.removeAttribute('disabled');
    } else {
      this.button.setAttribute('disabled', true);
    }
  }

  onButtonClick(getInfo) {
    this.button.addEventListener('click', () => {
      const cardValue = this.cardInput.value.split('-').join('');
      const cached = localStorage.getItem(cardValue);

      if (cached) {
        this.generateTable(JSON.parse(cached));
      } else {
        this.loader.style.display = 'inline';
        getInfo(cardValue)
          .then((result) => {
            this.generateTable(result);
            this.loader.style.display = 'none';
          });
      }
      // cb(this.cardInput.value.replace(/-/, ''));
    });
  }

  initNameInput() {
    this.nameInput.addEventListener('change', () => {
      const result = /^[A-я]{2,}$/.test(this.nameInput.value);
      this.nameValid = result;
      let color;

      if (result) {
        color = 'green';
      } else {
        color = 'red';
      }
      
      this.nameInput.style.border = `1px solid ${color}`;
      this.validateButton();
    });
  }

  initCardInput() {
    const maskInput = new MaskInput(this.cardInput, {
      mask: '0000-0000-0000-0000',
      alwaysShowMask: true,
      maskChar: '_',
      onChange: () => {
        const result = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(this.cardInput.value);
        this.cardValid = result;
        let color;

        if (result) {
          color = 'green';
        } else {
          color = 'red';
        }
        
        this.cardInput.style.border = `1px solid ${color}`;
        this.validateButton();
      },
    });
  }

  removeTable() {
    if (this.table) {
      this.table.remove();
    }
  }

  generateTable(obj) {
    this.removeTable();
    this.table = document.createElement('table');
    this.table.id = 'table';

    for (const i in obj) {
      const tr = document.createElement('tr');
      const name = document.createElement('td');
      const value = document.createElement('td');

      name.innerHTML = i[0].toUpperCase() + i.slice(1);
      value.innerHTML = obj[i] || 'Unknown';

      tr.appendChild(name);
      tr.appendChild(value);
      this.table.appendChild(tr);
    }

    document.body.appendChild(this.table);
  }
}
