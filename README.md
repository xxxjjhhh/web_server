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
