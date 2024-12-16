import { type FC } from 'hono/jsx';
import { css } from 'hono/css'
import { Human } from './human';
import { Partner } from './partner';
import { family } from '../types/family';

const Container: FC = (props) => {
  return (
    <li>
      {props.children}
    </li>
  )
}

const Family: FC<family> = (props) => {
  return (
    <Container>
      <a href="#">
        {props.partner &&
          <Partner>
            <Human
              name={props.name}
              gender={props.gender}
              birthdate={props.birthdate}
            />
            <Human
              name={props.partner.name}
              gender={props.partner.gender}
              birthdate={props.partner.birthdate}
            />
          </Partner>
        }

        {!props.partner &&
          <Human
            name={props.name}
            gender={props.gender}
            birthdate={props.birthdate}
          />
        }
      </a>

      {props.childrens?.length &&
        <ul>
          {props.childrens.map(child =>
            <Family
              name={child.name}
              gender={child.gender}
              birthdate={child.birthdate}
              partner={child.partner}
              childrens={child.childrens}
            />)
          }
        </ul>
      }
    </Container>
  )
}

export const Tree: FC<family> = (props) => {
  const treeClass = css`
    :-hono-global {
      .tree {}
      .tree ul {
        position: relative;
        padding: 1em 0; 
        white-space: nowrap;
        margin: 0 auto;
        text-align: center;
        &::after {
          content: '';
          display: table;
          clear: both;
        }
      }
      .tree li {
        display: inline-table; // need white-space fix
        vertical-align: top;
        text-align: center;
        list-style-type: none;
        position: relative;
        padding: 1em .5em 0 .5em;
        &::before,
        &::after {
          content: '';
          position: absolute; 
          top: 0; 
          right: 50%;
          border-top: 1px solid #ccc;
          width: 50%; 
          height: 1em;
        }
        &::after {
          right: auto; 
          left: 50%;
          border-left: 1px solid #ccc;
        }
        &:only-child::after,
        &:only-child::before {
          display: none;
        }
        &:only-child {
          padding-top: 0;
        }
        &:first-child::before,
        &:last-child::after {
          border: 0 none;
        }
        &:last-child::before{
          border-right: 1px solid #ccc;
          border-radius: 0 5px 0 0;
        }
        &:first-child::after{
          border-radius: 5px 0 0 0;
        }
      }
      .tree ul ul::before{
        content: '';
        position: absolute; 
        top: 0; 
        left: 50%;
        border-left: 1px solid #ccc;
        width: 0; 
        height: 1em;
      }
      .tree li a {
        border: 1px solid #ccc;
        padding: .5em 0em;
        text-decoration: none;
        display: inline-block;
        border-radius: 5px;
        color: #333;
        position: relative;
        top: 1px;
      }
      .tree li a:hover,
      .tree li a:hover+ul li a {
        background: #e9453f;
        color: #fff;
        border: 1px solid #e9453f;
      }
      .tree li a:hover + ul li::after, 
      .tree li a:hover + ul li::before, 
      .tree li a:hover + ul::before, 
      .tree li a:hover + ul ul::before{
        border-color:  #e9453f;
      }
    }
  `

  return (
    <div class={treeClass}>
      <div class={`tree`}>
        <ul>
          <Family
            name={props.name}
            gender={props.gender}
            birthdate={props.birthdate}
            partner={props.partner}
            childrens={props.childrens}
          />
        </ul>
      </div>
    </div>
  )
}