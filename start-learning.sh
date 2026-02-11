#!/bin/bash

# Playwright 学习启动脚本

echo "🎯 欢迎使用 Playwright 学习项目！"
echo "================================"

# 检查Node.js版本
echo "🔍 检查环境..."
node_version=$(node --version)
npm_version=$(npm --version)
echo "Node.js: $node_version"
echo "npm: $npm_version"

# 检查Playwright安装
echo ""
echo "🔍 检查Playwright安装..."
if [ -d "node_modules" ]; then
    echo "✅ 依赖已安装"
else
    echo "⚠️  依赖未安装，正在安装..."
    npm install
fi

# 检查浏览器安装
echo ""
echo "🔍 检查Playwright浏览器..."
if [ -d "node_modules/@playwright/test" ]; then
    echo "✅ Playwright已安装"
    
    # 检查浏览器是否已安装
    if [ -d "node_modules/playwright-core/.local-browsers" ]; then
        echo "✅ 浏览器已安装"
    else
        echo "⚠️  浏览器未安装，正在安装..."
        npx playwright install
    fi
else
    echo "❌ Playwright未安装"
    exit 1
fi

# 显示可用命令
echo ""
echo "🚀 可用命令:"
echo "  1. 运行所有测试: npm test"
echo "  2. 可见浏览器模式: npm run test:headed"
echo "  3. UI测试模式: npm run test:ui"
echo "  4. 生成测试代码: npm run codegen"
echo "  5. 查看学习计划: cat LEARNING_PLAN.md"
echo "  6. 跟踪进度: node track-progress.js help"
echo ""
echo "📚 学习资源:"
echo "  - 学习计划: LEARNING_PLAN.md"
echo "  - 进度跟踪: PROGRESS_TRACKER.md"
echo "  - 项目文档: README.md"
echo ""

# 提供学习建议
echo "💡 学习建议:"
echo "  1. 先运行 'npm test' 查看现有测试"
echo "  2. 使用 'npm run codegen' 生成测试代码"
echo "  3. 参考 LEARNING_PLAN.md 制定学习计划"
echo "  4. 使用 track-progress.js 跟踪学习进度"
echo ""

# 询问用户下一步
echo "🎯 你想做什么？"
echo "  1. 运行测试"
echo "  2. 查看学习计划"
echo "  3. 开始跟踪进度"
echo "  4. 退出"
echo ""
read -p "请选择 (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🚀 运行测试..."
        npm test
        ;;
    2)
        echo ""
        echo "📚 学习计划:"
        cat LEARNING_PLAN.md | head -100
        echo ""
        echo "📖 完整计划请查看: cat LEARNING_PLAN.md"
        ;;
    3)
        echo ""
        echo "📊 开始跟踪进度..."
        node track-progress.js help
        ;;
    4)
        echo "👋 再见！祝你学习愉快！"
        exit 0
        ;;
    *)
        echo "❌ 无效选择"
        exit 1
        ;;
esac