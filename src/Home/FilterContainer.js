import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentFilter from 'material-ui/svg-icons/content/filter-list'
import Dialog from 'material-ui/Dialog'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import { setFilter } from './HomeActionCreators.js'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

const styles = {
  radioButton: {
    marginBottom: 16,
  },
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter))
  }
})


class FilterButton extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose} />,
      <FlatButton
        label="Filter"
        primary={true}
        onClick={this.handleClose} />,
    ];
    return (
      <div>
        <FloatingActionButton style={{ margin: 16, position: "absolute", bottom: 0, right: 0 }}
          onClick={this.handleOpen}>
          <ContentFilter />
        </FloatingActionButton>

        <Dialog
          title="Select Todos to show"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
              value="ALL"
              label="All"
              style={styles.radioButton} />
            <RadioButton
              value="ACTIVE"
              label="Active"
              style={styles.radioButton} />
            <RadioButton
              value="COMPLETED"
              label="Completed"
              style={styles.radioButton} />
          </RadioButtonGroup>
        </Dialog>
      </div>
    )
  }
}

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton)

export default FilterContainer