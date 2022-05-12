// Container component for Dialogs
// message_text changes every keyboard hit by callbacks (FLUX)

import Dialogs from './Dialogs'
import { setMessageTextCreator } from '../../state/dialogs-reducer'
import { addMessageActionCreator } from '../../state/dialogs-reducer'
import { connect } from 'react-redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

function mapStateToProps(state) {
    return {
        state: state,
        message_text: state.dialogs.message_text,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setMessageText: (value) => { dispatch(setMessageTextCreator(value)) },
        addMessage: () => { dispatch(addMessageActionCreator()) }
    }
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)