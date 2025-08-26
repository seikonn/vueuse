import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: true,
  vue: true,
  rules: {
    'no-console': 'off', // 禁止console
    'no-empty': 'off',
    'no-unused-vars': 'off', // 禁止出现未使用过的变量
    'unused-imports/no-unused-vars': 'off', // 禁止未使用的变量
    'unused-imports/no-unused-imports': 'off',

    'prefer-promise-reject-errors': 'off', // promise.reject必须提供err

    'antfu/if-newline': 'off',
    'style/brace-style': ['error', '1tbs', { allowSingleLine: false }], // 保存时执行 else 和if的} 在一行

    'vue/singleline-html-element-content-newline': 'off', // 关闭单行 HTML 元素内容换行规则
    'vue/multiline-html-element-content-newline': 'off', // 关闭多行 HTML 元素内容换行规则
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never', // 单行元素不允许换行
      multiline: 'always', // 多行元素换行
    }],
    'vue/v-on-event-hyphenation': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'any',
        normal: 'any',
        component: 'any',
      },
      svg: 'always',
      math: 'always',
    }],
  },
})
