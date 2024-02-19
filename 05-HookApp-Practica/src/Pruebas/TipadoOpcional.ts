



export const TipadoOpcional = (intro:string='') => {

    intro = 'asd';
    
  return (
    intro
  )
}


console.log(TipadoOpcional());










type user = {
    
  id: number,
  name: string,
  email: string
}

type ContextType = {

  user: user,
  setUser: (parametro:user) => void,
  prueba: (parametro:string) => string
}





const inicial:ContextType = {

  user: {
      id: 1,
      name: 'Marco',
      email: 'marcoTarma21@gmail.com'

  },
  setUser: () => 'Hola',
  prueba: (hola) => (hola),

}


console.log(inicial.prueba('Auus'));