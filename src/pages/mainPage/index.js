import React from 'react';
import { connect } from 'react-redux';

import { fetchCategories } from '../../redux/actions';
import { 
  ContainerDiv,
  CategoryContainer,
  CategoryLink
} from './style';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderCategoryList() {
    const categoryList = this.props.categories.map(category => {
      return (
        <CategoryContainer key={category.id}>
          <CategoryLink to={`/categories/${category.id}`}>
            {category.name}
          </CategoryLink>          
        </CategoryContainer>
      )      
    })
    return categoryList;
  }

  render() {
    return (
      <ContainerDiv>
        {this.renderCategoryList()}
      </ContainerDiv>
    )
  }  
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, {fetchCategories})(MainPage);