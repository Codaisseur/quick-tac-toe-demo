import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Tile from '../components/Tile'
import './Game.css'

class Game extends PureComponent {
  takeTile = index => () => {
    this.props.dispatch({
      type: 'TAKE_TILE',
      payload: index
    })
  }

  renderTile = (value, index) => {
    return <Tile key={index} onClick={this.takeTile(index)} value={value} />
  }

  render() {
    return (
      <div className="Game">
        {this.props.game.map(this.renderTile)}
      </div>
    )
  }
}

const mapStateToProps = ({ game }) => ({ game })

export default connect(mapStateToProps)(Game)
