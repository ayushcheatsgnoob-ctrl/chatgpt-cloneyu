const BACKEND_URL = "http://localhost:3000";

async function send(){
  let input=document.getElementById("input");
  let text=input.value;
  if(!text) return;

  add("You",text);
  input.value="";

  try{
    let res=await fetch(BACKEND_URL+"/chat",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message:text})
    });

    let data=await res.json();
    add("AI",data.reply);

  }catch(e){
    add("AI","Error connecting server");
  }
}

function add(role,text){
  document.getElementById("messages").innerHTML +=
  `<div><b>${role}:</b> ${text}</div>`;
}
