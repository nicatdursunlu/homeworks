import React, {useState} from 'react';
// import {Module} from './Components/Module';
import Button from './Components/Button';

import {Modal} from './Components/Modal';

import './styles.scss';

function App(props) {

  const [firstModalStatus, setFirstModalStatus] = useState(false);
  const [secondModalStatus, setSecondModalStatus] = useState(false);

  const toggleFirstModal = () => setFirstModalStatus (v => !v);
  const toggleSecondModal = () => setSecondModalStatus (v => !v);
  const firstModalClose = () => setFirstModalStatus(false);
  const secondModalClose = () => setSecondModalStatus(false);
 
  return (
    <div className="App">

      { firstModalStatus ? <div onClick={firstModalClose} className="back-drop"></div> : null }
      { secondModalStatus ? <div onClick={secondModalClose} className="back-drop"></div> : null }

      <Button
        backgroundColor='red'
        text='Open the first modal window'
        onClick={toggleFirstModal} 
      /> 

      <Button
        backgroundColor='green'
        text='Open the second modal window'
        onClick={toggleSecondModal}  
      /> 


    

      {firstModalStatus && (
        <Modal
        show={firstModalStatus}
        closing={firstModalClose}
        header='Do you want to delete this file?'
        closeIcon={true}
        text={`Once you delete this file, it won't be possible to undo this action.\n
              Are you sure you want do delete it`}
        close={toggleFirstModal}
        actions={[
          <Button
            key={1}
            backgroundColor='rgba(0,0,0,0.2)'
            text='Ok'
            onClick={() => alert('File deleted')}
          />,
          <Button
            key={2}
            backgroundColor='rgba(0,0,0,0.2)'
            text='Cancel'
            onClick={toggleFirstModal} 
          />]}  
        />
      )}

      {secondModalStatus && (
        <Modal
          show={secondModalStatus}
          closing={secondModalClose}
          header='Do you want to save changes?'
          closeIcon={true}
          text={`Once you do not save this file, it won't be possible to open this file. \n
          Are you sure you want save it`}
          close={toggleSecondModal}
          actions={[
            <Button
              key={1}
              backgroundColor='rgba(0,0,0,0.2)'
              text='Ok'
              onClick={() => alert('File saved successfully') } 
            />,
            <Button
            key={2}
            backgroundColor='rgba(0,0,0,0.2)'
            text='Cancel'
            onClick={toggleSecondModal} 
          />]}
        />
      )}



    </div>
  );
}

export default App;
