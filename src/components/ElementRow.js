import * as React from "react";
import Tile from './BaseTile.js';


function RangeScaler(
    num,
    in_min,
    in_max,
    out_min,
    out_max
) {
    return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    )
}

const ElementRow = (props) => {
    const getTextColor = (val) => {
        if (val >= 0) {
            return '#FFF';
        } else {
            return '#FF002E';
        }
    }
    const valArray = props.data;
    const max = Math.max.apply(null, valArray)
    const min = Math.min.apply(null, valArray)
    const getColor = (val) => {
        if (val == 0) {
            return '#003';
        }
        if (val >= 0) {
            let blue;
            if (props.mode == 'relative') {
                blue = RangeScaler(val, min, max, 100, 255);
            } else if (props.mode == 'absolute') {
                blue = RangeScaler(val, 0, 1, 100, 255);
            }
            return `rgba(70, 0, ${blue})`;
        } else {
            let red;
            if (props.mode == 'relative') {
                red = RangeScaler(val, min, max, 100, 255);
            } else if (props.mode == 'absolute') {
                red = RangeScaler(val, -1, 0, 100, 255);
            }
            return `rgba(${red}, 0, 20)`;
        }
    }
    const parseData = (val) => {
        let data = Math.abs(parseFloat(val)).toFixed(3)
        if(props.showValues){
            if (data.toString() == 'NaN') {
                return '<UNK>';
            } else {
                return data;
            }
        }else{
            return '';
        }

    }
    const tileContainerStyleController = () => {
        if(props.showValues){
            return {paddingRight: '1.5%', paddingLeft: '1.5%'};
        }else{
            return {paddingRight: '3%', paddingLeft: '3%'};
        }
    }
    const listGen = valArray.map((x, ixx) => <li style={{ zIndex: 3 }} key={props.element + Math.random()} className="tileContainer" style={{paddingRight: tileContainerStyleController().paddingRight, paddingLeft: tileContainerStyleController().paddingLeft}}><div className="dataC" style={{userSelect: 'none', zIndex: 15, color: getTextColor(x) }}>{parseData(x)}</div><Tile showValues={props.showValues} title={`Dredge Up ID: ${ixx} | ${props.element}`} color={getColor(x)} width="5%" height="40%" className="elementRowTile"></Tile></li>)//{Math.abs(x).toFixed(2)}
    return (
        <ul className={`tileRowContainer`} style={{ position: 'absolute', width: "90.364583333%", height: "9.351851852%" }} id={props.id}><li className="tileContainer elementLabel noSelect" style={{paddingRight: tileContainerStyleController().paddingRight, paddingLeft: tileContainerStyleController().paddingLeft}}><Tile showValues={props.showValues} style={{ zIndex: 10 }} width="6%" height="40%" className="elementRowTile" color="#0500FF00"></Tile>{props.element.toString().padEnd(2, '<')}</li>{listGen}</ul>
    )
}

export default ElementRow;