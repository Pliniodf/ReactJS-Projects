import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


import './global.css';
import style from './App.module.css';

// author: {avatar_url: '', name: "", role: ""}
// publishedAt: Date
// content: String
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Joao9820.png',
      name: 'João Victor',
      role: 'Full-Stack Develop'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-24 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Jose da Silva',
      role: 'Web Design'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-28 20:00:00'),
  },
]

/*  key unic: 3 momentos em que um componente é renderizado novamente no React
    
    1. Quando o estado altera;
    2. Quando a propriedade altera;
    3. Quando um componente pai renderiza novamente;
_______________________________________________________
  A key ajuda o react ver qual 'comentario'(por exemplo foi adicionado) e ja manter o que ja tinha para não precisar renderizar tudo de novo

    #Por que nao usar o Indice do array?((exemplo, Index) => ...) 
    const posts = [1, 2, 5, 4, 3]
    0, 1, 2, 3, 4
    - como no exemplo acima se por algum motivo os posts mudarem de lugar o indice não consegue acompanhar
    1, 2, 5, 4, 3
    - porem se for por ID ele consegue entender que ouve uma mudança
*/

// iteração: Repetir algo, criar uma instrutura de repetição, iterar sobre um array percorrer um array e pra cada possição fazer algo
// clean code: deixar seu codigo mais bem entendido
// sempre que for atualizar uma informação e essa informação depende do falor que ela tinha anteriormente (depende dela mesma) é uma boa prativa usar o padrao de funções (state)

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
      <Sidebar />
      <main>
        {posts.map((post) => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            /> 
          )
        })}
      </main>
      </div>
    </div>
  )
}

