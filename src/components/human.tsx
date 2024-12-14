import { css, Style } from 'hono/css'
import type { FC } from 'hono/jsx';

export const Human: FC<{
  name: string,
  gender: string,
  birthdate: string
}> = (props) => {
  const humanClass = css`
    :-hono-global {
      .human {
        padding: 0em .75em;
      }
      .name {
        font-weight: 700;
      }
      .gender, .birthdate {
        font-size: 12px;
      }
    }
  `
  return (
    <div class={humanClass}>
      <div class={`${props.gender} human`}>
        <div class={`gender`}>{props.gender}</div>
        <div class={`name`}>{props.name}</div>
        <div class={`birthdate`}>{props.birthdate}</div>
      </div>
    </div>
  )
}