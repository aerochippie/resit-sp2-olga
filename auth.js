const baseUrl = "https://chippie.codes/wp-json/jwt-auth/v1/token"

  async function authUser(url, user) {
    const data = {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };
    const response = await fetch(url, data)
    const json = await response.json();

    // if (response.status === 401) {
    //     emailError.innerHTML = "Your credentials dont match any user in the system"
    //     passwordError.innerHTML = "Your credentials dont match any user in the system"
    // }

    const bearerToken = json.token;
    const userName = json.user_nicename;

    if (response.status === 200) {
        window.localStorage.setItem("token", bearerToken);
        window.localStorage.setItem("user_nicename", userName);
        window.location = "./index.html"
    }
}

function loginValidation(e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = {
        username: username,
        password: password
    };
    authUser(baseUrl, user)
}

const loginButton = document.getElementById('login');


if(loginButton){
    loginButton.addEventListener('click', loginValidation);
}


