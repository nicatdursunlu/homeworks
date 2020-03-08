import React, {useState} from 'react';
import {Module} from './Components/Module';
import Button from './Components/Button';

import './styles.scss';

function App() {

  const [firstModalStatus, setFirstModalStatus] = useState(false);
  const [secondModalStatus, setSecondModalStatus] = useState(false);

  const toggleFirstModal = () => setFirstModalStatus (v => !v);
  const toggleSecondModal = () => setSecondModalStatus (v => !v);

  return (
    <div className="App">
      
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
                          <Module
                            header='Do you want to delete this file?'
                            closeIcon={true}
                            text="Once you delete this file, it won't be possible to undo this action
                                  Are you sure you want do delete it"
                            close={toggleFirstModal}
                            actions={[
                              <Button
                              key={1}
                              backgroundColor='rgba(0,0,0,0.2)'
                              text='Ok'
                              onClick={() => alert('File deleted')} />,

                              <Button
                              key={2}
                              backgroundColor='rgba(0,0,0,0.2)'
                              text='Cancel'
                              onClick={toggleFirstModal} /> ]}  />
       )}

      {secondModalStatus && (
                          <Module
                            header='Do you want to save changes?'
                            closeIcon={true}
                            text="Once you do not save this file, it won't be possible to undo this action
                                  Are you sure you want save it"
                            close={toggleSecondModal}
                            actions={[
                              <Button
                              key={1}
                              backgroundColor='rgba(0,0,0,0.2)'
                              text='Ok'
                              onClick={() => alert('File saved successfully') } />,

                              <Button
                              key={2}
                              backgroundColor='rgba(0,0,0,0.2)'
                              text='Cancel'
                              onClick={toggleSecondModal} /> ]}  />
      )}



    </div>
  );
}

export default App;
