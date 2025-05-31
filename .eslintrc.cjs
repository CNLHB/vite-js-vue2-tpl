/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
// @rushstack/eslint-patch 是由微软 Rush Stack 团队开发的工具，
// 主要用于 ​​修复 ESLint 在现代 JavaScript/TypeScript 项目中的兼容性问题​
// ​，尤其在复杂工具链或特定框架（如 Vue、React）中表现突出。以下

// 在 Vue 项目中，@vue/eslint-config-prettier/skip-formatting 是 ​​Vue 官方提供的 ESLint 配置补丁​​，
// 其核心作用是 ​​让 ESLint 专注于代码质量检查，而将代码格式化任务完全交给 Prettier​​。会使eslint --fix 失效
module.exports = {
  root: true,
  extends: [
    'eslint:recommended', //基础质量规则
    'plugin:vue/essential', //vue2规则
    'plugin:vue/vue3-essential', //V3规则
    // 'plugin:prettier/recommended' // 非vue使用格式化规则
    '@vue/eslint-config-prettier', // vue中使用关闭冲突规则
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
