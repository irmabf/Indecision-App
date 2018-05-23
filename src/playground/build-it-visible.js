//By default the item shouldn´t be visible
let visibility = false;

//Create function toggleVisibility
const toggleVisibility = () => {
  visibility = !visibility;
  render();

};
//Create our render function for the component
const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        { visibility ? 'Hide details' : 'Show details' }
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see.</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};
//Render the component
render();