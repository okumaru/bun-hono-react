import { readFileSync } from "node:fs";
import { Hono } from 'hono'
import { css, Style } from 'hono/css'
import { Tree } from './components/tree';

const app = new Hono();

const familyTree = JSON.parse(readFileSync('./family-tree.json', 'utf8'));

app.get('/', (c) => {
  const globalClass = css`
    :-hono-global {
      body {
        font-family: sans-serif;
        font-size: 15px;
      }
    }
  `

  return c.render(<html class={globalClass}>
    <head>
      <Style />
    </head>
    <body>
      <Tree 
        name={familyTree.name}
        gender={familyTree.gender}
        birthdate={familyTree.birthdate}
        partner={familyTree.partner}
        childrens={familyTree.childrens}
      />
    </body>
  </html>)
})

export default app