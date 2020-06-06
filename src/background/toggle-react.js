class Visibility extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: true
        }
    }

    handleToggle()
    {
        this.setState((flag) =>
        {
            return {
                visibility: !flag.visibility
            }
        });

        console.log(this.state.visibility)
    }

    render()
    {
        return (
            <div>
                <button onClick={this.handleToggle}>{this.state.visibility === true ? 'Hide Details':'Show Details'}</button>
                {this.state.visibility && <p>What's Up Bitches</p>}
            </div>
        );
    }
}

ReactDOM.render(<Visibility/>,document.getElementById('test'));