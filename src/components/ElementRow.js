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

function isMobile() {
    if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            navigator.userAgent
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            navigator.userAgent.substr(0, 4)
        )
    ) {
        return true;
    } else {
        return false;
    } //thx stackoverflow
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
        if (props.showValues) {
            if (data.toString() == 'NaN') {
                return '<UNK>';
            } else {
                return data;
            }
        } else {
            return '';
        }

    }
    const elementLabelRenderer = () => {
        if(isMobile()){
            return props.element.toString().padEnd(2, '<');
        }else{
            if(props.showValues){
                return props.element.toString().padEnd(2, '<');
            }else{
                return '';
            }
        }
    }
    const tileContainerStyleController = () => {
        if (props.showValues) {
            return { paddingRight: '1.5%', paddingLeft: '1.5%' };
        } else {
            return { paddingRight: '3%', paddingLeft: '3%' };
        }
    }
    const listGen = valArray.map((x, ixx) => <li style={{ zIndex: 3 }} key={props.element + Math.random()} className="tileContainer" style={{ paddingRight: tileContainerStyleController().paddingRight, paddingLeft: tileContainerStyleController().paddingLeft }}><div className="dataC" style={{ userSelect: 'none', zIndex: 15, color: getTextColor(x) }}>{parseData(x)}</div><Tile showValues={props.showValues} title={`Dredge Up ID: ${ixx} | ${props.element}`} color={getColor(x)} width="5%" height="40%" className="elementRowTile"></Tile></li>)//{Math.abs(x).toFixed(2)}
    return (
        <ul className={`tileRowContainer`} style={{ position: 'absolute', width: "90.364583333%", height: "9.351851852%" }} id={props.id}><li className="tileContainer elementLabel noSelect" style={{ paddingRight: tileContainerStyleController().paddingRight, paddingLeft: tileContainerStyleController().paddingLeft }}><Tile showValues={props.showValues} style={{ zIndex: 10 }} width="6%" height="40%" className="elementRowTile" color="#0500FF00"></Tile>{elementLabelRenderer()}</li>{listGen}</ul>
    )
}

export default ElementRow;