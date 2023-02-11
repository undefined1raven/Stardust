import { useEffect, useState } from 'react';
import './App.scss';
import Background from './components/Background.js';
import Tile from './components/BaseTile.js';
import ElementRow from './components/ElementRow.js';
import PaintingModeSelector from './components/paintingModeSelector.js';

import Alpha_000020 from './data/Alpha_000020.json'
import Alpha_000050 from './data/Alpha_000050.json'
import Alpha_000100 from './data/Alpha_000100.json'
// console.log(Alpha_000020['M:1.30']['IRV:00']['CS'])
let len = 83
let ins =
  `
`



// const elementsActual = [
//   "C",
//   "N",
//   "O",
//   "F",
//   "Ne",
//   "Na",
//   "Mg",
//   "Al",
//   "Si",
//   "P",
//   "S3",
//   "Cl",
//   "Ar",
//   "K4",
//   "Ca",
//   "Sc",
//   "Ti",
//   "V5",
//   "Cr",
//   "Mn",
//   "Fe",
//   "Co",
//   "Ni",
//   "Cu",
//   "Zn",
//   "Ga",
//   "Ge",
//   "As",
//   "Se",
//   "Br",
//   "Kr",
//   "Rb",
//   "Sr",
//   "Y9",
//   "Zr",
//   "Nb",
//   "Mo",
//   "Tc",
//   "Ru",
//   "Rh",
//   "Pd",
//   "Ag",
//   "Cd",
//   "In",
//   "Sn",
//   "Sb",
//   "Te",
//   "I1",
//   "Xe",
//   "Cs",
//   "Ba",
//   "La",
//   "Ce",
//   "Pr",
//   "Nd",
//   "Pm",
//   "Sm",
//   "Eu",
//   "Gd",
//   "Tb",
//   "Dy",
//   "Ho",
//   "Er",
//   "Tm",
//   "Yb",
//   "Lu",
//   "Hf",
//   "Ta",
//   "W1",
//   "Re",
//   "Os",
//   "Ir",
//   "Pt",
//   "Au",
//   "Hg",
//   "Tl",
//   "Pb",
//   "Bi"
// ]

const elementsActual = ['C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'I', 'Te', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi'];



let xx = []
function parseDataString(dataLen, str) {
  let sar = str.split('\n');
  let outArray = []
  for (let ix = 0; ix < sar.length; ix++) {
    if (sar[ix].length >= 1 && sar[ix].length <= 2 && elementsActual.indexOf(sar[ix]) != -1) {
      xx.push(sar[ix])
      let tempArray = [];
      for (let inx = 0; inx < dataLen; inx++) {
        tempArray.push(sar[ix + 2 + inx])
      }
      outArray.push(tempArray)
    }
  }
  console.log(outArray)
}



// parseDataString(len, ins);

function App() {
  const dataSetFromMetallicity = (metallicity) => {
    if (metallicity == '000100') {
      return Alpha_000100;
    } else if (metallicity == '000050') {
      return Alpha_000050;
    } else if (metallicity == '000020') {
      return Alpha_000020;
    }
  }
  const genListActual = (params) => {
    try {
      return dataSetFromMetallicity(params.metallicity)[`${params.mass}|${params.metallicity}|${params.irv}|${params.carbon}`].map((x, ix) => <li className='displayListElement' key={elementsActual[ix] + Math.random()} ><ElementRow mode={dataPaintingMode} element={elementsActual[ix]} ix={ix} data={x} width="7.2%" className="elementRowTile"></ElementRow></li>)
    }
    catch (e) {
      return undefined;
    }
  }
  const [params, setParams] = useState({ mass: '1.50', metallicity: '000100', irv: '00', carbon: 'Standard' })
  const [listGen, setListGen] = useState(genListActual(params));
  const [dataPaintingMode, setDataPaintingMode] = useState('relative');
  const onDataPaintingModeToggle = () => {
    if(dataPaintingMode == 'relative'){
      setDataPaintingMode('absolute');
    }else{
      setDataPaintingMode('relative');
    }
  }
  const onParamsChange = (e) => {
    if (e.target.value.split(':')[0] == 'M') {
      setParams({ ...params, mass: e.target.value.split(':')[1] });
    }
    if (e.target.value.split(':')[0] == 'X') {
      setParams({ ...params, metallicity: e.target.value.split(':')[1] });
    }
    if (e.target.value.split(':')[0] == 'I') {
      setParams({ ...params, irv: e.target.value.split(':')[1] });
    }
    if (e.target.value.split(':')[0] == 'C') {
      setParams({ ...params, carbon: e.target.value.split(':')[1] });
    }
  }
  useEffect(() => {
    setListGen(genListActual(params));
  }, [params, dataPaintingMode])

  return (
    <div className="bkg">
      <div id='bkg'></div>
      {/* <Background></Background> */}
      <div id='l' className='noSelect'>[El/Fe] = log10(El/Fe)« - log10(El/Fe)¤</div>
      <div id='title' className='noSelect'>Full-Network Repository of Updated Isotopic Tables & Yields</div>
      <div className='selectorLabel noSelect' id='massLabel'>Mass(M¤)</div>
      <div className='selectorLabel noSelect' id='metallicityLabel'>Metallicity(Z)</div>
      <div className='selectorLabel noSelect' id='irvLabel'>IRV(km/s)</div>
      <div className='selectorLabel noSelect' id='carbonLabel'>C[13] Pocket</div>
      <div className='selectorLabel noSelect' id='paintingModeLabel'>Data Painting Mode</div>
      <PaintingModeSelector onClick={onDataPaintingModeToggle} mode={dataPaintingMode}></PaintingModeSelector>
      <select className='selector noSelect' name='mass' onChange={onParamsChange} value={`M:${params.mass}`} id='massSelector'>
        <option className='selectorOption noSelect' value="M:1.50">1.50</option>
        <option className='selectorOption noSelect' value="M:2.00">2.00</option>
        <option className='selectorOption noSelect' value="M:6.00">6.00</option>
        <option className='selectorOption noSelect' value="M:65.00">65.00</option>
      </select>
      <select className='selector noSelect' name='metallicity' onChange={onParamsChange} value={`X:${params.metallicity}`} id='metallicity'>
        <option className='selectorOption noSelect' value="X:000020">0.000020</option>
        <option className='selectorOption noSelect' value="X:000050">0.000050</option>
        <option className='selectorOption noSelect' value="X:000100">0.000100</option>
      </select>
      <select className='selector noSelect' name='irv' onChange={onParamsChange} value={`I:${params.irv}`} id='irv'>
        <option className='selectorOption noSelect' value="I:00">0</option>
        <option className='selectorOption noSelect' value="I:10">10</option>
        <option className='selectorOption noSelect' value="I:30">30</option>
        <option className='selectorOption noSelect' value="I:60">60</option>
      </select>
      <select className='selector noSelect' name='carbon' onChange={onParamsChange} value={`C:${params.carbon}`} id='carbon'>
        <option className='selectorOption noSelect' value="C:Standard">Standard</option>
        <option className='selectorOption noSelect' value="C:Extended">Extended</option>
      </select>
      <ul className='primaryContainer'>
        {listGen}
      </ul>
    </div>
  );
}

export default App;
