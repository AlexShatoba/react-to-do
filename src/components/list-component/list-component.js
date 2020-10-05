import React from 'react';
import './list-component.css';
import PropTypes from 'prop-types'
export function ListComponent(props) {
  const [taskName, setTaskName] = React.useState('');

  function taskNameChange(event) {
    setTaskName(event.target.value);
    console.log('taskNameChange', event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault()
    console.log('click', event);
  }

  return (
    <div>
      <form className="add-task-container" onSubmit={onSubmit}>
        <input className="task-name" onChange={taskNameChange} value={taskName}></input>
        <button className="add-task" type="submit"></button>
      </form>
      {/* <ListItem /> */}
    </div>
  )
}

ListComponent.propTypes = {

}