import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSearchByDateOptions } from './actions'
class Select extends Component {
  constructor(props){
    super(props)
    this.get = this.props.getSearchByDateOptions()
  }
  render() {
    const {
      items
    } = this.props
    console.log(this.props)
    
    return (
      <>
        <select name="cars" id="cars">
          {items.map(item =>(<option key={item} value={item}>{item}</option>))}
        </select>
        <br />
        <input type="submit" value="Submit" />
      </>
    )
  }
}
const mapStateToProps = store => ({
  items: store.itemsMenuState.itemsMenu
})
const mapDispatchToProps = dispatch => 
  bindActionCreators({ getSearchByDateOptions }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Select)