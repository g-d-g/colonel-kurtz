import Actions      from 'actions/blocks'
import Handle       from './toolbarHandle'
import Item         from './toolbarItem'
import React        from 'react'
import {Downstream} from 'microcosm'

export default React.createClass({
  mixins: [ Downstream ],

  propTypes: {
    block : React.PropTypes.object.isRequired
  },

  render() {
    return (
      <div className="col-toolbar">
        <Handle />
        <nav role="navigation" className="col-toolbar-menu">
          <Item ref="moveUp" label="Move Up" onClick={ this._onMoveUp } />
          <Item ref="moveDown" label="Move Down" onClick={ this._onMoveDown } />
          <Item ref="destroy" label="Remove" onClick={ this._onDestroy } />
        </nav>
      </div>
    )
  },

  _onDestroy(e) {
    this.send(Actions.destroy, this.props.block.id)
  },

  _onMoveUp(e) {
    this.send(Actions.shift, this.props.block.id, -1)
  },

  _onMoveDown(e) {
    this.send(Actions.shift, this.props.block.id, 1)
  }
})
