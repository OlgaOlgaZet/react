import React from 'react'; //plik react z katalogu node modules

const Counterfn = (props) => {
    return (
        <div className="counter">Licznik:{props.initalText}</div>
    )
}
export default Counterfn; 