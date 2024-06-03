
chrome.action.onClicked.addListener(async () => {
  const userid_option = await chrome.storage.sync.get("userid");
  if(userid_option.userid){
    chrome.tabs.create({
      url: `https://klms.kaist.ac.kr/local/applogin/result_login_json.php?userid=${userid_option.userid}`
    });
  }
  else{
    chrome.tabs.create({
      url: "option.html"
    });
  }
});