
const url = `https://fakestoreapi.com/products`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

 // Getting the Categories         
          const categories = [];
          let setCategory;
     data.forEach(obj => { 
         categories.push(obj.category)
     })
          setCategory = [...new Set(categories)]
          setCategory.forEach(elem => {
             let listItem = document.createElement('li')
            //  listItem.textContent = elem <--> Another way to display the list items
             listItem.innerHTML =  `
             <li><a href="#">${elem}</a></li>
             `
             document.querySelector('.category').appendChild(listItem)
         })
          
    // Getting the Products
          data.forEach(item => {
              
              const articles = document.createElement('article')
              articles.setAttribute('class', 'article');
              articles.innerHTML = `
                <a href="#">
                <span>${item.id}</span>
                <img src="${item.image}" alt="item"> 
                <h3>${item.title}</h3>
                <span>$ ${item.price}</span>
                <span>${item.rating.rate}</span>
                <span>${item.rating.count}</span>
                <div>
                <button><a href="#">Add to cart</a></button>
                </div>
                
                
                </a>
              
              
              `
              document.querySelector('.content-container').append(articles)
          })
          
          
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


      //Home.html products api call

    //   async function getProducts () {
    //     try {
    //         const res = await fetch(`https://api.escuelajs.co/api/v1/products`)

    //         if(!res.ok) {
    //             throw new Error(`HTTP error: ${res.status}`)
    //         }
    //         // let homeCategory = []
    //         const data = await res.json()
    //         data.forEach(item => {
    //             // console.log(item)
    //             //getting all the images of the products
    //             item.images.forEach(img => {
    //                 console.log(img)
    //                 const homeArticles = document.createElement('article')
    //                 homeArticles.setAttribute('class', 'home-article');
    //             // inserting the images into an image tag 
    //                 homeArticles.innerHTML = `
    //                 <img src="${img}" alt="item"> 
    //                 `
    //             document.querySelector('#home-products').append(homeArticles)

    //             })

                

    //         })
    //         // console.log(data)
            
    //     } catch (error) {
    //            console.log(`Error: ${error}`) 
    //   }
    // }

    // getProducts()

    async function getProducts() {
        try {
            const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
    
            if (!res.ok) {
                throw new Error(`HTTP error: ${res.status}`);
            }
    
            const data = await res.json();
    
            data.forEach(item => {
                // Create a new article element for each product
                const homeArticles = document.createElement('article');
                homeArticles.setAttribute('class', 'home-article');
    
                // Loop through each image for the product
                item.images.forEach(img => {
                    console.log(img)
                    // Create an image element for each image
                    const imgTag = document.createElement('img');
                    imgTag.src = img;
                    imgTag.alt = "item";
    
                    // Append the image to the article
                    homeArticles.append(imgTag);
                });
    
                // Append the article to the #home-products section
                document.querySelector('#home-products').append(homeArticles);
            });
    
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
    
    getProducts();
    