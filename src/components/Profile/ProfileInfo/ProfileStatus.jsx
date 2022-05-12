// Component which displaing users status
import React from 'react'

class ProfileStatus extends React.Component {
    // local state, chages every keyboard hit, but real state changes when you click on free zone
    state = {
        editMode: false,
        status: this.props.status,
    }
    
    // editMode setter, changes real state, when you click on free zone
    setEditMode = (mode) => {
        this.setState({
            editMode: mode
        })
        this.props.updateStatus(this.state.status)
    }

    // local state setter, calls every keyboard hit
    onStatusChange = (value) => {
        this.setState({
            status: value
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.state.status
            })
        }
    }

    // displaing input or span status, it depends on what you keep mouse focus
    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ?
                        <div>
                            <input value={this.state.status} onChange={el => { this.onStatusChange(el.target.value) }} onBlur={() => {
                                this.setEditMode(false)
                                this.props.updateStatus(this.state.status)
                            }} autoFocus={true}></input>
                        </div>
                        :
                        <div>
                            <span onClick={() => { this.setEditMode(true) }}><b>status: </b> {this.props.status}</span>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus