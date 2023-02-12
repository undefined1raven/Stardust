import * as React from "react";

const paintingModeSelector = (props) => {
    const onClick = () => props.onClick();
    const styleController = (btnId) => {
        const active = {color: '#FFF', backgroundColor: '#6100FF50', border: 'solid 1px #6100FF'};
        const inactive = {color: '#7000FF', backgroundColor: '#39009650', border: 'solid 1px #390096'};
        if(props.mode == 'absolute'){
            return {abs: active, rel: inactive};
        }else if(props.mode == 'relative'){
            return {abs: inactive, rel: active};
        }
    }
    return(
        <div className="paintingModeSelectorContainer">
            <div className="button" onClick={onClick} style={{color: styleController().abs.color, border: styleController().abs.border, backgroundColor: styleController().abs.backgroundColor}} id="abs">Abs</div>
            <div className="button" onClick={onClick} style={{color: styleController().rel.color, border: styleController().rel.border, backgroundColor: styleController().rel.backgroundColor}} id="rel">Rel</div>
        </div>
    )
}

export default paintingModeSelector;

