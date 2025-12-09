/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'
import 'solid-devtools'

import { Layout } from './Layout'
import Home from './pages/Home'

import './css/main.scss'

const root = document.getElementById('root')

if (!root) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  )
}

render(
  () => (
    <Router root={Layout}>
      <Route path="/" component={Home} />
    </Router>
  ),
  root,
)
