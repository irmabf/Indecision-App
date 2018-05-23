console.log('App.js is running');

const app = {
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
const onFormSubmit = (e) => {
  e.preventDefault();
  /*e.target points to the element which started the event
  which was the form,in our form we have access to elements,
  so e.target.elements and this contains a list of all of the
  elements and they are listed by names so, e.target.elemetns.option,
  no we just need .value to get the value e.target.elements.option.value**/
  const option = e.target.elements.option.value;

  if (option){
    //we push into the array of options into our app object above
    app.options.push(option);
    //After we add the input into the array we need to clear the input
    e.target.elements.option.value = '';
  }
  render();
};

//JSX - Javascript XML

//Create  "Remove All" button above list
//oncclick wipe all  and redender

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  //generate a random numbers between the number of choices that are in the array
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={ app.options.length === 0  } onClick={ onMakeDecision }>What should I do</button>
      <button onClick={ onRemoveAll }>Remove All</button>
      <ol>
        {
          app.options.map( (option)=> <li key={option}>{ option }</li>)
        }
      </ol>
      <form onSubmit={ onFormSubmit }>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );


  ReactDOM.render(template, appRoot);
};

render();