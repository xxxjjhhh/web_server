web_server
===

web_server Repository


SSH
---

<pre><code>

for AWS EC2 (ubuntu)
chmod 400 "mainkey.pem"
ssh -i "mainkey.pem" ubuntu@serverpublicip
</pre></code>

SCP
---

<pre><code>

for AWS EC2 (ubuntu)
chmod 400 "mainkey.pem"

local -> ec2
scp -i "mainkey.pem" index.html ubuntu@serverpublicip:~/kim/
ec2 -> local
scp -i "mainkey.pem" ubuntu@serverpublicip:~/kim/ 로컬에받을경로

for folder
local -> ec2
scp -i "mainkey.pem" -r index.html ubuntu@serverpublicip:~/kim/
ec2 -> local
scp -i "mainkey.pem" -r ubuntu@serverpublicip:~/kim/ 로컬에받을경로
</pre></code>

Node.js
---

<pre><code>
sudo apt update
sudo apt install nodejs
sudo apt install npm

node -v

npm install express
</pre></code>


PM2
---

<pre><code>
sudo npm install -g pm2

pm2 start app.js -- name APPNAME

pm2 stop APPNAME
pm2 restart APPNAME
pm2 delete APPNAME
pm2 show APPNAME

pm2 logs
pm2 list

if deny : sudo
</pre></code>

***
