import React from 'react';
import HogTile from './HogTile'


function HogGrid(props) {

    console.log(props.hogs)
    
return <div>{props.hogs.map((hog) => <HogTile key={Math.random()} hog={hog} handleHogClick={props.handleHogClick} />)}</div>
}
export default HogGrid;