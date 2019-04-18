import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: '',
        }

        this.state = this.initialState
    }
	//following the event to change the form status
    handleChange = event => {
        const {name, value}= event.target   //event will run everytime when a field is changed
        this.setState({
            [name]: value,    //something similar to a dictionary, but as a class
        })
    }
	//rerender the form
    render() {
        const{ name, job }=this.state;
        return (
            <form>
                <lable>Name</lable>
                
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}/>
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange}/>
                <input type="button" value="Submit" onClick={this.submitForm}/> };
            </form>
        );
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
}
    export default Form;
