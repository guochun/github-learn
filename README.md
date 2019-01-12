# git & github 学习笔记

## 配置git基本信息

### 配置user.name 和 user.email   

git config --global user.name 'your_name'  
git config --global user.email   'your_eamil@domain.com'  

### git三个作用域
缺省值为local
git config --local  配置的信息只对本仓库有效  
git config --global 配置的信息对当前所有仓库都有效  
git config --system 配置对系统所有登陆的用户有效

### 显示config的配置, 加--list
git config --list --(local|global|system)

### 创建 Git 仓库

两种场景: 

1  把已有的项目代码纳入Git管理  

cd 项目代码所在的文件夹  
git init  

2 新建的项目直接用Git管理  

cd 某个文件夹  
git init your_projiect #会在当前目录创建一个文件夹并托管   
cd my_project


