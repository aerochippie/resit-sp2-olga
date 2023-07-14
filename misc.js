
const logout =  document.getElementById("logout-link");


function clearStorage  () {
    localStorage.clear()
}
logout.addEventListener('click', clearStorage)


if (window.localStorage.getItem("token") === null) {
    document.getElementById("login-link").style.display = 'block';
    document.getElementById("logout-link").style.display = 'none';
    document.getElementById("delete-post-button").style.display = 'none';
    document.getElementById("edit-post-button").style.display = 'none';
    document.getElementById("add-post-here").style.display = 'none';
} else {
    document.getElementById("login-link").style.display = 'none';
    document.getElementById("logout-link").style.display = 'block';
    document.getElementById("delete-post-button").style.display = 'inline';
    document.getElementById("edit-post-button").style.display = 'inline';
    document.getElementById("add-post-here").style.display = 'block';
}




// if (window.localStorage.getItem("token") === null) {
//     document.getElementById("logout-link").style.display = 'none';
// } else {
//     document.getElementById("logout-link").style.display = 'block';
// }


// if (window.localStorage.getItem("token") === null) {
//     document.getElementById("delete-post-button").style.display = 'none';
// } else {
//     document.getElementById("delete-post-button").style.display = 'inline';
// }


// if (window.localStorage.getItem("token") === null) {
//     document.getElementById("edit-post-button").style.display = 'none';
// } else {
//     document.getElementById("edit-post-button").style.display = 'inline';
// }





