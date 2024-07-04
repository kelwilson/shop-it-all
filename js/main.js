//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`
// }

const url = `https://fakestoreapi.com/products`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)

 // Getting the Categories         
          const categories = []
          data.forEach(obj => { 
              categories.push(obj.category)
            })
            const setCategory = [...new Set(categories)]
            console.log(setCategory);
            const listItem = document.createElement('li')
            setCategory.forEach(ele => {
                console.log(ele);
                listItem.innerHTML = `
                  <li>${ele}</li>
                ` 
            document.querySelector('.category').appendChild(listItem)
            })
          
          
    // Getting the Products
        //   data.forEach(item => {
        //       console.log(item);
        //       const articles = document.createElement('article')
        //       articles.setAttribute('class', 'article');
        //       articles.innerHTML = `
        //         <a>
        //         <span>${item.id}</span>
        //         <img src="${item.image}" alt="item">
        //         <h2>${item.title}</h2>
        //         <span>$ ${item.price}</span>
        //         <span>${item.rating.rate}</span>
        //         <span>${item.rating.count}</span>
                
                
        //         </a>
              
              
        //       `
        //       document.querySelector('.content-container').append(articles)
        //   })
          
          
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


