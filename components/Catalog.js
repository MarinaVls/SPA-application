function Catalog () {

    this.create = (data) => {
        const catalog = document.createElement('div');
        catalog.classList.add('catalog');

        let listItem ='';
        
        data.forEach(({title, id, image, price}) => {
            listItem += `<li class="catalog__item">
                            <div class="catalog__item__wrapper">
                                <div class="catalog__item__img">
                                    <img src="${image}">
                                </div>
                                <div class="catalog__item__title">
                                    <a href="#catalog/${id}" target="_blank">${title}</a>
                                </div>
                                <div class="catalog__item__price">
                                    ${price} BYN
                                </div>
                                <div class="catalog__item__btn">
                                    <button id="${id}" class="catalog__item__button-add">Add to cart</button>
                                </div>
                            </div>
                        </li>`
            
        });
        catalog.innerHTML = `<div class='container'>
                                <div class="catalog__wrapper">
                                    <ul class="catallog__items">
                                        ${listItem}
                                    </ul>
                                </div>
                            </div>`

        return catalog;
    }

    this.init = async() => {
        const data = await this.getCatalogData();
        if(location.hash.includes('/')){
            const productData = this.getProductData(data)
           return this.createProduct(productData)
        }else{
            return this.create(data)
        }
    }

    this.createProduct = ({title, description, image, id, price, category}) => {
        const product = document.createElement('div')
        product.classList.add('product');

        product.innerHTML = `<div class="container">
                                <div class="product__wrapper">
                                    <div class="product__title">
                                        <h1>${title}</h1>
                                    </div>
                                    <div class="product__item__wrapper">
                                        <div class="product__img">
                                            <img src="${image}">
                                        </div>
                                        <div class="product__caption">
                                            <div class="product__category">
                                                <h2>${category}</h2>
                                            </div>
                                            <div class="product__description">
                                                ${description}
                                            </div>
                                            <div class="product__price">
                                                Price:<span>${price} </span>BYN
                                            </div>
                                            <div class="catalog__item__btn">
                                                <button id="${id}" class="product__item__button-add">Add to cart</button>
                                                <button onclick="window.location.href='#catalog'" class="product__item__button">Come back</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div`;
        return product;
    }

    this.getProductData = (data) => {
        const idProduct = location.hash.split('/')[1]
        const productData = data.filter(({id}) => id == idProduct)
        return productData[0]
    }

    this.getCatalogData = async() => {
        let data = [];

        if (localStorage.getItem('catalogData')) {
            data = JSON.parse(localStorage.getItem('catalogData'))
        }else{
           const response = await fetch ('https://fakestoreapi.com/products')
            data = await response.json()
            localStorage.setItem('catalogData', JSON.stringify(data))
        }
        return data         
    }
}

const catalog = new Catalog()

export default catalog