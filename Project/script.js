fetch("https://raw.githubusercontent.com/svales92/Cloud-Systems-Computing/Devolop-/json%20example/products.json")
.then(function(response){
  return response.json();
})

.then(function(products){
  let placeholder= document.querySelector("#data-output");
  let out= "";
  for(let product of products){
    out += `
      <tr>
        <td><img src= '${product.image}'alt="NOT AVAILABLE" ></td>
        <td>${product.name}</td>
        <td>${product.Price}</td>
        <td>${product.Inventory}</td>
      </tr>

    `;
    }




    placeholder.innerHTML= out;
})

function addNumbers() {
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);
  var result = a * b;
  document.getElementById('Calculate').innerHTML = "Result: " + result;
}