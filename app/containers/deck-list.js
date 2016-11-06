import React from 'react'
import {connect} from "react-redux"

import DeckList from '../components/deck-list'

const mapStateToProps = (state) => {
	return {
		handles: state.handles
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)