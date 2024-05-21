import React from 'react'

// tambien podemos mandar props como un objeto y accedemos a sus propiedades props.operador
function Button( {operador, fn} ) { // o se puede hacer destructuring 

  return (
    <button 
      type="button"
      className="h-10 w-10  flex items-center justify-center font-bold text-white
      text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2
      hover:ring-offset-2 hover:ring-lime-500"
      onClick={ fn }
     >
      { operador }
    </button>
  )
}

export default Button