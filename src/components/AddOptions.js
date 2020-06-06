import React from 'react';

class AddOptions extends React.Component
{
    state = {
        error: undefined
    };
    handleAddOption = (e) =>
    {
        e.preventDefault();
        const values = e.target.elements.hello.value.trim();
        e.target.elements.hello.value = '';
        const error = this.props.handleNewOption(values);
        this.setState(() => ({ error}));
    };
    deletepick = () =>
    {
        alert('deletepick');
    };
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'> {this.state.error}</p>}
                <form onSubmit={this.handleAddOption} className='add-option'>
                    <input className='add-option__input' type='text' name='hello'/>
                    <button className='r-button'>Add Options</button>
                </form>
            </div>
        );
    }
}
export default AddOptions;