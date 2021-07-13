// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
import React from "react";
import './index.scss'
import Button from '../../components/Button'
import HomeFooter from './HomeFooter'
import { Activity, DollarSign, TrendingUp } from 'react-feather';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__main'>
        <div className='home__main--intro'>
          <h1>Faça uma análise de seu histórico processual e preveja resultados de disputas atuais.</h1>
          <h3>Use nossos algorítmos preditivos para entender como melhorar seu desempenho processual.</h3>
          <div className='home__main--intro--button'>
            <Button type='1' scrollLink={true}>Saiba mais</Button>
          </div>
        </div>
        <div className="home__main--background" />
      </div>
      <div className='home__top'>
        <div className="home__top__container">
          <h1>Entenda como funciona:</h1>
          <div className="home__cards">
            <div className="home__card">
              <div className="card__step">
                <h5>Etapa 1</h5>
                <Activity size='33' />
              </div>
              <div className="card__text">
                <h2>Análise de Base</h2>
                <p>
                  Receba um relatório identificando principais fatores 
                  que levaram você à vencer ou perder processos finalizados 
                  através de uma análise de sua base processual.
                </p>
              </div>
              <div className="card__action">
                <a href="#">Ver mais</a>
              </div>
            </div>
            <div className="home__card">
              <div className="card__step">
                <h5>Etapa 2</h5>
                <TrendingUp size='33' />
              </div>
              <div className="card__text">
                <h2>Previsão de Sucesso</h2>
                <p>
                  Verifique a probabilidade de vencer processos em andamento e 
                  entenda quais fatores influenciam o desfecho de cada disputa.
                </p>
              </div>
              <div className="card__action">
                <a href="#">Ver mais</a>
              </div>
            </div>
            <div className="home__card">
              <div className="card__step">
                <h5>Etapa 3</h5>
                <DollarSign size='33' />
              </div>
              <div className="card__text">
                <h2>Previsão de Alçada</h2>
                <p>
                  EM BREVE.
                </p>
              </div>
              <div className="card__action">
                <a href="#" style={{visibility: 'hidden'}}>Ver mais</a>
              </div>
            </div>
          </div>
          <Button type='2' height='50px'>Quero ter acesso</Button>
        </div>
      </div>
      <div className='home__middle'>
        <p>Features</p>
        <h1>Empresas que melhoraram seu desempenho jurídico com o Specter.</h1>
      </div>
      <HomeFooter />
    </div>
  )
}

export default Home

