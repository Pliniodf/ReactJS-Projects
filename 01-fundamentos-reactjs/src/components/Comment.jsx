import { useState } from 'react';
import style from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  // a unica forma de eu comunicar um componente com outro é atravez das minhas propriedades
  function handleDeleteComment() {
    //console.log('deletar')
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/Pliniodf.png" />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
            <strong>Plinio Souza</strong>
            <time title="23 de fevereiro às 11:54h" dateTime="2023-02-23 11:54:30">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
      

      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp />
          Aplaudir <span>{likeCount}</span>
        </button> 
      </footer>
      </div>
    </div>
  )
}