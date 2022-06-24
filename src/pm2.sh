sudo npm install -g pm2

pm2 start app.js -- name APPNAME

pm2 stop APPNAME
pm2 restart APPNAME
pm2 delete APPNAME
pm2 show APPNAME

pm2 list
