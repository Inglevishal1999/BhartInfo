/* 
    to target or select id then we use dom selector called getElementById()
*/
/* 
    variables are used to store a data
    variable_name = value
    keyword variable_name = value
    var, let, const 
*/

/* const name = "mayur"
const contact = 7719090215
console.log(name)
console.log(contact) */

//console.log(document)

const hamburger = document.getElementById("hamBurger")
const navLinks = document.getElementById("navLinks")

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle("active")
})



 
