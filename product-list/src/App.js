import products from "./products";
function listProduct(products)
{
  if(products.length>0){
    return products.map((product)=>(
        <li key={product.id}>{product.name+"     "+product.price +"    "} 
        <button onClick={()=>{console.log(product.name)}}>
          Click Me</button></li>
    ))
  }
  else
  {
    return <li>THEIR IS NO PRODUCT IS AVAILABLE</li>
  }
}
function App() {
  return (
    <div>
      <ol>
        {listProduct(products)}
      </ol>
    </div>
  );
}

export default App;
