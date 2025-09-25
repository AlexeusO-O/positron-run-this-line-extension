# Run-This-Line 插件安装指南

## 从GitHub下载并安装的几种方法

### 方法一：从源代码安装（推荐用于开发或自定义）

1. **克隆仓库**
   ```bash
   git clone https://github.com/AlexeusO-O/positron-run-this-line-extension.git
   cd positron-run-this-line-extension
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **编译扩展**
   ```bash
   npm run compile
   ```

4. **打包成VSIX文件**
   ```bash
   npm install -g @vscode/vsce
   vsce package
   ```
   这将生成一个 `.vsix` 文件

5. **在VSCode中安装**
   - 打开VSCode
   - 按 `Ctrl+Shift+P` (Windows) 或 `Cmd+Shift+P` (Mac)
   - 输入 "Extensions: Install from VSIX"
   - 选择生成的 `.vsix` 文件

### 方法二：直接下载安装（最简单）

1. **从GitHub仓库直接下载**
   - 访问仓库页面：https://github.com/AlexeusO-O/positron-run-this-line-extension
   - 在文件列表中点击 `run-this-line-0.0.2.vsix` 文件
   - 点击"Download"按钮下载文件
   - 按照方法一的第5步安装

### 方法三：通过VSCode Marketplace安装（如果发布）

如果插件发布到VSCode Marketplace：
1. 打开VSCode
2. 进入Extensions面板 (`Ctrl+Shift+X`)
3. 搜索 "run-this-line"
4. 点击安装

## 插件功能说明

- **支持语言**: R 和 Python 文件
- **功能**: 在编辑器标题栏添加"Run This Line"按钮
- **快捷键**: 类似 `Ctrl+Enter` 的功能
- **集成**: 与Positron控制台集成执行代码

## 使用说明

安装后，打开R或Python文件，您将在编辑器右上角看到一个播放按钮（▶️）。点击该按钮将执行当前行的代码。

## 开发模式安装

如果您想要修改或调试插件：

```bash
# 克隆仓库
git clone https://github.com/AlexeusO-O/positron-run-this-line-extension.git
cd positron-run-this-line-extension

# 安装依赖
npm install

# 编译并启动调试
npm run compile
# 然后按 F5 启动调试VSCode实例
```

## 注意事项

- 确保您已安装Node.js和npm
- 插件需要VSCode版本 1.103.0 或更高
- 插件主要针对R和Python语言优化

## 故障排除

如果安装遇到问题：
1. 检查VSCode版本是否满足要求
2. 确认Node.js和npm已正确安装
3. 查看控制台错误信息（Help > Toggle Developer Tools）
4. 重启VSCode后重试

## 更新插件

当有新版本发布时：
- 如果从VSIX安装：下载新版本并重新安装
- 如果从源代码安装：`git pull` 然后重新编译打包
- 如果从Marketplace安装：VSCode会自动提示更新
