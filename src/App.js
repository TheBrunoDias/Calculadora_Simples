import React, { useState } from 'react';
import styled from 'styled-components';

//Aplicando estilos das tags utilizando o styled-components
const Container = styled.div`
  width: 600px;
  height: 700px;
  border: 3px solid var(--primary);
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ValueInput = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 200%;
  color: var(--primary);
`;

const BtnBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  & button{
    border: 3px solid var(--primary);
    width:33.3333%;
    height:25%;
    color: var(--primary);
    font-size: 200%;
    transition: 0.5s;
    &:hover{
      background-color: var(--primary);
      color: black;
      cursor: pointer;
    }
  }

  .operations button{
  width:100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 200%;
  color: var(--primary);
  transition: 0.5s;
  &:hover{
    background-color: var(--primary);
    color: black;
    cursor: pointer;
  }
  }
`;

const Footer = styled.button`
  height: 100%;
  background-color: black;
  font-size: 200%;
  color: var(--primary);
  transition: 0.5s;
  border: 3px solid var(--primary);
  &:hover{
    background-color: var(--primary);
    color: black;
    cursor: pointer;
  }
`;

//Função principal
function App() {

  //Criando os botões utilizando hook useState

  //Value é o valor que será atualizado e setValue a função que irá executar o hook
  const [value, setValue] = useState(''); //Valor inicial do value 
  const numBtns = []; //Array que irá receber os value
  const bts = [1, 2, 3, 4, 5, 6, 7, 8, 9, '%', 0, '.']; //Array dos Botões

  //Para cada elemento do Array bts, irá criar um botão que ao clicar
  //enviará o seu valor para a variável value
  bts.forEach(btn => {
    numBtns.push(
      <button
        onClick={e => {
          setValue(value + e.target.value);
        }}
        value={btn}
        key={btn}
      >
        {btn}
      </button>
    )
  })

  return (
    <Container className="App">

      <ValueInput>
        {value} {/*Toda vez que apertar algum botão esse value sera atualizado*/}
      </ValueInput>

      <BtnBox>
        <div style={{ width: '75%' }}>
          {numBtns} {/*Botões */}
        </div>

        {/*Operadores matemáticos */}
        <div className="operations" style={{ width: '25%' }}>
          <button onClick={e => setValue(value + e.target.value)} value="+"> + </button>
          <button onClick={e => setValue(value + e.target.value)} value="-"> - </button>
          <button onClick={e => setValue(value + e.target.value)} value="*"> x </button>
          <button onClick={e => setValue(value + e.target.value)} value="/"> / </button>
        </div>
      </BtnBox>

      <div style={{ width: '100%', height: '20%' }}>
        {/*Botão para limpar o value */}
        <Footer style={{ width: '75%' }} onClick={() => setValue('')}> Clear </Footer>
        {/*Botão para calcular o resultado */}
        <Footer
          style={{ width: '25%' }}
          onClick={e => { //e é o evento do mouse que será capturado ao clicar no botão
            //Caso a função Eval consiga ler a equação que está no value irá executar o try
            try {
              //A função eval() computa um código JavaScript representado como uma string.
              var result = eval(value);
              setValue(String(result));
            }
            //Caso haja algum erro na equação irá retornar Syntax Error no value
            catch (err) {
              setValue('Syntax Error')
              console.log(err);
            }
          }}
        >
          =
        </Footer>
      </div>

    </Container>

  );
}

export default App;
