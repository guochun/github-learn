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

### 如何提交项目

git add file_name | .(全部文件)  | -u(已经把git托管的文件)
将文件提交到缓存区

git status  
查看文件变更的状态 

git commit -m '本次提交的描绘信息'   
正式提交到git工作区 

git reset --hard 
对暂存区和工作目录的历史清空    

git mv file1 file2
变更文件名  

### 查看历史的变更信息  

git log 产看变更历史  

--online 每个变更的历史以单行的形式显示出来  

-n(number) 指定产看最近的number的提交  

--all 查看所有分支的历史

git branch -v 查看本地有多少分支  

### git 图形化界面
gitk 打开git图像化界面

### .git目录

HEAD - 代表当前工作的分支
config -  记录着本仓库相关的一些配置文件
refs - 存放和仓库有关的对象引用
git cat - file -t  查看文件对象的类型
               -p  查看内容
objects - 仓库所有的对象

### commit tree blob 三个对象关系
一个commit对应一个tree
一个tree 对应着当前commit所有的文件和文件夹
一个tree由多个tree和blob组成
文件内容(不管文件名如何)相同就为同一个blob