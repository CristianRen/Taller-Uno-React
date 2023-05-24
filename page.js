/*export default function WelcomeMessage(){
  return(
    <p>Bienvenidos al taller de <strong>React</strong></p>
  )
}
*/
export default function ProductCard() {
  const productos = [
    {
      nombre: "Arroz",
      precio: 2500,
      descripcion: "Arroz blanco de 250g",
    },
    {
      nombre: "Atún",
      precio: 3200,
      descripcion: "Atún de 80g a base de aceite de oliva",
    },
    {
      nombre: "Café",
      precio: 20000,
      descripcion: "Café artesanal de origen 250g",
    },
    {
      nombre: "Pastas",
      precio: 6500,
      descripcion: "Pastas italianas de 120g",
    },
  ];
  return (
    <ul>
      {productos.map((elemento, i) => {
        return <ProductList productos={elemento} lista={i}></ProductList>;
      })}
    </ul>
  );
}

const ProductList = (datos) => {
  return (
    <li>
      <p>
      <br></br>
        <p>Producto: {datos.lista}</p>  <br></br>
        <strong>
          {datos.productos.nombre}
          <br></br>
          {datos.productos.precio}
          <br></br>
          {datos.productos.descripcion}
        </strong>{" "}
      </p>
    </li>
  );
};
