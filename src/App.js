// src/App.js
import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import { TextInput, NumericInput } from './Input';
import Select from './Select';
import './App.css';

function App() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const handleSave = () => {
    const priceWithoutCommas = price.replace(/,/g, '');
    alert(JSON.stringify({ name, price: priceWithoutCommas }));
  };

  return (
    <div className="App">
      {/* <h1>Practice Page with Modals, Buttons, Inputs, and Select</h1> */}
      
      <h1>Buttons</h1>
      <Button primary icon="🚀">Primary</Button>
      <Button secondary icon="✨">Secondary</Button>
      <Button success icon="✅">Success</Button>
      <Button warning icon="⚠️">Warning</Button>
      <Button danger icon="❌">Danger</Button>
      <Button link icon="🔗">Link</Button>

      <h1>Input</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <TextInput label="Name:" value={name} onChange={(e) => setName(e.target.value)} />
        <NumericInput label="Price:" value={price} onChange={(e) => setPrice(e.target.value)} />
        <Button primary type="submit">Save</Button>
      </form>

      <h1>Modals</h1>
      <Button primary onClick={() => setShowModal1(true)}>Open Modal</Button>
      <Button secondary onClick={() => setShowModal2(true)}>Open Modal</Button>

      <Modal show={showModal1} onClose={() => setShowModal1(false)} preventCloseOnOverlayClick={true}>
        <p>
          There are two close and confirm buttons, and the modal does not close when you click the outside area.
          When pressed the confirm button, the log will be shown on console.
        </p>
        <Button onClick={() => setShowModal1(false)}>Cancel</Button>
        <Button onClick={() => setShowModal1(false)}>OK</Button>
      </Modal>

      <Modal show={showModal2} onClose={() => setShowModal2(false)}>
        <p>
          There is one close button, and the modal closes when you click the outside area.
        </p>
        <Button onClick={() => setShowModal2(false)}>Close</Button>
      </Modal>
      <h1>Select</h1>
      <div>
        <Select
        // label="Options:"
        options={[' ', 'React', 'Javascript', 'Python']}
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
      />
      </div>
      
    </div>
  );
}

export default App;
