import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // contextType is a special property. Must be spelled this way and must be set to equal to the ContextComponent we just created
  // static assigns the contextType property to the Button class itself
  // You can declare Button.contextType = LanguageContext if you prefer to have it outside of the class
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className="ui button primary">{text}</button>;
  }
}

// Button.contextType = LanguageContext

export default Button;
