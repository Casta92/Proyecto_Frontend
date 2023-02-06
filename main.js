const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const detalleProductosCarrito = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

const productList = [];

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleDetalleCarrito);

function toggleDesktopMenu(){
    const isCarritoClosed = detalleProductosCarrito.classList.contains('inactive');

    if (!isCarritoClosed) {
        detalleProductosCarrito.classList.add('inactive')            
    }  
    // console.log("diste click")
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu (){
    const isCarritoClosed = detalleProductosCarrito.classList.contains('inactive');

    if (!isCarritoClosed) {
        detalleProductosCarrito.classList.add('inactive')            
    } 
    mobileMenu.classList.toggle('inactive')
}
function toggleDetalleCarrito (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')            
    }    
    detalleProductosCarrito.classList.toggle('inactive')
}

// Product Cards

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
})
productList.push({
    name: 'Pink Scooter',
    price: 2800,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
})
productList.push({
    name: 'Camera',
    price: 800,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText= '$'+ product.price;
    
        const productName = document.createElement('p');
        productName.innerText= product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    
    }
}
renderProducts(productList)
