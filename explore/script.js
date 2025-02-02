const foodSpotGrid = document.querySelector('.food-spot-grid');
const searchResultGrid = document.getElementById('search-result');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const foodItems = [
    { image: 'assets/biriyani.jpg', name: 'Biriyani', link: 'biriyani.html', rating: '★★★★☆' },
    { image: 'assets/burger.jpg', name: 'Burger', link: 'burger.html', rating: '★★★☆☆' },
    { image: 'assets/chat.jpg', name: 'Chaat', link: 'chaat.html', rating: '★★★★☆' },
    { image: 'assets/desserts.jpg', name: 'Desserts', link: 'desserts.html', rating: '★★★★★' },
    { image: 'assets/dosa.jpg', name: 'Dosa', link: 'dosa.html', rating: '★★★★☆' },
    { image: 'assets/juice.jpg', name: 'Juice', link: 'juice.html', rating: '★★★★☆' },
    { image: 'assets/noodles.jpg', name: 'Noodles', link: 'noodles.html', rating: '★★★☆☆' },
    { image: 'assets/pizza.jpg', name: 'Pizza', link: 'pizza.html', rating: '★★★★★' },
];

function createFoodCard(foodItem) {
    const card = document.createElement('div');
    card.classList.add('food-spot-card');

    const button = document.createElement('button');
    button.classList.add('food-button');
    button.dataset.link = foodItem.link;

    button.innerHTML = `
        <img src="${foodItem.image}" alt="${foodItem.name}">
        <h3>${foodItem.name}</h3>
        <div class="rating">${foodItem.rating}</div>
    `;

    button.addEventListener('click', () => {
        window.location.href = foodItem.link;
    });

    card.appendChild(button);

    return card;
}

function displayFoodItems(items, container) {
    container.innerHTML = ''; 
    items.forEach(foodItem => {
        const card = createFoodCard(foodItem);
        container.appendChild(card);
    });
}

function searchFood() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filteredItems = foodItems.filter(item => item.name.toLowerCase().includes(searchTerm));

    if (filteredItems.length > 0) {
        displayFoodItems(filteredItems, searchResultGrid);
        searchResultGrid.style.display = 'grid';
    } else {
        searchResultGrid.innerHTML = '<p>Item Not Found</p>';
        searchResultGrid.style.display = 'block';
    }
}

searchButton.addEventListener('click', searchFood);

displayFoodItems(foodItems, foodSpotGrid); // Display all items initially