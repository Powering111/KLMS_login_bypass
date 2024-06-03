
document.getElementById("save_btn").addEventListener('click', save);
const userid_elem = document.getElementById("userid");
chrome.storage.sync.get("userid", (value)=>{
    if(value.userid){
        userid_elem.value = value.userid
    }
})

userid_elem.focus()
userid_elem.addEventListener("keydown",save);


function save(){
    const new_userid = document.getElementById('userid').value;
    chrome.storage.sync.set({"userid":new_userid});
}