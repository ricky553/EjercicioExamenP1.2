fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data =>{
    let card = '<div class="row row-cols-1 row-cols-md3 g-4">'

    for ( let user of data){
        card += `<div class="col">
                    <div class="card">
                        <img src="${user.image}" class="cars-img-top" alt="Usuario">
                        <div class="card-body">
                            <h5 class="card title">${user.tittle}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Categoria: </strong>${user.category}</li>
                                <li class="list-group-item"><strong>Descripcion: </strong>${user.description}</li>
                                <li class="list-group-item"><strong>Precio: </strong>${user.price}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
    }

    card += '</div>'

    document.getElementById("cardList").innerHTML = card
})