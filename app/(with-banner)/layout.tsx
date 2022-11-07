import React from 'react'

function PostLayout ({
  children
}: {
    children: React.ReactNode;
  }) {
  return (
    <>
      <div style={{ background: '#333', color: 'fff' }}>
        <marquee>
          El mejor curso de Next 13.0
        </marquee>
      </div>
      {children}
    </>
  )
}

export default PostLayout
