import { type FC } from 'hono/jsx';
import { Human } from './human';
import { Partner } from './partner';
import { family } from '../types/family';

const familyTree = {
  name: "Scotty Hoover",
  gender: "male",
  birthdate: "1986-03-27",
  partner: {
    name: "Odessa Osborn",
    gender: "female",
    birthdate: "1986-03-27",
  },
  childrens: [
    {
      name: "Samual Mcfarland",
      gender: "male",
      birthdate: "1986-03-27",
      partner: {
        name: "Glenda Sparks",
        gender: "female",
        birthdate: "1986-03-27",
      },
      childrens: [
        {
          name: "Stanton Knapp",
          gender: "male",
          birthdate: "1986-03-27",
          partner: {
            name: "Maryanne Simon",
            gender: "female",
            birthdate: "1986-03-27",
          },
          childrens: [
            {
              name: "Marcie Vaughan",
              gender: "female",
              birthdate: "1986-03-27",
            },
            {
              name: "Aurelio Camacho",
              gender: "male",
              birthdate: "1986-03-27",
            }
          ]
        },
        {
          name: "Marcelo Floyd",
          gender: "male",
          birthdate: "1986-03-27",
          partner: {
            name: "Arline West",
            gender: "female",
            birthdate: "1986-03-27",
          },
          childrens: [
            {
              name: "Matt Mcdonald",
              gender: "male",
              birthdate: "1986-03-27",
            },
            {
              name: "Whitney Taylor",
              gender: "female",
              birthdate: "1986-03-27",
            },
            {
              name: "Sasha Randall",
              gender: "female",
              birthdate: "1986-03-27",
            },
            {
              name: "Francisco Gill",
              gender: "male",
              birthdate: "1986-03-27",
            }
          ]
        }
      ]
    },
    {
      name: "Timmy Li",
      gender: "male",
      birthdate: "1986-03-27",
      partner: {
        name: "Liliana Lowery",
        gender: "female",
        birthdate: "1986-03-27",
      },
      childrens: [
        {
          name: "Otis Herrera",
          gender: "male",
          birthdate: "1986-03-27",
          partner: {
            name: "Hannah Greene",
            gender: "female",
            birthdate: "1986-03-27",
          },
          childrens: [
            {
              name: "Randolph Irwin",
              gender: "female",
              birthdate: "1986-03-27",
            },
            {
              name: "Dorthy Christian",
              gender: "female",
              birthdate: "1986-03-27",
            }
          ]
        },
        {
          name: "Eva Ferguson",
          gender: "female",
          birthdate: "1986-03-27",
        }
      ]
    }
  ]
}

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

export const Tree: FC<{}> = (props: {}) => {
  return (
    <div class="tree">
      <ul>
        <Family
          name={familyTree.name}
          gender={familyTree.gender}
          birthdate={familyTree.birthdate}
          partner={familyTree.partner}
          childrens={familyTree.childrens}
        />
      </ul>
    </div>
  )
}