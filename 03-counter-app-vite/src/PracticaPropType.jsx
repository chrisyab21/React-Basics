import PropTypes from 'prop-types';

//Utilizando las Props
export const PropsComponent= ({title = 'Hola Fans de Naruto', subtitle = '99' }) =>{

    return(  
    <>
        <h1>{title} </h1>
        <p>{subtitle+1}</p>
    </>
    );
}



//Utilizando las Props pero ahora aplicando PropTypes
export const PropTypeComponent= ({title, subtitle}) =>{

    return(  
    <>
        <h1>{title} </h1>
        <p>{subtitle+1}</p>
    </>
    );
}


PropTypeComponent.propTypes ={

    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}


PropTypeComponent.defaultProps ={

    title: "No hay titulo",
    subtitle: 455
}