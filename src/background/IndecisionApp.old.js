import React from 'react';
import Header from './Header';
import AddOptions from './AddOptions';
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionsModal";

class IndecisionApp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.deleteall = this.deleteall.bind(this);
        this.handleNewOptions = this.handleNewOptions.bind(this);
        this.whatShouldIDo = this.whatShouldIDo.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.removeModel = this.removeModel.bind(this);
        this.state = {
            options: [],
            selectedOption: undefined
        }
    }

    removeModel()
    {
        this.setState(() => ({ selectedOption: undefined }))
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
        const selectedOptionR = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.setState(() => ({selectedOption: selectedOptionR}));
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

                <OptionModal
                    option={this.state.selectedOption}
                    hide={this.removeModel}
                >
                </OptionModal>

            </div>

        );
    }


}

export default IndecisionApp;