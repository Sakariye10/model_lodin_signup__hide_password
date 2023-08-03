const formOpenBtn = document.querySelector("#form_open"),
 home = document.querySelector(".home"),
 formContainer = document.querySelector(".form_container"),
 formCloseBtn = document.querySelector(".form_close"),
 signupBtn = document.querySelector("#SignUp"),
 LoginBtn = document.querySelector("#Login"),
 pwShowHide = document.querySelectorAll(".hide");


 formOpenBtn.addEventListener("click", ()=> home.classList.add("show"))
 formCloseBtn.addEventListener("click", ()=> home.classList.remove("show"))




 pwShowHide.forEach(icon =>{
    icon.addEventListener("click", () => {
        let getPwinput = icon.parentElement.querySelector("input")
    if(getPwinput.type === "password"){
        getPwinput.type = "text";
        icon.classList.replace("fa-eye-slash", "fa-eye")
    }else{
         getPwinput.type = "password";
        icon.classList.replace("fa-eye-", "fa-eye-slash")
    }
    })
 })

 signupBtn.addEventListener("click", (e)=> {
e.preventDefault();
formContainer.classList.add("active");

 });
  LoginBtn.addEventListener("click", (e)=> {
e.preventDefault();
formContainer.classList.remove("active");

 })