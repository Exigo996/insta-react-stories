import React, { FC, useState } from 'react'

interface StoriesProps {
  value?: number
}
const Stories: FC<StoriesProps> = ({ value = 0 }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <div>
      Stories component: {value}
      <button onClick={() => setIsVisible(!isVisible)}>Click me!</button>
      {isVisible && <>It&apos;s visible</>}
    </div>
  )
}

export default Stories
