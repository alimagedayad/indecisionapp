class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.addOneHandle = this.addOneHandle.bind(this);
        this.removeOneHandle= this.removeOneHandle.bind(this);
        this.resetHandle = this.resetHandle.bind(this);
        this.state = {
            count: props.counter
        };
    }

    componentDidMount()
    {
        const count = JSON.parse(localStorage.getItem('count'));
        try
        {
                if(count)
                {
                    this.setState(() => ({ count }))
                }
        }
        catch (e)
        {

        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevState.count !== this.state.count.length)
        {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count',json);
        }
    }

    addOneHandle()
    {
        this.setState((oldNum) =>
        {
           return {
               count: oldNum.count + 1
            }

        });
    }
    removeOneHandle()
    {
        this.setState((oldNum) =>
        {
            return {
                count: oldNum.count - 1
            };
        });
    }
    resetHandle()
    {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render()
    {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button className={'btnM'} onClick={this.removeOneHandle}>-1</button>
                <button className={'btnR'} onClick={this.resetHandle}>Reset</button>
                <button className={'btnP'} onClick={this.addOneHandle}>+1</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    counter: 0
};

ReactDOM.render(<Counter />,document.getElementById('test'));