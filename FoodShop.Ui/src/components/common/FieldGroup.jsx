import React, { Component } from 'react';

import { ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class FieldGroup extends Component {
  renderLabel() {
    const { label, id, type } = this.props;
    if (!label) return;
    if (type === 'checkbox') {
      return <ControlLabel  id="samLabel" className="check-label black" htmlFor={id}><span/>{label}</ControlLabel>;
    }
    return <ControlLabel htmlFor={id}>{label}</ControlLabel>;
  }
  render() {
    const { help, type } = this.props;
    let { className } = this.props;
    if (!className) {
      className = '';
    }
    const label = this.renderLabel();
    return (
      <span className={className}>
        { type !== 'checkbox' && label }
        <FormControl {...this.props} />
        { type === 'checkbox' && label }
        {help && <HelpBlock>{help}</HelpBlock>}
      </span>
    );
  }
}

export default FieldGroup;