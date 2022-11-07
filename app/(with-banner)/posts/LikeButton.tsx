'use client'

import React, { useState } from 'react'

interface Props {
  id: number;
}

const LikeButton: React.FunctionComponent<Props> = ({ id }) => {
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setLiked(true)
  }
  return <button onClick={handleClick}> {liked ? '💛' : '💔'}</button>
}

export default LikeButton
