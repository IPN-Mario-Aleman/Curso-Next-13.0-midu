import { Comments } from '../../../../../types/types'

const url = 'https://jsonplaceholder.typicode.com/posts/'

type Props = {
  id: number;
}

const fecthComments = async (id: Props) : Promise<Comments> => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Errror al cargar los comentarios')
  return fetch(url + `${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

const PageComments = async ({ params } : any) => {
  const { id } = params
  const comments = await fecthComments(id)

  return (
    <ul style={{ background: '666', fontSize: '10px' }}>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <h4>{comment.name}</h4>
            <small>{comment.body}</small>
          </li>
        )
      })}
    </ul>
  )
}

export default PageComments
