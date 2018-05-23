'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

/**
 * This function is going to get called with the submit event,
which means that we are gonna get the e object back
which contains various informations about the events,
this means that we need to prevent the default behaviour
e.preventDefault stops the page from refresh on submit
and instead, we run the code to perform what we want to happen
on submit
 */
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  /*e.target points to the element which started the event
  which was the form,in our form we have access to elements,
  so e.target.elements and this contains a list of all of the
  elements and they are listed by names so, e.target.elemetns.option,
  no we just need .value to get the value e.target.elements.option.value**/
  var option = e.target.elements.option.value;

  if (option) {
    //we push into the array of options into our app object above
    app.options.push(option);
    //After we add the input into the array we need to clear the input
    e.target.elements.option.value = '';
  }
  render();
};
//JSX - Javascript XML

//Create  "Remove All" button above list
//onccli wipe all  and redender
var appRoot = document.getElementById('app');
var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
