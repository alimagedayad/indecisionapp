console.log('JSX is running!');

const strings =
    {
        title: "Hello World",
        subtitle: "A react app by Ali",
        options: ['']
    };

const formsubmit = (e) =>
{
    e.preventDefault();
    let options = e.target.elements.vop.value;
    strings.options.push(options);
    e.target.elements.vop.value = '';
    rerender();
};



const root = document.getElementById('test');

const removeall= () =>
{
    strings.options = [];
    rerender();
};

const rerender = () =>
{

    const template =
        <div>
            {(strings.subtitle) && <p>{strings.subtitle}</p>}
            <p>{(strings.options) && (strings.options.length > 0) ? ("Here's your options: " + strings.options.length) : "There's no options available atm."}</p>
            <ul>
                {
                    strings.options.map((e) =>
                    {
                        return <li key={e}>{e}</li>
                    })
                }
            </ul>
            <button onClick={removeall}>Remove All</button>
            <form onSubmit={formsubmit}>
                <input type='text' name='vop'/>
                <button>Click Me</button>
            </form>
        </div>;
    ReactDOM.render(template,root);
};


rerender();


