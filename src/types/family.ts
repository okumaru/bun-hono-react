import type { human } from './human'

export type family = human & {
  partner?: human,
  childrens?: family[]
}