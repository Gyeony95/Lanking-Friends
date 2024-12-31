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
      <h1>너의 인성 랭킹은?</h1>
      <h2>항목 추가</h2>
      {itemFields.map((item, index) => (
        <div key={index} style={{ width: '100%', display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
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
      <h2>인성 측정 대상</h2>
      {respondents.map((respondent, index) => (
        <input
          key={index}
          type="text"
          value={respondent}
          onChange={(e) => handleRespondentChange(index, e.target.value)}
          placeholder={`친구이름 ${index + 1}`}
        />
      ))}
      <button onClick={addRespondent}>대상자 추가</button>     
      <button onClick={saveItems} className="complete-button">
        완료
      </button>
    </header>
  );
}

export default ItemForm; 