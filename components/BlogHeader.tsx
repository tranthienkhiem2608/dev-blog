import {BlogPost} from '@/types/blog'
import React from 'react'

interface HeaderProps {
  createdAt: string
  author: {
    name: string
    avatar: string
    url: string
  }
}

const BlogHeader: React.FC<HeaderProps> = (props) => {
  const {author, createdAt} = props
  const createdDate: Date = new Date(createdAt)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  return (
    <div className="flex">
      <img
        className="rounded-[50%] max-w-[50px] max-h-[50px] mb-4 mr-4"
        src={author.avatar}
        alt={author.name}
      />
      <div className="flex flex-col">
        <p className="font-semibold text-[1rem]">{author.name}</p>
        <div className="flex">
          <li className="list-none font-normal text-[0.85rem] md:mr-4 sm:mr-0">
            {author.url}
          </li>
          <li className=' font-normal text-[0.85rem]'>{createdDate.toLocaleDateString('en-US', options)}</li>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader
