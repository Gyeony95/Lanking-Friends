import React from 'react';
import mainJjal from '../static/main_jjal.png'; // 이미지 가져오기

function MainPage({ startAddingItems }) {
  return (
    <header className="App-header">
      <h1 style={{ color: 'black', fontSize: '3rem', marginBottom: '20px' }}>너의 인성 랭킹은?</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px', textAlign: 'center' }}>
        이 웹사이트는 항목을 추가하고 응답자를 관리하는 도구입니다. <br />
        당신의 인성 랭킹을 확인해보세요!
      </p>
      <img src={mainJjal} alt="Main Visual" style={{ width: '80%', maxWidth: '600px', marginBottom: '20px' }} />
      <button onClick={startAddingItems} className="start-button">시작하기</button>
    </header>
  );
}

export default MainPage; 