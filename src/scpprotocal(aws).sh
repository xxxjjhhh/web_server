//file
loacl -> ec2

scp -i "키페어.pem" 보낼파일경로 사용자계정@ec2아이피:받을경로
scp -i "mainkey.pem" index.html ubuntu@ec2-생략.amazonaws.com:~/kim/


ec2 -> local

scp -i "키페어.pem" 사용자계정@ec2아이피:파일경로 로컬에받을경로



//folder
local -> ec2
scp -i "키페어.pem" -r 보낼폴더경로 사용자계정@ec2아이피:받을경로

ec2 -> local
scp -i "키페어.pem" -r 사용자계정@ec2아이피:파일경로 로컬에받을경로
