import React from 'react'
import {connect} from "react-redux"
import {PUSH} from 'redux-little-router'

import {fetchTweets} from '../actions/handles'
import HandleForm from '../components/handle-form'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onHandleSubmit: (handle) => {
			dispatch(fetchTweets(handle))

			dispatch({
				type   : PUSH,
				payload: '/deck'
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HandleForm)
