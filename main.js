const baseUrl = "https://chippie.codes/wp-json/wp/v2/posts?per_page=100"
const addPostUrl = "https://chippie.codes/wp-json/wp/v2/posts"
const Cat1Container = document.querySelector(".content-posts-cat1")
const Cat2Container = document.querySelector(".content-posts-cat2")
const Cat3Container = document.querySelector(".content-posts-cat3")
const AllPostsContainer = document.querySelector(".content-container-all")


const categoryJsUrl = baseUrl + "&categories=5"
const categoryCssUrl = baseUrl + "&categories=4"
const categoryHtmlUrl = baseUrl + "&categories=3"


async function getItems(url,cat){ 
    
  const response = await fetch(url);
  const items = await response.json();
  console.log(items);
  items.forEach(function(item){
      cat.innerHTML += `
      <div class="content-post" data-id=${item.id}>
      <div class="content-post-left">
        <img src="https://picsum.photos/100" alt="">
      </div>
      <div class="content-post-right">
        <h4><a href="detail.html?id=${item.id}">${item.title.rendered}</a></h4>
        <p> ${item.excerpt.rendered.substr(0, 150)}... </p>
      </div>
    </div>`
  })
}

getItems(categoryHtmlUrl, Cat1Container);
getItems(categoryCssUrl, Cat2Container);
getItems(categoryJsUrl, Cat3Container);
getItems(baseUrl, AllPostsContainer);

const searchField = document.querySelector("#search-field");


  searchField.addEventListener('input', (e) => {
    const newValue = e.target.value;
    const newUrl = baseUrl +`&search=${newValue}`;
    AllPostsContainer.innerHTML ="";
    getItems(newUrl, AllPostsContainer);
  })


  
async function addItem(url, content){ 
  const token = localStorage.getItem("token")
  const data = {
      method: "POST",
      headers: {
          "content-Type": "application/json",
          'Authorization': "Bearer" + token
      }, body: JSON.stringify(content), }
 
  const response = await fetch(url,data);
  const item = await response.json();
  
  if (response.status === 201) {
    window.location.reload()
}
  console.log(response);
  console.log(item);

} ;

const publishButton = document.querySelector("#publish-post");

publishButton.addEventListener('click', (e)=> {
  e.preventDefault();
  const postTitle = document.querySelector("#post-title").value;
  const postContent = document.querySelector("#content").value;
  const postCat = document.querySelector("#option-javascript").value;

  
  const newContent = {
    title : postTitle,
    content : postContent,
    categories : postCat,
    status : "publish"
  }

  addItem(addPostUrl, newContent)
})

if (window.localStorage.getItem("token") === null) {

  document.getElementById("add-post-here").style.display = 'none';
} else {

  document.getElementById("add-post-here").style.display = 'block';
}

