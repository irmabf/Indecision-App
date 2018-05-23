'use strict';

//By default the item shouldn´t be visible
var visibility = false;

//Create function toggleVisibility
var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};
//Create our render function for the component
var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey. These are some details you can now see.'
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};
//Render the component
render();
