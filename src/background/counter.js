let count = 0;

const addOne = () => {
    count++;
    rerender();
};

const constant = () => {
    count = 0;
    rerender();
};

const reOne = () => {
    count--;
    rerender();
};

const rerender = () =>
{
    const template3 =
        <div>
            <h1>Count : {count}</h1>
            <button className={'btnM'} onClick={reOne}>-1</button>
            <button className={'btnR'} onClick={constant}>Reset</button>
            <button className={'btnP'} onClick={addOne}>+1</button>
        </div>;
    ReactDOM.render(template3,root);
};

rerender();