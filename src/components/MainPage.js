import React from 'react';

function MainPage({ startAddingItems }) {
  return (
    <header className="App-header">
      <h1>랭킹 꼴지 어서오고</h1>
      <p>이 웹사이트는 항목을 추가하고 응답자를 관리하는 도구입니다.</p>
      <button onClick={startAddingItems} className="start-button">시작하기</button>
    </header>
  );
}

export default MainPage; 