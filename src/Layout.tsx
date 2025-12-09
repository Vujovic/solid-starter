import type { Component, JSXElement } from 'solid-js'

interface Props {
  children?: JSXElement | JSXElement[]
}

export const Layout: Component<Props> = (props) => (
  <>
    <p>Header</p>
    <main>{props.children}</main>
    <p>Footer</p>
  </>
)
