#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ProgressTracker {
  constructor() {
    this.progressFile = path.join(__dirname, 'PROGRESS_TRACKER.md');
    this.planFile = path.join(__dirname, 'LEARNING_PLAN.md');
    this.loadProgress();
  }

  loadProgress() {
    try {
      if (fs.existsSync(this.progressFile)) {
        this.progressContent = fs.readFileSync(this.progressFile, 'utf8');
      } else {
        this.progressContent = fs.readFileSync(this.planFile, 'utf8');
      }
    } catch (error) {
      console.error('Error loading progress file:', error);
      this.progressContent = '';
    }
  }

  updateProgress(task, status = 'completed') {
    const lines = this.progressContent.split('\n');
    let updated = false;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(`- [ ] ${task}`)) {
        lines[i] = lines[i].replace('- [ ]', '- [x]');
        updated = true;
      }
    }
    
    if (updated) {
      this.progressContent = lines.join('\n');
      fs.writeFileSync(this.progressFile, this.progressContent, 'utf8');
      console.log(`✅ Updated progress for: ${task}`);
    } else {
      console.log(`⚠️  Task not found: ${task}`);
    }
  }

  addDailyLog(date, hours, tasks, problems, solutions, notes) {
    const logEntry = `\n#### ${date}\n- 学习时间: ${hours}小时\n- 完成任务: ${tasks}\n- 遇到的问题: ${problems}\n- 解决方案: ${solutions}\n- 学习心得: ${notes}\n`;
    
    // Find the "## 学习日志" section
    const sections = this.progressContent.split('## ');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].startsWith('学习日志')) {
        // Find the "### 每日学习记录" subsection
        const subsections = sections[i].split('### ');
        for (let j = 0; j < subsections.length; j++) {
          if (subsections[j].startsWith('每日学习记录')) {
            // Add the new log entry
            subsections[j] = logEntry + subsections[j];
            sections[i] = subsections.join('### ');
            this.progressContent = sections.join('## ');
            fs.writeFileSync(this.progressFile, this.progressContent, 'utf8');
            console.log(`✅ Added daily log for: ${date}`);
            return;
          }
        }
      }
    }
  }

  showProgress() {
    console.log('📊 当前学习进度:');
    console.log('=' .repeat(50));
    
    // Extract and display progress summary
    const lines = this.progressContent.split('\n');
    let inProgressTable = false;
    
    for (const line of lines) {
      if (line.includes('## 详细任务进度')) {
        inProgressTable = true;
        continue;
      }
      
      if (inProgressTable && line.trim() === '') {
        break;
      }
      
      if (inProgressTable) {
        console.log(line);
      }
    }
    
    console.log('=' .repeat(50));
  }

  showStats() {
    const lines = this.progressContent.split('\n');
    let completed = 0;
    let total = 0;
    
    for (const line of lines) {
      if (line.includes('- [x]')) completed++;
      if (line.includes('- [ ]') || line.includes('- [x]')) total++;
    }
    
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    console.log('📈 学习统计:');
    console.log(`✅ 已完成任务: ${completed}`);
    console.log(`📋 总任务数: ${total}`);
    console.log(`📊 完成百分比: ${percentage}%`);
  }
}

// CLI interface
const args = process.argv.slice(2);
const tracker = new ProgressTracker();

if (args.length === 0) {
  console.log('🎯 Playwright 学习进度跟踪器');
  console.log('=' .repeat(50));
  console.log('可用命令:');
  console.log('  node track-progress.js update <任务> [状态]');
  console.log('  node track-progress.js log <日期> <小时> <任务> <问题> <解决方案> <心得>');
  console.log('  node track-progress.js show');
  console.log('  node track-progress.js stats');
  console.log('  node track-progress.js help');
} else {
  const command = args[0];
  
  switch (command) {
    case 'update':
      if (args.length >= 2) {
        const task = args[1];
        const status = args[2] || 'completed';
        tracker.updateProgress(task, status);
      } else {
        console.log('❌ 请提供任务名称');
      }
      break;
      
    case 'log':
      if (args.length >= 7) {
        const date = args[1];
        const hours = args[2];
        const tasks = args.slice(3, 5).join('; ');
        const problems = args[5];
        const solutions = args[6];
        const notes = args.slice(7).join(' ');
        tracker.addDailyLog(date, hours, tasks, problems, solutions, notes);
      } else {
        console.log('❌ 请提供完整的学习日志信息');
        console.log('用法: node track-progress.js log <日期> <小时> <任务> <问题> <解决方案> <心得>');
      }
      break;
      
    case 'show':
      tracker.showProgress();
      break;
      
    case 'stats':
      tracker.showStats();
      break;
      
    case 'help':
    default:
      console.log('🎯 Playwright 学习进度跟踪器');
      console.log('=' .repeat(50));
      console.log('命令说明:');
      console.log('  update <任务> [状态] - 更新任务进度');
      console.log('  log <日期> <小时> <任务> <问题> <解决方案> <心得> - 添加每日学习日志');
      console.log('  show - 显示当前进度');
      console.log('  stats - 显示学习统计');
      console.log('  help - 显示帮助信息');
      console.log('\n示例:');
      console.log('  node track-progress.js update "编写页面导航测试"');
      console.log('  node track-progress.js log "2024-01-15" "2" "基础测试" "定位问题" "使用CSS选择器" "学会了基本定位"');
      break;
  }
}