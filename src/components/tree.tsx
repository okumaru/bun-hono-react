import type { FC } from 'hono/jsx';

export const Tree: FC<{}> = (props: {}) => {
  return (
    <div class="tree">
      <ul>
        <li>
          <a href="#">Parent</a>
          <ul>
            <li>
              <a href="#">Child</a>
              <ul>
                <li>
                  <a href="#">Grand Child</a>
                </li>
                <li>
                  <a href="#">Grand Child</a>
                  <ul>
                    <li>
                      <a href="#">Grand Child</a>
                    </li>
                    <li>
                      <a href="#">Grand Child</a>
                    </li>
                    <li>
                      <a href="#">Grand Child</a>
                    </li>
                    <li>
                      <a href="#">Grand Child</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Child</a>
              <ul>
                <li>
                  <a href="#">Grand Child</a>
                  <ul>
                    <li>
                      <a href="#">Grand Grand Child</a>
                    </li>
                    <li>
                      <a href="#">Grand Grand Child</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Grand Child</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}