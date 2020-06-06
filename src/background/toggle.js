let flag =false;

const toggler = () => {
        flag = !flag;
        rerender();
};
const root = document.getElementById('test');
const rerender = () =>
{
    const template =
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggler}>{flag === false ? 'Show Details' : 'Hide Details'}</button>
            {flag === true && (
                <div>
                    <h1>SUPRISE!!!</h1>
                <p>Hey There!</p>
                </div>
            )}
        </div>;
    ReactDOM.render(template,root);
};
rerender();

