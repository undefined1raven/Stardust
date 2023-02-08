import { useEffect } from 'react';
import './App.scss';
import Background from './components/Background.js';
import Tile from './components/BaseTile.js';
import ElementRow from './components/ElementRow.js';

function App() {
  return (
    <div className="bkg">
      <div id='bkg'></div>
      {/* <Background></Background> */}
      <div id='l'>[El/Fe] = log10(El/Fe)« - log10(El/Fe)¤</div>
      <ElementRow element=".C" id="C" data={[-2.08e-01,
        1.61e+00,
        2.18e+00,
        2.48e+00,
        2.68e+00,
        2.82e+00,
        2.93e+00,
        3.01e+00,
        3.08e+00,
        3.13e+00,
        3.17e+00,
        3.20e+00,
        3.22e+00,
        3.23e+00]}></ElementRow>
      <ElementRow element=".N" id="N" data={[
        3.82e-01,
        5.66e-01,
        6.58e-01,
        7.12e-01,
        7.68e-01,
        8.31e-01,
        8.97e-01,
        9.65e-01,
        1.03e+00,
        1.10e+00,
        1.16e+00,
        1.22e+00,
        1.29e+00,
        1.36e+00]}></ElementRow>
      <ElementRow element=".O" id="O" data={[4.99e-01,
        5.25e-01,
        7.16e-01,
        9.11e-01,
        1.06e+00,
        1.17e+00,
        1.25e+00,
        1.31e+00,
        1.35e+00,
        1.38e+00,
        1.41e+00,
        1.43e+00,
        1.44e+00,
        1.45e+00]}></ElementRow>
      <ElementRow element=".F" id="F" data={[
        -1.41e-02,
        1.29e-02,
        1.33e+00,
        1.81e+00,
        2.05e+00,
        2.22e+00,
        2.37e+00,
        2.51e+00,
        2.62e+00,
        2.72e+00,
        2.80e+00,
        2.86e+00,
        2.90e+00,
        2.93e+00]}></ElementRow>
              <ElementRow element="Ar" id="Ar" data={[
4.52e-01,
4.52e-01,
4.52e-01,
4.52e-01,
4.52e-01,
4.52e-01,
4.52e-01,
4.52e-01,
4.52e-01,
4.51e-01,
4.51e-01,
4.51e-01,
4.51e-01,
4.51e-01]}></ElementRow>
              <ElementRow element="Kr" id="Kr" data={[
0.00e+00,
0.00e+00,
1.43e-02,
2.37e-02,
3.29e-02,
4.23e-02,
5.18e-02,
6.10e-02,
6.97e-02,
7.76e-02,
8.44e-02,
9.02e-02,
9.44e-02,
9.67e-02]}></ElementRow>
              <ElementRow element="Ca" id="Ca" data={[
4.91e-01,
4.91e-01,
4.91e-01,
4.91e-01,
4.91e-01,
4.91e-01,
4.90e-01,
4.90e-01,
4.90e-01,
4.90e-01,
4.89e-01,
4.89e-01,
4.89e-01,
4.89e-01]}></ElementRow>
              <ElementRow element="Sc" id="Sc" data={[
0.00e+00,
2.41e-02,
9.56e-02,
1.56e-01,
2.09e-01,
2.56e-01,
2.98e-01,
3.35e-01,
3.66e-01,
3.93e-01,
4.14e-01,
4.31e-01,
4.42e-01,
4.47e-01]}></ElementRow>
              <ElementRow element="Ti" id="Ti" data={[
0.00e+00,
0.00e+00,
2.64e-02,
5.53e-02,
8.19e-02,
1.05e-01,
1.24e-01,
1.40e-01,
1.54e-01,
1.65e-01,
1.73e-01,
1.80e-01,
1.85e-01,
1.87e-01]}></ElementRow>
    </div>
  );
}

export default App;
