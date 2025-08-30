import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/main.scss'
import './styles/vars.css'

export default {
  extends: DefaultTheme,
} satisfies Theme
