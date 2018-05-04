import React from 'react';

export default class ListItem extends React.Component {
  handleClick = () => {
    this.setState({ show: !this.state.show})
  }
  render() { return (
    <div className="widget">
      <h3 className="sb-title open">Specialism</h3>
      <div className="specialism_widget">
        <div className="simple-checkbox scrollbar">
          <p><input type="checkbox" name="spealism" id="as"/><label for="as">Accountancy (2)</label></p>
          <p><input type="checkbox" name="spealism" id="asd"/><label for="asd">Banking (2)</label></p>
          <p><input type="checkbox" name="spealism" id="errwe"/><label for="errwe">Charity & Voluntary (3)</label></p>
          <p><input type="checkbox" name="spealism" id="fdg"/><label for="fdg">Digital & Creative (4)</label></p>
          <p><input type="checkbox" name="spealism" id="sc"/><label for="sc">Estate Agency (3)</label></p>
          <p><input type="checkbox" name="spealism" id="aw"/><label for="aw">Graduate (2)</label></p>
          <p><input type="checkbox" name="spealism" id="ui"/><label for="ui">IT Contractor (7)</label></p>
          <p><input type="checkbox" name="spealism" id="saas"/><label for="saas">Charity & Voluntary (3)</label></p>
          <p><input type="checkbox" name="spealism" id="rrrt"/><label for="rrrt">Digital & Creative (4)</label></p>
          <p><input type="checkbox" name="spealism" id="eweew"/><label for="eweew">Estate Agency (3)</label></p>
        </div>
      </div>
    </div>
  )};
}
