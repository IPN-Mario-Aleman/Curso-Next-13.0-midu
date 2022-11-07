import Link from 'next/link'

const url = 'https://jsonplaceholder.typicode.com/posts/'

type Props = {
  id: number;
}

const fetchSinglPost = async (id: Props) => {
  return fetch(url + `${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

const PostLayout = async ({ params, children } : any) => {
  const { id } = params
  const post = await fetchSinglPost(id)

  return (
    <article>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <Link href={`/posts/${id}/comments`}> Ver comentarios </Link>
      {children}
    </article>
  )
}

export default PostLayout
