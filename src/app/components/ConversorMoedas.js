// src/components/ConversorMoedas.js
"use client";

import { useState } from 'react';
import styles from './ConversorMoedas.module.css';

const ConversorMoedas = () => {
  const [valor, setValor] = useState('');
  const [moeda, setMoeda] = useState('dolar');
  const [resultado, setResultado] = useState('');

  const conversaoValores = {
    dolar: 0.20,
    euro: 0.18,
    bitcoin: 0.000003
  };

  const handleConverter = () => {
    const valorConvertido = valor * conversaoValores[moeda];
    setResultado(`Resultado: ${valorConvertido.toFixed(4)} ${moeda}`);
  };

  const handleLimpar = () => {
    setValor('');
    setMoeda('dolar');
    setResultado('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Conversor de Moedas</h1>
      <input
        type="number"
        className={styles.input}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Valor em R$"
      />
      <select className={styles.select} value={moeda} onChange={(e) => setMoeda(e.target.value)}>
        <option value="dolar">Dólar</option>
        <option value="euro">Euro</option>
        <option value="bitcoin">Bitcoin</option>
      </select>
      <button className={styles.button} onClick={handleConverter}>Converter</button>
      <button className={styles.button} onClick={handleLimpar}>Limpar</button>
      {resultado && <p className={styles.result}>{resultado}</p>}
    </div>
  );
};

export default ConversorMoedas;
