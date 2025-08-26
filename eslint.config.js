import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  rules: {
    'no-console': 'off', // 禁止console
    'no-empty': 'off',
    'no-unused-vars': 'off', // 禁止出现未使用过的变量
    'unused-imports/no-unused-vars': 'off', // 禁止未使用的变量
    'unused-imports/no-unused-imports': 'off',

    'prefer-promise-reject-errors': 'off', // promise.reject必须提供err

    'antfu/if-newline': 'off',
    'style/brace-style': ['error', '1tbs', { allowSingleLine: false }], // 保存时执行 else 和if的} 在一行
  },
})
