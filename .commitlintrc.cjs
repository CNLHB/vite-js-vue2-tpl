//npm config中文配置
//  "path": "./node_modules/cz-conventional-changelog" //英文配置path
// "ci": "git add . && cz-customizable",
//  "config": {
//   "commitizen": {
//     "path": "node_modules/cz-customizable"
//   },
//   "cz-customizable": {
//     "config": "./.cz-config.cjs"
//   }
// }
module.exports = {
  extends: ['@commitlint/config-conventional'], //默认
  // extends: ['git-commit-emoji', 'cz'],
  rules: {
    // 'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore']], // 限制提交类型
    'scope-case': [2, 'always', 'lower-case'], // 作用范围强制小写
    'subject-max-length': [2, 'always', 72] // 主题最大长度
  }
};
