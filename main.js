const baseUrl = "https://chippie.codes/wp-json/wp/v2/posts"
const itemContainer = document.querySelector(".content-posts")


async function getItems(url){ 
    
  const response = await fetch(url);
  const items = await response.json();
  const posts = items.posts_data;
  console.log(items.posts_data);
  items.forEach(function(item){
      itemContainer.innerHTML += `
      <div class="content-post">
      <div class="content-post-left">
        <img src="https://picsum.photos/100" alt="">
      </div>
      <div class="content-post-right">
        <h4>${item.title}</h4>
        <p> ${item.content.rendered} </p>
      </div>
    </div>`
  })
}

getItems(baseUrl);