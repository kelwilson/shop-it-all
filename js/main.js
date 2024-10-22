// Getting all products and product descriptions
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

         // Getting stars
         let all_ratings = 0,
         all_rate = 0;
         data.forEach(item => {
            all_ratings = item.rating.count;

         })
          
    // Getting the Products
          data.forEach(item => {
              
              const articles = document.createElement('article')
              articles.setAttribute('class', 'article');
              //   <span>${item.id}</span> 
            //   <span>${item.rating.rate}</span>
              articles.innerHTML = `
                <a href="#">
                <div class= "article_img-div">
                
                <img src="${item.image}" alt="item"> 
                </div>
                
                <div class="article-items">
                <h3>${item.title}</h3>
                <span>$ ${item.price}</span>
                <div class="article_star-div">
                <div class="article_star-one">
                    <div class="article_star-two"></div>
                    
                </div>
                <span class= "article_count"><i class="fa-solid fa-chevron-down"></i> ${item.rating.count}</span>
                </div>
                <div class="button-div">
                <button><a href="#">Add to cart</a></button>
                </div>
                </div>
                
                
                </a>
              
              
              `
              document.querySelector('.content-container').append(articles)

          })
          

          
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

// Getting stars and ratings

    //   async function getStars() {
    //     try {
    //         const res = await fetch(url)

    //         if(!res.ok) {
    //             throw new Error(`HTTP error: ${res.status}`)
    //         }

    //         const stats = await res.json()
    //             let total_rating = 0,
    //             rating_based_on_stars = 0;
    //             stats.forEach(stat => {

    //                 total_rating += stat.rating.count;
    //                 rating_based_on_stars += stat.rating.count * stat.rating.rate
    //                 console.log(total_rating)
    //                 console.log(stat.rating.rate)
    //             })

    //             stats.forEach(stat => {
    //                console.log(stat.rating.rate)
    //                 // Getting the ratings 
    //                             // console.log(rating)

    //                             let rating_progress = `
    //                                     <div class="rating__progress-value">
    //                                         <p>${stat.rating.rate} <span class="star">&#9733</span></p>
    //                                         <div class="progress">
    //                                             <div class="bar" style= "width: ${(stat.rating.count / total_rating) * 100}%;"></div>
    //                                         </div>
    //                                         <p>${stat.rating.count.toLocaleString()}</p>
    //                                     </div>
    //                             `;
        
    //                             document.querySelector('.rating__progress').innerHTML = rating_progress;
        
    //             })
    //             let average_rating = (rating_based_on_stars / total_rating).toFixed(1)
    //             document.querySelector('h1').innerText = average_rating
    //             document.querySelector('p').innerText = total_rating
    //             document.querySelector('.star-inner').style.width =  (average_rating / 5) * 100  + "%"

    //     } catch (error) {
    //         console.error(error)
    //     }
        
        
    //   }

    //   getStars()

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
                
                // let imageArr = {}
                // for(let i = 0; i < item.images.length; i++) {

                //     imageArr = item.images[i]
                // }
                // console.log(imageArr)
                // Create a new article element for each product
                const homeArticles = document.createElement('article');
                homeArticles.setAttribute('class', 'home-article');
                // console.log(item)
                // Loop through each image for the product
                item.images.forEach(img => {
                    // console.log(img)
                    // Create an image element for each image
                    const imgTag = document.createElement('img');
                    imgTag.src = img;
                    // console.log(img)
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
    