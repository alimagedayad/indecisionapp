class InDecisionApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.addOption = this.addOption.bind(this);
        this.whatShouldIDO = this.whatShouldIDO.bind(this);
        this.deleteSpecificOption = this.deleteSpecificOption.bind(this);
        this.state =
            {
            options:[]
        }
    }

    deleteSpecificOption(s_option)
    {
        this.setState((perV) => {
            return(
                {
                    options: perV.options.filter((word) => word !== s_option)
                })
        })
    }

    whatShouldIDO()
    {
        return alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
    }

    addOption(option)
    {
        if (this.state.options.indexOf(option) > -1)
        {
            return 'Duplicates is not allowed';
        }
        else if (!option)
        {
            return 'Empty String';
        }
        this.setState((perV) => (
            {
                options: perV.options.concat(option)
            }));
    }

    removeAll()
    {
        this.setState(() =>
        {
            return(
                {
                    options: []
                }

            )
        })
    }



    render()
    {
        return(
            <div>
                <Header />
                <Action action={this.state.options.length} whatshouldido={this.whatShouldIDO} />
                <Options options={this.state.options} deleteall={this.removeAll} deletespecific={this.deleteSpecificOption} />
                <AddOptions addNew={this.addOption} />
            </div>
        );
    }
}


const Action = (props) =>
{
    return (
        <div>
            <button disabled={!props.action > 0} onClick={props.whatshouldido}>What Should I do?</button>
        </div>
    );
};

class Options extends React.Component
{
    render() {
        return (
            <div>
                <p>{this.props.options.length}</p>
                <ul>
                    {
                        this.props.options.map((m) => (
                                <Option
                                    key={m}
                                    option={m}
                                    deletespecific={this.props.deletespecific}
                                />
                        ))
                    }
                </ul>
                <button onClick={this.props.deleteall}>Remove All</button>
            </div>
        );
    }
}

const Option = (props) =>
{
    return (
        <div>
            <li>{props.option}</li>
            <button
                onClick=
                    {(e) =>
                    {
                        props.deletespecific(props.option)
                    }} >Remove</button>
        </div>
    );
};

class AddOptions extends React.Component
{
    constructor()
    {
        super();
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {
            error:''
        }
    }
    formSubmit(e)
    {
        e.preventDefault();
        const options = e.target.elements.test.value.trim();
        const error_s = this.props.addNew(options);
        e.target.elements.test.value = '';
        this.setState(() => ({error: error_s}));
    }
    render() {
        return (
            <div>
                {this.state.error && this.state.error}
                <form onSubmit={this.formSubmit}>
                    <input type='text' name={'test'}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

const Header = (props) =>
{
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
};

Header.defaultProps = {
  title: 'Indecision App',
  subtitle: 'Let the computer decide for you.'
};

ReactDOM.render(<InDecisionApp/>, document.getElementById('test'));