import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSearchByDateOptions, getDigimons } from './actions'
import { Options } from './Options';

class Select extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { getSearchByDateOptions, getDigimons } = this.props;
    getSearchByDateOptions()
    getDigimons()
  }

  render() {
    const {
      items,
      digimons
    } = this.props
    console.log(digimons)

    return (
      <>
        <select name="cars" id="cars">
          {items.map(item => (<Options key={item} item={item} />))}
        </select>
        <br />
        <input type="submit" value="Submit" />
      </>
    )
  }
}
const mapStateToProps = store => ({
  items: store.itemsMenuState.itemsMenu,
  digimons: store.itemsMenuState.digimons
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSearchByDateOptions, getDigimons }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Select)