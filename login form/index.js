let login = document.querySelector("#login");
let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let modal = document.querySelector("#modal");
let form = document.querySelector("#form");

// -------------------event click------------------

// login.addEventListener('click',function(){
// let userNameValue=userName.value
//     console.log(userNameValue);

//     let passwordValue=password.value
//     console.log(passwordValue);

//     // let modalValue=modal.textContent

//     if(userNameValue.length<11){
//         modal.textContent="Your username must be at least 12 characters long "
//         modal.style.display="block"
//     }else if(passwordValue.length<7){
//         modal.textContent="Your password must be at least 8 characters long "
//         modal.style.display="block"
//     }else{
//         modal.textContent="Welcome "
//         modal.style.display="block"
//         modal.style.backgroundColor="green"
//       }
//       setTimeout(() => {
//           modal.style.display="none"
//       modal.style.backgroundColor="red"
//       }, 3000);

// })

// -------------------event submit && form data-------------------

// form.addEventListener("submit", function (e) {
//   let form = document.querySelector("#form");
//   e.preventDefault();
//   const formData = Object.fromEntries(new FormData(form).entries());
//   console.log(formData);

//   let userNameValue = formData.userName;
//   let passwordValue = formData.password;
//   // console.log(userNameValue);
//   if (userNameValue.length < 12) {
//     modal.textContent = "Your username must be at least 12 characters long ";
//     modal.style.display = "block";

//   } else if (passwordValue.length < 8) {
//     modal.textContent = "Your password must be at least 8 characters long ";
//     modal.style.display = "block";

//   } else {
//     modal.textContent = "Welcome ";
//     modal.style.display = "block";
//     modal.style.backgroundColor = "green";
// }
// setTimeout(() => {
//   modal.style.display = "none";
//   modal.style.backgroundColor = "red";
// }, 3000);
// });

// -------------------event blur------------------

// userName.addEventListener("blur",function(){
//   let userNameValue=userName.value

//   if (userNameValue.length < 12) {
//           modal.style.backgroundColor = "red";
//         modal.textContent = "Your username must be at least 12 characters long ";
//         modal.style.display = "block";
//         setTimeout(() => {
//           modal.style.display = "none";
//           modal.style.backgroundColor = "inherit";
//         }, 3000);
//       }})

//         password.addEventListener("blur",function(){
//           let passwordValue=userName.value
//     if (passwordValue.length < 8) {
//           modal.style.backgroundColor = "red";
//         modal.textContent = "Your password must be at least 8 characters long ";
//         modal.style.display = "block";

//         setTimeout(() => {
//           modal.style.display = "none";
//           modal.style.backgroundColor = "inherit";

//         }, 3000);
// }})

// --------------- event blur with to addEventListener --------------

// function checkBlur(focusItem,Length){
//   focusItem.addEventListener("blur",function(){
//     let userNameValue=focusItem.value
//     if (userNameValue.length < Length) {
//       let show;
//       focusItem===userName ? show= 'user Name' :show="Password"
//       modal.textContent = `Your ${show} must be at least ${Length} characters long `;
//           modal.style.backgroundColor = "red";
//           modal.style.display = "block";
//           setTimeout(() => {
//             modal.style.display = "none";
//           modal.style.backgroundColor = "inherit";

//           }, 3000);
//         }})
// }

// userName.addEventListener('focus',checkBlur(userName,12))
// password.addEventListener('focus',checkBlur(password,8))

// --------------- using blur with arry in bind ------------------

// let checkBlur=function(args){
//   let input=args[0]
//   let Length=args[1]
//   let userValue=input.value
//   if (userValue.length < Length) {
//       let show;
//       args[0]===userName ? show= 'user Name' :show="Password"
//       modal.textContent = `Your ${show} must be at least ${Length} characters long `;
//     modal.style.backgroundColor = "red";
//     modal.style.display = "block";

//     setTimeout(() => {
//       modal.style.display = "none";
//       modal.style.backgroundColor = "inherit";

//     }, 3000);
//   }}

//   userName.addEventListener("blur",checkBlur.bind(this,[userName,12]))
//   password.addEventListener("blur",checkBlur.bind(this,[password,8]))

// ---------------- using blur with bind ----------------

// let checkBlur=function(input,Length){
//   let userdValue=input.value
//   if (userdValue.length < Length) {
//      let show;
//       input===userName ? show= 'User Name' :show="Password"
//       modal.textContent = `Your ${show} must be at least ${Length} characters long `;
//     modal.style.backgroundColor = "red";
//     modal.style.display = "block";

//     setTimeout(() => {
//       modal.style.display = "none";
//       modal.style.backgroundColor = "inherit";

//     }, 3000);
//   }}

//   userName.addEventListener("blur",checkBlur.bind(this,userName,12))
//   password.addEventListener("blur",checkBlur.bind(this,password,8))

// --------------- check validaition ----------------

// let userNameHelp=document.querySelector('#userNameHelp')
// let passwordHelp=document.querySelector('#passwordHelp')

// function checkValid(input,inputHelp,nameLength){
//   input.addEventListener('keyup',function(){
//     let length=input.value.length
//     if(length<nameLength){
//       inputHelp.style.color='red'
//       inputHelp.style.display='block'
//     }else{
//       inputHelp.style.color='green'
//       setTimeout(() => {
//         inputHelp.style.display='none'
//       }, 3000);

//     }
//   })
//   }

//   userName.addEventListener('focus',checkValid(userName,userNameHelp,12))
//   password.addEventListener('focus',checkValid(password,passwordHelp,8))
// -----------------------------------------------------------------------
