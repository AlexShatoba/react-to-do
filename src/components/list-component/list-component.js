import React from 'react';
import './list-component.css';

export class ListComponent extends React.Component {
  constructor() {
    super(props);
    this.
  }

  addFolder() {
    this.countOf
  }
  render() {
    return (
      <div>
      <AddFolder />
      <FolderContainer folder={this.folders} />
      <PontOfFolder points={this.points}/>
      </div>
    )
  }
}