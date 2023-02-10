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
        if(val >= 0){
            return '#FFF';
        }else{
            return '#FF002E';
        }
    }
    const valArray = props.data;
    const max = Math.max.apply(null, valArray)
    const min = Math.min.apply(null, valArray)
    const getColor = (val) => {
        if(val == 0){
            return '#003';
        }
        if(val >= 0){
            let blue = RangeScaler(val, min, max, 100, 255);
            return `rgba(70, 0, ${blue})`; 
        }else{
            let red = RangeScaler(val, min, max, 50, 255);
            return `rgba(${red}, 0, 20)`; 
        }
    }

    const listGen = valArray.map((x, ixx) => <li key={props.element + Math.random()} className="tileContainer"><Tile title={`Dredge Up ID: ${ixx} | ${props.element}`} color={getColor(x)} width="7.2%" className="elementRowTile"></Tile><div style={{color: getTextColor(x)}}></div></li>)//{Math.abs(x).toFixed(2)}
    return (
        <ul className={`tileRowContainer`} style={{ position: 'absolute', width: "90.364583333%", height: "9.351851852%" }} id={props.id}><li className="tileContainer"><Tile width="7.2%" className="elementRowTile" color="#3500A6"></Tile>{props.element.toString().padEnd(2, '.')}</li>{listGen}</ul>
    )
}

export default ElementRow;