#!name=Mac Script
#!desc=脚本

[Script]
# > WPS
Wps = type=http-response,requires-body=1,max-size=-1,pattern=^https?:\/\/account\.wps\.cn\/api\/users,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

[MITM]
hostname = %INSERT% account.wps.cn
