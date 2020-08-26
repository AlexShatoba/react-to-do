import React from 'react';
import './list-component.css';

export const AddFolder = (props) => {
  const addFolder = () => {
    props.addFolder();
  }


  return (
    <input type="button" click={addFolder}/>
  );
}