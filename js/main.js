
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
                
                
                </a>
              
              
              `
              document.querySelector('.content-container').append(articles)
          })
          
          
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


