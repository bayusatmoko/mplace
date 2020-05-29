#!/bin/sh
ssh -t root@68.183.184.97 <<EOF
cd ~/mplace
 git checkout master
 git pull origin master
 docker build -t mplace .
 docker stop mplace
 docker rm mplace
 docker run --name mplace -p 3000:3000 -d mplace
 curl localhost:80
 exit 0
EOF


