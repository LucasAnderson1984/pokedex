import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTypes, destroyType } from '../actions/types';
import { Link } from 'react-router';

class TypeList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchTypes();
  }

  onDeleteClick(button) {
    if (confirm('Are you sure?'))
      this.props.destroyType(button.target.id)
        .then(() => {
          this.context.router.push('/types');
        });
  }

  renderType(type) {
    return (
      <tr key={type.id}>
        <td>{type.type}</td>
        <td>
          <nav>
            <Link
              to={ `types/${type.id}` }
              className='btn btn-default btn-sm glyphicon glyphicon-eye-open' />
            <Link
              to={ `types/edit/${type.id}` }
              className='btn btn-default btn-sm glyphicon glyphicon-pencil' />
            <button
              id={ type.id }
              onClick={ this.onDeleteClick.bind(this) }
              className='btn btn-danger btn-sm glyphicon glyphicon-trash' />
          </nav>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <h2>
            Types
            <nav className='pull-right'>
              <Link to='/types/new' className='btn btn-link'>
                New Type
              </Link>
            </nav>
          </h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.props.types.map((type) => this.renderType(type)) }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { types: state.types.all };
}

export default connect(mapStateToProps, { fetchTypes, destroyType })(TypeList);
