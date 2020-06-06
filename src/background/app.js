class IndecisionApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.deleteall = this.deleteall.bind(this);
        this.handleNewOptions = this.handleNewOptions.bind(this);
        this.whatShouldIDo = this.whatShouldIDo.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount()
    {
        try
        {
            const options = JSON.parse(localStorage.getItem('options'));
            if(options)
            {
                this.setState(() => ({ options }))
            }
        }
        catch (e)
        {
            console.log('Catch');
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    handleNewOptions(newOption)
    {
        if (!newOption)
        {
            return 'Enter valid value to add item.';
        }
        else if (this.state.options.indexOf(newOption) > -1)
        {
            return 'Duplicates is not allowed. '
        }
        this.setState((prv) => ({ options: prv.options.concat(newOption) }));

    }

    handleDeleteOption(OptionToRemove)
    {
        this.setState((pervState) => ({
                options: pervState.options.filter((word) => OptionToRemove !== word)
            }));
    }
    whatShouldIDo()
    {
        return alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }

    deleteall()
    {
        this.setState(() => ({  options: []}));
    }

    render()
    {
        let title = "Indecision App";
        let subtitle = "Let your life in the hands of the computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    isEnabled={this.state.options.length > 0}
                    shouldIDO={this.whatShouldIDo}
                />
                <Options
                    options={this.state.options}
                    deleteall = {this.deleteall}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleNewOption={this.handleNewOptions}
                />
            </div>
        );
    }


}
const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
};

class Action extends React.Component
{
    render() {
        return (
            <div>
                <button disabled={!this.props.isEnabled} onClick={this.props.shouldIDO}>What Should I Do?</button>
            </div>
        );
    }
}

const Options = (props) =>
{
    return(
        <div>
            <p>Length: {props.options.length}</p>
            <div>

                <ul>
                    {
                        props.options.map((option) => (
                            <Option
                                key={option}
                                optionText={option}
                                handleDeleteOption={props.handleDeleteOption}

                            />))
                    }
                </ul>
            </div>
            <button onClick={props.deleteall}>Delete All</button>
        </div>
    );
};

class AddOptions extends React.Component
{
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        };
    }

    handleAddOption(e)
    {
        e.preventDefault();
        const values = e.target.elements.hello.value.trim();
        e.target.elements.hello.value = '';
        const error = this.props.handleNewOption(values);
        this.setState(() => ({ error}));
    }
    deletepick()
    {
        alert('deletepick');
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='hello'/>
                    <button>Add Options</button>
                </form>
            </div>
        );
    }
}

const Option = (props) =>
{
        return(
            <div>
                <li>{props.optionText}</li>
                <button
                    onClick={(e) =>
                    {
                        props.handleDeleteOption(props.optionText)
                    }}
                >Remove</button>
            </div>
        );
};

ReactDOM.render(<IndecisionApp/>,document.getElementById('test'));