---
title: docker安装与配置nginx详细过程
date: 2021-08-29 19:37:00
categories: 教程
urlname: 315
tags:
- nginx
- docker
---
<!--markdown-->**注：大鸟飞过，此方式只用于快速搭建使用**

* 第一步 pull nginx

```bash
docker pull nginx 
```

* 第二步 启动nginx
```bash
docker run --name nginx -p 80:80 -d 
```

* 第三步 查看成果
1）命令查看是否启动，命令：
```bash
docker ps
```
2）网页访问，浏览器输入IP地址回车，就可以看到 “Welcome to nginx!” 
---
**附加项**：
原因：虽然咱们能正常启动nginx，但配置得在容器中进行，这样的话太麻烦了，所以把配置文件给映射出来，方便配置与管理

* 第一步 本地创建管理目录

命令：
```bash
mkdir -p /data/nginx
mkdir -p /data/nginx/www
mkdir -p /data/nginx/conf
mkdir -p /data/nginx/logs 
```
* 第二步 将容器中的相应文件copy到刚创建的管理目录中
```bash
docker cp 67e:/etc/nginx/nginx.conf /data/nginx/
docker cp 67e:/etc/nginx/conf.d /data/nginx/conf/
docker cp 67e:/usr/share/nginx/html/ /data/nginx/www/
docker cp 67e:/var/log/nginx/ /data/nginx/logs/
---
注：docker cp 67e 中的 "67e" 为容器ID前缀，只要唯一就好了 

* 第三步 停止并移除容器

停止容器：
```bash
docker stop 67e
```
移除容器：
```bash
docker rm 67e 
```
* 第四步 再次启动容器并作目录挂载(也相当于共享)
```bash
docker run --name nginx -p 80:80 
-v /data/nginx/nginx.conf:/etc/nginx/nginx.conf
-v /data/nginx/www/:/usr/share/nginx/html/
-v /data/nginx/logs/:/var/log/nginx/
-v /data/nginx/conf/:/etc/nginx/conf.d
--privileged=true -d nginx
```
注：为了好看所以做了换行，执行的时候还是需要改成一行，每行一个空格隔开就可以了 
部署就完成了！！！
彩蛋（配置相关）：
* 1、在location 中 echo "hello Nginx！" 访问可以直接输出文字

例：
```bash
location / {
    echo "hello Nginx！"
} 
```
* 2、location匹配规则：

1）最低级别匹配规则：
```bash
location / {
    echo "hello Nginx！"
}
```
2）最高级别匹配规则：
```bash
location /user {
    echo "hello user.hmtl"
}
```
3）其它级别匹配规则：
```bash
location ^~ /user {
    echo "hello user.hmtl"
}
location ~^ /user {
    echo "hello user.hmtl"
}
location ~ ^/[a-z] {
    echo "hello user.hmtl"
}
location ~ ^/\a {
    echo "hello user.hmtl"
} 
```
* 3、反向代理细节：
```bash
location /user {
    proxy_pass http:https://ip;
}
location /order/ {
    proxy_pass http:https://ip/;
}
```
访问结果：
http:https://ip/user/xx...
http:https://ip/xx... 

* 4、负载均衡配置
```bash
upstream order {
    server 192.168.5.18:8080 weight=1;
    server 192.168.5.18:8081 weight=1;
}
server{
    location /order/ {
        proxy_pass http:https://order/;
    }
}
```
注：weight=1，配置的为权重，值越高权重越高 