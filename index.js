
const products = [
    {
        id: 1,
        name: "hp core i7",
        category: "Laptop",
        price: " 50,000",
        img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craig-dennis-205421.jpg&fm=jpg",
    },
    {
        id: 2,
        name: "Best Gaming Phones 2023",
        category: "Smartphone",
        price: "75,000",
        img: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/04/Best-gaming-phone-2023.jpg",
    },
    {
        id: 3,
        name: "Official Huawei FreeBuds Studio Wireless Headphones",
        category: "Headphones",
        price: "42,999",
        img: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 4,
        name: "SAMSUNG Galaxy Tab S6 Lite 10.4 64GB",
        category: "Tablet",
        price: "199.9",
        img: "https://m.media-amazon.com/images/I/415G0bg-hiL._AC._SR360,460.jpg",
    },
    {
        id: 5,
        name: "Microsoft Surface Laptop 5 Core i7 ",
        category: "Laptop",
        price: "474,999 ",
        img: "https://www.mega.pk/items_images/Microsoft+Surface+Laptop+5+Core+i7+12th+Generation+16GB+RAM+512GB+SSD+13+5+inch+Windows+11+Price+in+Pakistan%2C+Specifications%2C+Features_-_23885.webp",
    },
    {
        id: 6,
        name: "HP Notebook 15",
        category: "Laptop",
        price: " 45,999.00 ",
        img: "https://www.hshop.pk/wp-content/uploads/2019/12/HP-Notebook-15-RA008nia-Price-in-Pakistan-hshop.pk_.png",
    },

    {
        id: 7,
        name: "nail paink",
        category: "makeup",
        price: "999",
        img: "https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/1/2/1267269-1.jpg",
    },
    {
        id: 8,
        name: "make up remover",
        category: "makeup",
        price: "3450",
        img: "https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/1/2/1230799-1.jpg",
    },
    {
        id: 9,
        name: "eyelashes curler",
        category: "makeup",
        price: "2459",
        img: "https://harcheez.pk/wp-content/uploads/2022/05/Eyelash-Curler-1.jpg",
    },
    {
        id: 10,
        name: "Zero Makeup Face Perfecting Palette, Porcelain",
        category: "makeup",
        price: "199.9",
        img: "https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/j/j/jj1215013-1.jpg",
    },
    {
        id: 11,
        name: "lipstick ",
        category: "makeup",
        price: "4,99 ",
        img: "https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/1/2/1202523-1.jpg",
    },
    {
        id: 12,
        name: "l'oreal Mascara  ",
        category: "makeup",
        price: " 2,899.00 ",
        img: "https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/i/u/iup1160707-1.jpg",
    },

    {
        id: 13,
        name: " girls denim shirt",
        category: "clothes girl",
        price: "85,75",
        img: "https://static-01.daraz.pk/p/aea4972591dfe8b91b7607dfa73310aa.jpg",
    },

    {
        id: 14,
        name: "girls long shirt",
        category: "clothes girl",
        price: "54,99",
        img: "https://i.pinimg.com/564x/41/af/00/41af0031e10af8e7513c94e0a85e55e4.jpg",
    },
    {
        id: 15,
        name: " girls t-shirt",
        category: "clothes girl",
        price: "9000",
        img: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/704944/1.jpg?5326" ,
    },

    {
        id: 16,
        name: " men shirt",
        category: "clothes men",
        price: "7,999",
        img: "https://outfitters.com.pk/cdn/shop/files/F0472103620M_1.jpg?v=1706678778",
    },

    {
        id: 17,
        name: " men T-shirt ",
        category: "clothes men",
        price: "5459",
        img: "https://outfitters.com.pk/cdn/shop/files/F0499103901_1.jpg?v=1706682421&width=360",
    },
    {
        id: 18,
        name: "men kurta ",
        category: "clothes men",
        price: "7859",
        img: "https://edenrobe.com/cdn/shop/products/23_M_MenKurta_EMTK22S-99239_1_2a76afc3-b5bc-4bb0-82b2-a3d6ae17fdbb_375x_crop_center.jpg?v=1701453657",
    },
    {
        id: 19,
        name: "men trainers",
        category: "shoes men",
        price: "17,498 ",
        img: "https://www.urbansole.com.pk/cdn/shop/products/EX-PG-3203White_669x669.jpg?v=1706245422",
    },
    {
        id: 20,
        name: "girls trainers",
        category: "shoes girl",
        price: "16,599 ",
        img: "https://1ststep.pk/cdn/shop/files/4_280eec6e-1a74-44b8-87cb-ba3dff01141d_720x.webp?v=1706687933",
    },
    {
        id: 21,
        name: "girls sandels ",
        category: "shoes girl",
        price: "18,999",
        img: "https://1ststep.pk/cdn/shop/files/4_2e53bb34-1f19-49c5-a20a-0d3566836bfa_720x.webp?v=1705658916",
    },
  
]
let productSection = document.querySelector(".product-section");

function searchItem(products, itemToSearch) {
    let item = itemToSearch.toLowerCase();
    let result = products.filter((e) => {
        let productName = e.category.toLowerCase();

        return productName.includes(item);
    });
    return result;
}


// let result = searchItem(products, "Laptop");
//   console.log(result);


function generateProductCard(product) {
    return `
    <div class="product-card">
      <img class="product-image" src="${product.img}" alt="${product.name}">
      <div class="product-info"  pid='${product.id}'  pname='${product.name}' pprice='${product.price}'  pimg='${product.img}'>
        <div class="product-title">${product.name}</div>
        <div class="product-price" >${product.price} PKR</div>
        <button class="btn" onclick="addToCart(this)">Add to cart</button>

      </div>
    </div>
  `;
}



let productCardsHTML;

productCardsHTML = products.map(generateProductCard).join("");
productSection.innerHTML = productCardsHTML;

function handleSearch(searchTerm) {
    let searchResult = searchItem(products, searchTerm);
    if (searchResult.length > 0) {
        productCardsHTML = searchResult.map(generateProductCard).join("");
        productSection.innerHTML = productCardsHTML;
    } else {
        productSection.innerHTML = `<div class='no-match'>no match Found ...</div>`;

    }
}

/////////////////////////////// add to cart /////////////////////////////
let cartItems = [];

const addToCart = (e) => {

    // console.log(e.parentNode.parentNode);
    const itemName = e.parentNode.getAttribute('pname');
    const itemPrice = e.parentNode.getAttribute('pprice');
    const itemImg = e.parentNode.getAttribute('pimg');
    const itemId = e.parentNode.getAttribute('pid');

    const existingItem = cartItems.find(product => product.pid == itemId);

    if (existingItem) {
        existingItem.quantity += 1;
        createCart(cartItems);
    } else {
        cartItems.push({ name: itemName, price: itemPrice, img: itemImg, pid: itemId, quantity: 1 });
        document.getElementById('cartLength').innerHTML = cartItems.length;
        createCart(cartItems);
    }


    // console.log(cartItems);
}


function removeCartItem(itemId) {
    const itemIndex = cartItems.findIndex(item => item.pid == itemId);

    if (itemIndex !== -1) {
        const removedItem = cartItems.splice(itemIndex, 1)[0];
        createCart(cartItems);

        document.getElementById('cartLength').innerHTML = cartItems.length;
        const total = calculateCartTotal(cartItems);
        document.getElementById('cartTotal').innerHTML = total.toFixed(2);

        // console.log(`Removed item: ${removedItem.name}`);
    }
}

function increaseQuantity(itemId) {
    const cartItem = cartItems.find(item => item.pid == itemId);
    if (cartItem) {
        cartItem.quantity += 1;
        createCart(cartItems);
    }
}

function decreaseQuantity(itemId) {
    const cartItem = cartItems.find(item => item.pid == itemId);
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        createCart(cartItems);
    }
}

function calculateCartTotal(items) {
    let total = 0;
    items.forEach((item) => {
        total += parseFloat(item.price.replace(',', '')) * item.quantity;
    });
    return total;
}

function createCart(items) {
    document.getElementById('cart-body').innerHTML = items.map((e, i) => {
        // console.log(e);

        return `

        <div class="cartItem">
          <img
            src= '${e.img}'
            alt="${e.name}"
          />
  
          <div class="cartItemDetail">
            <h3>${e.name}</h3>
            <h3>${e.price} PKR</h3>
            <b> 
            <button class="smBtn increaseBtn" onclick="increaseQuantity('${e.pid}')">+</button>
             qty: ${e.quantity}
             <button class="smBtn decreaseBtn" onclick="decreaseQuantity('${e.pid}')">-</button>
             </b>
             <button class=" removeBtn" onclick="removeCartItem('${e.pid}')">X</button>

          </div>
          </div>
  `
    })
    const total = calculateCartTotal(items);
    document.getElementById('cartTotal').innerHTML = total.toFixed(2);

}




function clearCart() {
    cartItems.length = 0;
    alert("pament successfully")
    createCart(cartItems);
    document.getElementById('cart').style.display = 'none'
}
function toggleCart() {
    document.getElementById('cart').style.display = 'block'
}
function closeBtn() {
    document.getElementById('cart').style.display = 'none'
}


//--------------------------- nav bar ------------------------// 
const mobile = document.querySelector(".mobile");
const navMenu = document.querySelector(".nav-menu");

mobile.addEventListener("click", mobileMenu);

function mobileMenu() {
    mobile.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// //////////////////// form start  // ///////////////////
function Signup() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// -----------------------slider -------------------//
let currentSlide = 0;
const intervalTime = 5000; // 5 seconds

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function autoSlide() {
    nextSlide();
}

// Set interval for auto slide
setInterval(autoSlide, intervalTime);