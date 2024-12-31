import React, { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import ItemForm from './components/ItemForm';
import mainJjal from './static/main_jjal.png';

function App() {
  const [showMainPage, setShowMainPage] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [items, setItems] = useState([]);
  const [itemFields, setItemFields] = useState([{ name: '', type: 'subjective' }]);
  const [respondentCount, setRespondentCount] = useState(1);
  const [respondents, setRespondents] = useState(['']);

  const handleItemChange = (index, field, value) => {
    const newItemFields = [...itemFields];
    newItemFields[index][field] = value;
    setItemFields(newItemFields);
  };

  const addItemField = () => {
    setItemFields([...itemFields, { name: '', type: 'subjective' }]);
  };

  const saveItems = () => {
    const newItems = itemFields.filter(item => item.name).map(item => ({ name: item.name, type: item.type }));
    setItems([...newItems, ...items]);
    setItemFields([{ name: '', type: 'subjective' }]);
  };

  const handleRespondentChange = (index, value) => {
    const newRespondents = [...respondents];
    newRespondents[index] = value;
    setRespondents(newRespondents);
  };

  const addRespondent = () => {
    if (respondents.length < 10) {
      setRespondents([...respondents, '']);
    }
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const startAddingItems = () => {
    setShowMainPage(false);
    setShowOverlay(false);
  };

  return (
    <div className="App">
      {showMainPage ? (
        <MainPage startAddingItems={startAddingItems} backgroundImage={mainJjal} showOverlay={showOverlay} />
      ) : (
        <ItemForm
          itemFields={itemFields}
          handleItemChange={handleItemChange}
          addItemField={addItemField}
          respondentCount={respondentCount}
          setRespondentCount={setRespondentCount}
          respondents={respondents}
          handleRespondentChange={handleRespondentChange}
          addRespondent={addRespondent}
          items={items}
          deleteItem={deleteItem}
          saveItems={saveItems}
        />
      )}
    </div>
  );
}

export default App;
