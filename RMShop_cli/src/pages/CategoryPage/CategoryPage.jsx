import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {categoriesActions} from '../../_actions';

import { ruLang as lang, table_localization as localization } from "../../_constants";
import { ShopGrid } from '../../_components';

class CategoryPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAll();
  }

  render() {
    var categories;
    var { datacategories } = this.props;
    try {
      categories = datacategories.items;
    } catch (e) {
      console.log(e);
    }

    return (
      <div>
        <div className="App">

            {categories &&
              <ShopGrid
              data = {categories}
              columns = {4}
              />
        }
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = store => {
  const { datacategories, authentication } = store;
  const { user } = authentication;
  return {
    user,
    datacategories
  };
};

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(categoriesActions.getAll()),
})

const connectedCategoryPage = connect(mapStateToProps,mapDispatchToProps)(CategoryPage);
export { connectedCategoryPage as CategoryPage };
