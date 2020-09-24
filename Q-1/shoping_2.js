let products=[
    {name:"White Tshirts",size:"L",color:"white",price:1200,image:"product1.jpg",description:"Good looking white tshirt"},
    {name:"Blue shirt",size:"M",color:"Blue",price:1500,image:"product2.jpg",description:"Good looking black shirt"},
    {name:"Gray Shirt",size:"S",color:"Gray",price:900,image:"product3.jpg",description:"Good looking checked shirt"},
    
    {name:"Black shirt",size:"L",color:"Black",price:1000,image:"product4.jpg",description:"Good looking white tshirt"},
    {name:"Gray Tshirt",size:"M",color:"Blue",price:2500,image:"product5.jpg",description:"Good looking black shirt"},
    {name:"White Jacket",size:"S",color:"Gray",price:1200,image:"product6.jpg",description:"Good looking checked shirt"},

    
    {name:"White Female Shirt",size:"M",color:"White",price:3000,image:"product7.jpg",description:"Beautiful Blazer"},
    {name:"Red Dress",size:"S",color:"Red",price:1300,image:"product8.jpg",description:"Good looking Top"},
    {name:"Coffee colour Dress",size:"M",color:"Coffee",price:1500,image:"product9.jpg",description:"Good looking Traditional dress"},

    {name:"Pink Saree",size:"M",color:"Pink",price:2000,image:"product10.jpg",description:"Beautiful Blazer"},
    {name:"Orange Saree",size:"S",color:"Orange",price:2500,image:"product11.jpg",description:"Good looking Top"},
    {name:"Yellow Saree",size:"M",color:"Yellow",price:3000,image:"product12.png",description:"Good looking Traditional dress"},
];
let cart=[];

function displayProducts(productsData,who="productwrapper"){
    let productsString="";
    productsData.forEach(function(product,index){

        // this is called Destructuring in javascritp
        let {name,image,color,description,price,size}=product;

        if(who=="productwrapper")
        {
            productsString +=`<div class="product">
        <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
            <button onClick="addToCart(${index})">Add To Cart</button>
        </p>
    </div>`;
        }
        else if(who=="cart") {
            productsString +=`<div class="product">
        <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
            <button onClick="removeFromCart(${index})">Remove From Cart</button>
        </p>
    </div>`;

        }


        
    });
    document.getElementById(who).innerHTML=productsString;
}

displayProducts(products);

function searchProduct(searchValue){
    // console.log(searchValue);
    let searchedProducts = products.filter(function (product,index){
        return product.name.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;        
    })

    displayProducts(searchedProducts);

    
}

function addToCart(cartproductindex){

    if(cart.length == 0)
    {
        cart.push(products[cartproductindex]);
    }
    else if (cart.length != 0){
        let e=cart.indexOf(products[cartproductindex]);
        if(e == -1)
        {
            cart.push(products[cartproductindex]);
            // console.log("no");
        }
        else{
            // console.log("Found");
            alert("Product Already In The Cart,Select Other One.");
        }
    }
    
    
    displayProducts(cart,"cart");
    document.getElementById("totalnumberofproductincart").innerHTML=cart.length;
       
}


function pricefilter(){
    let minprice=document.getElementById("searchminprice").value;
    let maxprice=document.getElementById("searchmaxprice").value;

    let result=products.filter(function(items){
        return items.price>=minprice && items.price<=maxprice;
    });
    displayProducts(result);

}


function removeFromCart(cartproductindex){
    cart.splice(cartproductindex,1);
    // cart.push(products[cartproductindex]);
    // console.log(cart);
    displayProducts(cart,"cart");
    document.getElementById("totalnumberofproductincart").innerHTML=cart.length;
}




