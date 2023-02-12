import { useEffect, useState } from 'react';
import './App.scss';
import Background from './components/Background.js';
import Tile from './components/BaseTile.js';
import ElementRow from './components/ElementRow.js';
import PaintingModeSelector from './components/paintingModeSelector.js';
import About from './components/About.js';

import Alpha_000020 from './data/Alpha_000020.json'
import Alpha_000050 from './data/Alpha_000050.json'
import Alpha_000100 from './data/Alpha_000100.json'
import Alpha_000300 from './data/Alpha_000300.json'
import Alpha_001000 from './data/Alpha_001000.json'
import Alpha_002000 from './data/Alpha_002000.json'
import Alpha_003000 from './data/Alpha_003000.json'
import Alpha_006000 from './data/Alpha_006000.json'
import Alpha_008000 from './data/Alpha_008000.json'
import Alpha_010000 from './data/Alpha_010000.json'
import Alpha_014000 from './data/Alpha_014000.json'
import Alpha_020000 from './data/Alpha_020000.json'


const elementsActual = ['C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'I', 'Te', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi'];

function App() {
  const dataSetFromMetallicity = (metallicity) => {
    if (metallicity == '000100') {
      return Alpha_000100;
    } else if (metallicity == '000050') {
      return Alpha_000050;
    } else if (metallicity == '000020') {
      return Alpha_000020;
    } else if (metallicity == '000300') {
      return Alpha_000300;
    } else if (metallicity == '001000') {
      return Alpha_001000;
    } else if (metallicity == '002000') {
      return Alpha_002000;
    } else if (metallicity == '003000') {
      return Alpha_003000;
    } else if (metallicity == '006000') {
      return Alpha_006000;
    } else if (metallicity == '008000') {
      return Alpha_008000;
    } else if (metallicity == '010000') {
      return Alpha_010000;
    } else if (metallicity == '014000') {
      return Alpha_014000;
    } else if (metallicity == '020000') {
      return Alpha_020000;
    }
    
  }
  const DLE_StyleOps = () => {
    if (showValues) {
      return { paddingTop: '1%', paddingBottom: '1%' };
    } else {
      return { paddingTop: '0.1%', paddingBottom: '0.1%' };
    }
  }
  const genListActual = (params) => {
    try {
      return dataSetFromMetallicity(params.metallicity)[`${params.mass}|${params.metallicity}|${params.irv}|${params.carbon}`].map((x, ix) => <li className='displayListElement' style={{ paddingTop: DLE_StyleOps().paddingTop, paddingBottom: DLE_StyleOps().paddingBottom }} key={elementsActual[ix] + Math.random()} ><ElementRow showValues={showValues} mode={dataPaintingMode} element={elementsActual[ix]} ix={ix} data={x} width="7.2%" className="elementRowTile"></ElementRow></li>)
    }
    catch (e) {
      return undefined;
    }
  }
  const [params, setParams] = useState({ mass: '1.50', metallicity: '000100', irv: '00', carbon: 'Standard' })
  const [listGen, setListGen] = useState(genListActual(params));
  const [dataPaintingMode, setDataPaintingMode] = useState('relative');
  const [noDataLabelOpacity, setNoDataLabelOpacity] = useState('0');
  const [showValues, setShowValues] = useState(false);
  const [about, setAbout] = useState(false);

  const onDataPaintingModeToggle = () => {
    if (dataPaintingMode == 'relative') {
      setDataPaintingMode('absolute');
    } else {
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
  const toggleShowValues = () => {
    showValues ? setShowValues(false) : setShowValues(true);
  }
  const toggleAbout = () => {
    about ? setAbout(false) : setAbout(true);
  }
  const onBackClick = () => {
    setAbout(false);
  }
  const dkElementIndiVisibilityController = () => {
    if(!showValues && noDataLabelOpacity == '0'){
      return '1';
    }else{
      return '0';
    }
  }
  useEffect(() => {
    setListGen(genListActual(params));
    setTimeout(() => {
      if (document.getElementsByClassName('primaryContainer')[0].childNodes.length == 1) {
        setNoDataLabelOpacity(1);
      } else {
        setNoDataLabelOpacity(0);
      }
    }, 50);
  }, [params, dataPaintingMode, showValues])

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
      <div onClick={toggleShowValues} className='button' id='toggleValuesButton'>{showValues ? 'Hide Values' : 'Show Values'}</div>
      <div onClick={toggleAbout} className='button' id='aboutButton'>About</div>
      <select className='selector noSelect' name='mass' onChange={onParamsChange} value={`M:${params.mass}`} id='massSelector'>
        <option className='selectorOption noSelect' value="M:1.30">1.30</option>
        <option className='selectorOption noSelect' value="M:1.50">1.50</option>
        <option className='selectorOption noSelect' value="M:2.00">2.00</option>
        <option className='selectorOption noSelect' value="M:2.50">2.50</option>
        <option className='selectorOption noSelect' value="M:3.00">3.00</option>
        <option className='selectorOption noSelect' value="M:4.00">4.00</option>
        <option className='selectorOption noSelect' value="M:5.00">5.00</option>
        <option className='selectorOption noSelect' value="M:6.00">6.00</option>
      </select>
      <select className='selector noSelect' name='metallicity' onChange={onParamsChange} value={`X:${params.metallicity}`} id='metallicity'>
        <option className='selectorOption noSelect' value="X:000020">0.000020 [α/Fe]=0.5</option>
        <option className='selectorOption noSelect' value="X:000050">0.000050 [α/Fe]=0.5</option>
        <option className='selectorOption noSelect' value="X:000100">0.000100 [α/Fe]=0.5</option>
        <option className='selectorOption noSelect' value="X:000300">0.000300 [α/Fe]=0.5</option>
        <option className='selectorOption noSelect' value="X:001000">0.001000</option>
        <option className='selectorOption noSelect' value="X:002000">0.002000</option>
        <option className='selectorOption noSelect' value="X:003000">0.003000</option>
        <option className='selectorOption noSelect' value="X:006000">0.006000</option>
        <option className='selectorOption noSelect' value="X:008000">0.008000</option>
        <option className='selectorOption noSelect' value="X:010000">0.010000</option>
        <option className='selectorOption noSelect' value="X:014000">0.014000</option>
        <option className='selectorOption noSelect' value="X:020000">0.020000</option>
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
        <li className='ee' style={{ opacity: 1 - noDataLabelOpacity }}>me hoping you still like purp :]</li>
        {listGen}
      </ul>
      <div id='noDataLabel' style={{ opacity: noDataLabelOpacity }}>__NO DATA__</div>
      <About onBackClick={onBackClick} about={about}></About>
      <div id='dkElementIndi' style={{ opacity: dkElementIndiVisibilityController() }}>
        <div id='cLabel'>C</div>
        <div id='biLabel'>Bi</div>
        <div id='dkElementIndiLine'></div>
      </div>
    </div>
  );
}

export default App;
