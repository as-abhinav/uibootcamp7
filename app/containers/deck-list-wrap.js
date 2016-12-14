import React from 'react'
import {connect} from "react-redux"
import {requestTweets} from '../actions/handles'

import DeckListWrap from '../components/deck-list-wrap'

const mapStateToProps = (state) => {
	return {
		handles: state.handles
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onViewMounted: (handle) => {
			dispatch(requestTweets(handle))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListWrap)