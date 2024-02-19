  
describe('Pruebas DemoComponent', () => { 
  
  
test('Esta prueba no debe de fallar', () =>{


  // if(2===0){
  //  throw new Error('No puede divir entre cero')
  // }
  
  
  // 1.Inicializacion
  const mensaje1 = 'Hola Mundo';
  
  // 2.Estimulo
  const mensaje2 = mensaje1.trim();
  
  // 3.Observar el comportamiento esperado
  expect(mensaje1).toBe(mensaje2);
  
  
  });
  
 });
