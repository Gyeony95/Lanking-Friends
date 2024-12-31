import React from 'react';

function ItemForm({
  itemFields,
  handleItemChange,
  addItemField,
  respondentCount,
  setRespondentCount,
  respondents,
  handleRespondentChange,
  addRespondent,
  items,
  deleteItem,
  saveItems
}) {
  return (
    <header className="App-header">
      <h1>랭킹 꼴지 어서오고</h1>
      <h2>항목 추가</h2>
      {itemFields.map((item, index) => (
        <div key={index} style={{ width: '100%', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            onChange={(e) => handleItemChange(index, 'name', e.target.value)}
            placeholder="항목명"
            style={{ flex: 1 }}
          />
          <select value={item.type} onChange={(e) => handleItemChange(index, 'type', e.target.value)} style={{ width: '150px' }}>
            <option value="subjective">주관식</option>
            <option value="objective">객관식</option>
          </select>
        </div>
      ))}
      <button onClick={addItemField} style={{ marginTop: '10px' }}>항목 추가</button>
      <h2>응답자 수</h2>
      <input
        type="number"
        value={respondentCount}
        onChange={(e) => setRespondentCount(e.target.value)}
        min="1"
        max="10"
      />
      <h2>응답자 이름</h2>
      {respondents.map((respondent, index) => (
        <input
          key={index}
          type="text"
          value={respondent}
          onChange={(e) => handleRespondentChange(index, e.target.value)}
          placeholder={`응답자 ${index + 1}`}
        />
      ))}
      <button onClick={addRespondent}>응답자 추가</button>
      <h2>추가된 항목들</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item-card">
            {item.name} ({item.type})
            <button onClick={() => deleteItem(index)} className="delete-button">
              삭제
            </button>
          </li>
        ))}
      </ul>
      <button onClick={saveItems} className="complete-button">
        완료
      </button>
    </header>
  );
}

export default ItemForm; 