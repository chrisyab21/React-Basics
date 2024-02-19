
import PropTypes from 'prop-types';


export const FirstApp= ({title, subtitle, subtitle2}) =>{

    return(  
    <>
        <h1 data-testid="test-title">{title} </h1>
        <p>{subtitle}</p>
        <p>{subtitle2+1}</p>
    </>
    );
}


FirstApp.propTypes ={

    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    subtitle2: PropTypes.number.isRequired
}


FirstApp.defaultProps ={

    title: "Hola soy Goku",    
    subtitle: "Kimi Monogatari...",
    subtitle2: 455
}