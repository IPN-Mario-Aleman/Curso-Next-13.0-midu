import React from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

interface AppNavigator {
  label: string;
  route: string;
}

const navigation: Array<AppNavigator> = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Posts',
    route: '/posts'
  }
]

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {navigation.map((params) => {
            return (
              <li key={params.route}>
                <Link href={params.route}>{params.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
