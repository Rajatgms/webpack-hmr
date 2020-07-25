import constants from './constants';

const titleElement = document.createElement('div');
titleElement.innerText = constants.title;

const descriptionElement = document.createElement('div');
descriptionElement.innerText = constants.description;

export default [titleElement, descriptionElement];
