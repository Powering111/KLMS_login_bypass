# KLMS login bypass
Chrome extension for bypassing KLMS login process. 

KLMS is KAIST Learning Management System. We have to login again whenever the session expires(timeout is about 3 hours). 

However, there is a mobile app which can save the login state. This repository uses this fact to login immediately in desktop browser too.


*Disclaimer: you need to first log into your account and get the key to bypass login later. It is not for logging into arbitrary user.*


## Getting userid
You need to first get the userid. userid can be gathered by following process:
1. Using firefox is recommended. Open devtools, go to *Debugger*. Find *breakpoints* tab and uncheck *Pause on debugger statement*.
2. From top right enable mobile mode, and set user agent(UA) to `Linux; Android 6.0;` or something mobile-looking.
3. While letting *network* tab open, go to klms.
4. login using any method.
5. In the network tab, find `login_success.php` and click to open detail.
6. Go to *Response* tab and enable *Raw*. 
7. Around line 33, There will be a suspiscious random-looking string, which is argument for `window.Android.onLogin` or something. That is your userid.

Caution: do not let anyone know your userid!


## Using the extension
Open Google Chrome. Settings->extensions. Enable developer mode(top right) and click *load unpacked*(top left), and select this folder. 

Click the extension icon. If there is not, click extension button and click `KLMS login bypass`. The option page will appear. Input your userid and click save.
From now, you can login KLMS immediately by clicking the extension icon. Optionally pin your extension for convenience.


## Author
Jeong Juntae (bestjun111@gmail.com)