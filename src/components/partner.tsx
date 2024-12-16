import { css } from 'hono/css'
import type { FC } from 'hono/jsx';

export const Partner: FC = (props) => {
  const partnerClass = css`
    :-hono-global {
      .partner {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .partner > div:first-child {
        border-right: 1px solid #ccc;
      }
    }
  `

  return (
    <div class={partnerClass}>
      <div class={`partner`}>
        {props.children}
      </div>
    </div>
  )
}