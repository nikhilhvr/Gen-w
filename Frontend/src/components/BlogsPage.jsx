import React, { useEffect, useState } from 'react'
import axios from 'axios'
const BlogsPage = () => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        axios.get('/api/blogs')
            .then((response) => {
                setblogs(response.data)
            }
            )
            .catch((error) => {
                console.log(error);
            })
    })
    return (
        <>
            <h1 className='text-center py-20 font-bold'>Blog Page</h1>
            <p className='text-center py-5 font-bold'>Blogs: {blogs.length}</p>
            {
                blogs.map((blogs, index) => {
                    <div key={blogs.id}>
                        <h3>{blogs.title}</h3>
                        <p>{blogs.content}</p>
                    </div>
                })
            }

        </>

    )
}

export default BlogsPage