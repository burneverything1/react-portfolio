import React from 'react'

const BlogText = (props) => {
    return (
        <div>
            <pre>
                <code className='blog-code'>
                    ├── index.js<br/>
                    ├── app.js<br/>
                    ├── build<br/>
                    │   └── ...<br/>
                    ├── controllers<br/>
                    │   └── router.js<br/>
                    ├── models<br/>
                    │   └── datum.js<br/>
                    ├── package-lock.json<br/>
                    ├── package.json<br/>
                    ├── utils<br/>
                    │   ├── config.js<br/>
                    │   ├── logger.js<br/>
                    │   └── middleware.js<br/>
                </code>
            </pre>
        </div>
    )
}

export default BlogText