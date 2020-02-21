import React from 'react';
function HogTile(props) {
return <div onClick={() => props.handleHogClick(props.hog.name)}>
<h2 >{props.hog.name}</h2>
<img src={props.hog.imgurl} alt={props.hog.name}/>
</div>
}
export default HogTile;