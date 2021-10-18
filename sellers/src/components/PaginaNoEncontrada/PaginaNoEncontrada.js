import React from 'react';
import styles from './PaginaNoEncontrada.module.css';
import { Alert } from 'reactstrap';

const PaginaNoEncontrada = () => (
  <div className={styles.PaginaNoEncontrada} data-testid="PaginaNoEncontrada">
    <Alert color="info" className='text-center'>
    No se encontró la página <br/>
    <a href= '/users'></a>
    </Alert>
  </div>
);



export default PaginaNoEncontrada;
