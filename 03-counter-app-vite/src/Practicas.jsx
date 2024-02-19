import { Fragment } from "react";


export const FirstApp = () =>{

    return <div>First App</div>;
}


export const FragmentoApp = () =>{

    return(  
    <Fragment>
        <h1>Fragmento App</h1>
        <p>Subtitulo</p>
    </Fragment>
    );
}


export const FragmentoApp2 = () =>{

    return(  
//Sintaxis de fragmento mas sencilla
    <>
        <h1>Fragmento App</h1>
        <p>Subtitulo</p>
    </>
    );
}




//Varibles pasadas al componente
//Nota: No se puede enviar objetos a los componentes a menos que
//se los transforme a Json. 
const newMessage = 123;
const objetoPrueba ={

    message: 'Hola Mundo',
    tittle: 'Christian'
};

export const VariablesPractica= () =>{

    return(  
    <>
        <h1>{newMessage}</h1>
        <p>Subtitulo</p>
        {/* Transformamos el objetoPrueba en codigo Json.
            para asi poder imprimirlo completo en el html */}
        <code>{JSON.stringify(objetoPrueba)}</code>
        <p>Subtitulo2</p>
    </>
    );
}




//Pruebas de paso de datos de los Returns de funciones
//Llamado de funciones en los componentes
//Nota: Si la funcion es async dara error al llamarla debido a que
//ese tipo de funcion retorna una promesa.

const Suma = (x,y)=>{

    return x+y;
}

export const RetornoFunciones= () =>{

    return(  
    <>
        <h1>La suma de los numeros es: </h1>
        <p>{Suma(2,5)}</p>
    </>
    );
}






