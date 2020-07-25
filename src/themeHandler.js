import constants from './constants';

const themeHandler = () => {
  const radioGroup = document.createElement('div');
  radioGroup.setAttribute('id', 'theme');

  constants.theme.forEach((themeColor, index) => {
    const radioButton = document.createElement('input');
    radioButton.setAttribute('type', 'radio');
    radioButton.setAttribute('name', 'theme');

    radioButton.setAttribute('id', themeColor);
    radioButton.setAttribute('value', themeColor);
    if(index === 0) {
      radioButton.setAttribute('checked', 'true');
    }

    const radioLabel = document.createElement('label');
    radioLabel.setAttribute('for', themeColor);
    radioLabel.innerText = themeColor;
    radioGroup.append(radioButton, radioLabel);
  });

  document.body.appendChild(radioGroup);

  const theme = document.getElementById('theme');
  theme.onclick = event => {
    document.body.style.backgroundColor = event.target.value;
  }
};

module.hot.accept('./constants', function () {
  const theme = document.getElementById('theme');
  document.body.removeChild(theme);
  themeHandler();
  module.hot.decline();
})

export default themeHandler;
