
import React from 'react';
function DetailHog(props) {
return <div>
        <h2 style={{color: "red"}}>Hog Detail:</h2>
        <h3>Name: {props.detailhog.name}</h3>
        <h3>specialty: {props.detailhog.specialty}</h3>
        {/* <h3>greased: {props.detailhog.greased}</h3> */}
        <h3>weight: {props.detailhog.weight}</h3>
        <h3>highest medal achieved: {props.detailhog['highest medal achieved']}</h3>
</div>
}
export default DetailHog;