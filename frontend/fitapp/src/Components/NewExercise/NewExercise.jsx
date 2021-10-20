import React, { Component } from 'react'

const localHost = 'http://localhost:3003/exercise'

class NewExercise extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: '',
            bodyPart: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch(localHost, {
          method: 'POST',
          body: JSON.stringify({
              title: this.state.title,
              url: this.state.url  
            }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(resJson => {
            this.props.handleAddExercise(resJson)
            this.setState({
              title: '',
              url: ''
            })
          })
          .catch(error => console.log({'Error' : error}))
    }

    render() {
        return(
            <div>
                <h1>New Exercise</h1>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="title"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Exercise Name"
                        onChange={ this.handleChange }
                        value={ this.state.name }
                    />
                    <label htmlFor="title"></label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        placeholder="Enter Exercise Type"
                        onChange={ this.handleChange }
                        value={ this.state.type }
                    />
                    <label htmlFor="title"></label>
                    <input
                        type="text"
                        id="muscleGroup"
                        name="muscleGroup"
                        placeholder="Enter Muscle Group"
                        onChange={ this.handleChange }
                        value={ this.state.bodyPart }
                    />
                    <input
                        type="submit"
                        value="Add Exercise"
                    />
                </form>
            </div>
        )
    }
}

export default NewExercise