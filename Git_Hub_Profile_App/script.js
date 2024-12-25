const APIURL="https://api.github.com/users/";

const search_box=document.querySelector("#search-box")
const button=document.querySelector("#search-btn")

const profile=document.querySelector(".avatar")
const NAME=document.querySelector(".name")
const USERNAME=document.querySelector(".UserName")
const ID=document.querySelector(".id")
const NODEID=document.querySelector(".node_id")
const CREATEDDATE=document.querySelector(".create_at")
const PUBLICGISTS=document.querySelector(".public_gists")
const PUBLICREPOS=document.querySelector(".public_repos")
const FOLLOWERS=document.querySelector(".followers")
const FOLLOWING=document.querySelector(".following")
const EMAIL=document.querySelector(".email")
const COMPANY=document.querySelector(".company")

const getuser = async (username)=>{
    const responce= await fetch(APIURL+username);
    const data =  await responce.json();

    profile.src = data.avatar_url;
    NAME.innerHTML="Name : " +data.name;
    USERNAME.innerHTML="UserName : " + data.login;
    ID.innerHTML="ID : "+ data.id;
    NODEID.innerHTML=" NodeId : " + data.node_id;
    CREATEDDATE.innerHTML="Created Date: " + data.created_at;
    PUBLICGISTS.innerHTML="PublicGits : " + data.public_gists;
    PUBLICREPOS.innerHTML="PublicRepos : " + data.public_repos;
    FOLLOWERS.innerHTML="Followers : " + data.followers;
    FOLLOWING.innerHTML="Following : " + data.following;
    COMPANY.innerHTML="Company : " + (data.company||"N/A");
}
button.addEventListener("click", function () {
    const username = search_box.value; // Get the input value
    if (username) {
      getuser(username); // Call the function with the input value
      search_box.value=''
    } else {
      alert("Please enter a username!");
    }       
});
