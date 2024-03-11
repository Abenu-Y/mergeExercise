

function myFunction(){
    let data = "";  let name = document.getElementById("userName").value
    let email = document.getElementById("userEmail").value
    let comment = document.getElementById("userComment").value

data = "User name : "+name+"<br/>User email : "+email+ "<br/>User comment : "+comment

document.getElementById("data").innerHTML = data  // display data to paragraph


console.log("Merge Exercise");

alert("merge exercise");
console.log("fork before commit")

console.log(`User name${name} <br> User email${email}`);
}

