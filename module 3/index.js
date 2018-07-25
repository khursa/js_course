import UIController from './ui_controller.js';
import CardData from './card_data.js';

const ui = new UIController();
const cardData = new CardData();

ui.onButtonClick(cardData.getInfo);

window.ui = ui;