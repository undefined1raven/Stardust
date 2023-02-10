import * as React from "react";


const Tile = (props) => {
    const [opacity, setOpacity] = React.useState(0.4);

    const me = () => {
        setOpacity(0.7);
    }
    const ml = () => {
        setOpacity(0.4);
    }
    return (
        <div title={props.title} onMouseLeave={ml} onMouseEnter={me} style={{ position: 'absolute', width: props.width, height: props.height }} id={props.id}>
            <svg style={{width: '25%', height: '25%'}} width="88" height="100" viewBox="0 0 88 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86.8013 74.7113L44 99.4226L1.19873 74.7113L1.19873 25.2887L44 0.577354L86.8013 25.2887L86.8013 74.7113Z" fill={props.color} fillOpacity={opacity} stroke={props.color} />
            </svg>

        </div>
    )
}

export default Tile;