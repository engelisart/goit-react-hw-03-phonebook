import React from 'react';
import { ContactsForm, LabelForm, Input, Button } from './ContactForm.styled';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactsForm onSubmit={this.handleSubmit}>
        <LabelForm>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </LabelForm>
        <LabelForm>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            required
          />
        </LabelForm>
        <Button type="submit">Add Contact</Button>
      </ContactsForm>
    );
  }
}
