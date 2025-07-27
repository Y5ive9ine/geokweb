# Docker 部署指南

## 🐳 快速开始

### 1. 构建镜像
```bash
# 构建生产镜像
docker build -t geokweb:latest .

# 或者使用 docker-compose
docker-compose build
```

### 2. 运行容器
```bash
# 直接运行
docker run -p 3000:3000 geokweb:latest

# 或者使用 docker-compose
docker-compose up -d
```

### 3. 访问应用
打开浏览器访问: http://localhost:3000

## 📦 打包和分享

### 方法一：导出镜像文件
```bash
# 1. 构建镜像
docker build -t geokweb:latest .

# 2. 导出镜像为tar文件
docker save -o geokweb.tar geokweb:latest

# 3. 压缩文件（可选）
gzip geokweb.tar
```

**分享给别人:**
1. 将 `geokweb.tar` 或 `geokweb.tar.gz` 文件发送给对方
2. 对方使用以下命令导入镜像：
```bash
# 导入镜像
docker load -i geokweb.tar

# 运行容器
docker run -p 3000:3000 geokweb:latest
```

### 方法二：分享项目源码
直接将整个项目文件夹打包发送，对方使用：
```bash
# 构建并运行
docker-compose up -d

# 或者
docker build -t geokweb .
docker run -p 3000:3000 geokweb
```

### 方法三：推送到Docker Hub（推荐）
```bash
# 1. 登录Docker Hub
docker login

# 2. 标记镜像
docker tag geokweb:latest yourusername/geokweb:latest

# 3. 推送镜像
docker push yourusername/geokweb:latest
```

对方可以直接拉取：
```bash
docker pull yourusername/geokweb:latest
docker run -p 3000:3000 kainyin/geokweb:latest
```

## 🛠️ 开发模式

如果需要在Docker中进行开发：
```bash
# 启动开发环境
docker-compose --profile dev up

# 或者直接使用开发Dockerfile
docker build -f Dockerfile.dev -t geokweb-dev .
docker run -p 3000:3000 -v $(pwd):/app geokweb-dev
```

## 📋 常用命令

```bash
# 查看运行中的容器
docker ps

# 停止容器
docker-compose down

# 查看日志
docker-compose logs -f

# 进入容器
docker exec -it geokweb-app sh

# 清理未使用的镜像
docker system prune
```

## 🔧 故障排除

### 端口冲突
如果3000端口被占用，修改 docker-compose.yml 中的端口映射：
```yaml
ports:
  - "3001:3000"  # 改为其他端口
```

### 构建失败
确保在项目根目录执行命令，且有 package.json 文件。

### 权限问题
在Linux/Mac上，可能需要使用 `sudo` 执行docker命令。

## 📝 文件说明

- `Dockerfile`: 生产环境镜像构建文件
- `Dockerfile.dev`: 开发环境镜像构建文件  
- `docker-compose.yml`: Docker Compose配置文件
- `.dockerignore`: Docker构建时忽略的文件
- `next.config.ts`: 已配置standalone输出模式

## 🎯 最佳实践

1. **生产部署**: 使用主 `Dockerfile` 构建优化的镜像
2. **开发调试**: 使用 `Dockerfile.dev` 进行实时开发
3. **环境变量**: 在 `docker-compose.yml` 中配置环境变量
4. **数据持久化**: 如需要，添加volume挂载
5. **网络配置**: 多服务时配置自定义网络 