import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryType } from '../actions/types';

class PokedexSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.queryType(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form id='searchBar' onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get types list"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ queryType }, dispatch);
}

export default connect(null, mapDispatchToProps)(PokedexSearchBar);