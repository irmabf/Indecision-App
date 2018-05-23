let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const removeOne = () => {
  if(count >0){
    count--;
    renderCounterApp();
  }
  return;

};
const reset = () => {
  count = 0;
  renderCounterApp();
}

const renderCounterApp = () => {
    const templateTwo = (
      <div>
        <h1>Count: { count }</h1>
        <button onClick={ addOne }  className="btn">+1</button>
        <button onClick={ removeOne }  className="btn">-1</button>
        <button onClick={ reset }  className="btn">Reset</button>
      </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();