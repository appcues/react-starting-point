import React, {Component} from 'react';

// http://localhost:4000/buildings/:building_id

class PropertyDescription extends Component {

  render() {

    const { match: { params: { building_id }}} = this.props;

    return (
      <div>
        {building_id}
      </div>
    )
  }

}

export default PropertyDescription;