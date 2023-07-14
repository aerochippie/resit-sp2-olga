const params = document.location.search;
const urlParams = new URLSearchParams(params)
const id = urlParams.get("id")
console.log(id)
const editTitle = document.getElementById("edit-post-title")
const editContent = document.getElementById("content")
const detailUrl = "https://chippie.codes/wp-json/wp/v2/posts/" + id;
console.log(detailUrl)
const container = document.querySelector(".detail-container")


async function getItem(url, container){ 
    
    const response = await fetch(url);
    const item = await response.json();

    container.innerHTML += `
        <div class="title"> <h2> ${item.title.rendered} </h2></div>
        <div class="description">
        ${item.content.rendered}
        </div>
        </div>`

    editTitle.setAttribute("value", item.title.rendered)
    editContent.innerHTML = item.content.rendered
}

  getItem(detailUrl,container)


  async function deleteItem(url){ 
    const token = localStorage.getItem("token")
    const data = {
        method: "DELETE",
        headers: {
            "content-Type": "application/json",
            'Authorization': "Bearer" + token
        } }
   
    const response = await fetch(url,data);
    console.log(response)
    const item = await response.json();
    console.log(item)
    if (response.status === 200 ){
        window.location = "./index.html"
} };



const editForm =  document.querySelector(".edit-post")
const editPostbutton =  document.getElementById("edit-post-button");
editPostbutton.addEventListener('click', ()=>{

    if (editForm.style.display === "block") {
        editForm.style.display = "none"
    } else {
        editForm.style.display = "block"
    }


})




const updatePostbutton =  document.getElementById("update-post-button");

async function editItem(url, updateData){ 
    const token = localStorage.getItem("token")
    const data = {
        method: "PUT",
        headers: {
            "content-Type": "application/json",
            'Authorization': "Bearer" + token
        }, body: JSON.stringify(updateData), }
   
    const response = await fetch(url,data);
    console.log(response)
    const item = await response.json();
    console.log(item)
    if (response.status === 200 ){
        window.location = "./index.html"
} };
updatePostbutton.addEventListener('click', (e)=> {
    e.preventDefault();
    const postTitle = document.querySelector("#edit-post-title").value;
    const postContent = document.querySelector("#content").value;
  
    
    const newContent = {
      title : postTitle,
      content : postContent,
      status : "publish"
    }
  
    editItem(detailUrl, newContent)
  })

  const cancelPostbutton =  document.getElementById("cancel-post-button");
cancelPostbutton.addEventListener('click', ()=>{

        editForm.style.display = "none"


})


const deletePostbutton =  document.getElementById("delete-post-button");
deletePostbutton.addEventListener('click', function(){
    deleteItem(detailUrl)
})

