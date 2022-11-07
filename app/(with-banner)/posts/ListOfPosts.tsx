import Link from 'next/link'
import { ResponseFromAPI } from '../../../types/types'
import LikeButton from './LikeButton'

const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPosts = async (): Promise<ResponseFromAPI> => {
  // return fetch(url)
  // .then(res => res.json()) static props

  // return fetch(url, { cache: 'no-store' }) server side rendering
  // .then(res => res.json())

  return fetch(url, {
    next: {
      revalidate: 60
    }
  }) // incremental static generation => puede ser la mejor opcion si es necesario que se este haciendo fetching cada cierto tiempo
    .then(res => res.json())
}

const ListOfPosts: Function = async () => {
  const posts = await fetchPosts()
  return posts.slice(0, 5).map((post) => {
    return (
      <article key={post.id}>
        <Link href='posts/[id]' as={`/posts/${post.id}`}>
          <h2 style={{ color: '#09f' }}>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton id={post.id} />
        </Link>
      </article>
    )
  })
}

export default ListOfPosts
