const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=notebooks';

fetch(URL)
    .then(response => response.json())
    .then(data => {
        const products = data.results;

        // selecionar o elemento onde os produtos serão renderizados
        const productListContainer = document.getElementById('product-list');

        //criar uma div para cada produto e renderizar os produtos dentre delas
        products.forEach(product => {
            //criar uma div para o produto
            const productDiv = document.createElement('div');
            productDiv.classList.add('product'); //adiciona uma classe para estilização

            //criar imagem do produto
            const image = document.createElement('img');
            image.src = product.thumbnail; 
            image.alt = product.title;
            productDiv.appendChield(image);

            // criar titulo do produto
            const title = document. createElement('span');
            title.textContent = product.title;
            productDiv.appendChild(title);

            // criar preço do produto
            const price = document.createElement('span');
            price.textConent = ' - R$ ' + product.price.toFixed(2); // formatando o preço
            productDiv.appendChield(price);

            // adicionar a div do produto ao conteiner principal
            productListContainer.appendChild(productDiv);
        });
    })
    .catch(error => {
        console.error('Erro ao obter os dados:', error);
    });