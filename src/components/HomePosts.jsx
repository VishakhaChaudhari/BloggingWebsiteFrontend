/* eslint-disable react/prop-types */
import {IF} from '../url'


const HomePosts = ({post}) => {
  return (
    <div className="w-full flex mt-8 space-x-4 border-2 border-solid border-gray-300 rounded-lg p-5">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={IF+post.photo} alt="" className="h-full w-full object-cover "/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-l font-bold md:mb-2 mb-1 md:text-2xl">
      {post.title}
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@{post.username}</p>
       <div className="flex space-x-2 text-sm">
       <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
       </div>
      </div>
      {/* <p >{post.desc.slice(0,200)+" ...Read more"}</p> */}
      <div
      className="text-sm md:text-lg" dangerouslySetInnerHTML={{__html:post.desc.slice(0,200)+" ...Read more"}}
      />
      </div>

    </div>
  )
}

export default HomePosts
