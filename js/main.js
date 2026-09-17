// Gerenciamento do Carrinho de Compras
let cart = [];

const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartCount = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalValue = document.getElementById('cartTotalValue');

// Abrir e fechar Sidebar do Carrinho
cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
});

closeCart.addEventListener('click', closeCartSidebar);
overlay.addEventListener('click', closeCartSidebar);

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Adicionar produto ao carrinho
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartUI();
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
}

// Atualizar interface do carrinho
function updateCartUI() {
    // Atualiza o contador de itens
    cartCount.textContent = cart.length;

    // Se estiver vazio
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Seu carrinho está vazio.</p>';
        cartTotalValue.textContent = 'R$ 0,00';
        return;
    }

    // Renderiza os itens
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div>
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
            </div>
            <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartTotalValue.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Remover item do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}