import React from "react";

function TodoHeader({ children, loading }) {
  // React.Children y React.clone element no son métodos populares pero pueden ser de ayuda cuando queremos compartir un mismo valor a los componentes hijos.

  //El Método React.Children contiene otros metodos que ayudan a trabajar con props.children de tal forma que cloneElement pueda entenderlo. Ya que cloneElement solo puede trabajar con un elemento a la vez, es decir, si children contiene más de un elemento, arrojará un error.

  return (
    <header>
      {React.Children.toArray(children).map(child => React.cloneElement(child, { loading }))}
    </header>
  );
}

export { TodoHeader };
