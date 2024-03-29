import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {productsActions} from '../../_actions';

import { ruLang as lang, table_localization as localization } from "../../_constants";
import { ProductGrid } from '../../_components';

class CategoryPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAll();
  }

  render() {
    var products;
    var { dataproducts } = this.props;
    try {
      products = dataproducts.items;
      console.log(products)
    } catch (e) {
      console.log(e);
    }

    return (
      <div>
        <div className="App">

            {products &&
              <ProductGrid
              data = {products}
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
  const { dataproducts, authentication } = store;
  const { user } = authentication;
  return {
    user,
    dataproducts
  };
};

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(productsActions.getAll()),
})

const connectedCategoryPage = connect(mapStateToProps,mapDispatchToProps)(CategoryPage);
export { connectedCategoryPage as CategoryPage };
