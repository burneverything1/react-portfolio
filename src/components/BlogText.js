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
            <p>
                This was taken from <a href="https://fullstackopen.com/en/">Full Stack Open</a>. This blog post is to serve as a working test-of-concept and personal note. A template for public use can be found here: <a href="https://github.com/burneverything1/mernbackend-template">Github</a>
            </p>
            <ul>
                <li>
                    index.js<br/>create server with http and Express app, then start server with server.listen
                </li>
                <li>
                    app.js<br/>connect to MongoDB<br/>attach middleware to Express app, including router
                </li>
                <li>
                    controllers
                    <ul>
                        <li>
                            router.js<br/>express Router, handles all the requests 
                        </li>
                    </ul>
                </li>
                <li>
                    models
                    <ul>
                        <li>
                            datum.js<br/>set mongoDB schema and adjusted methods through Mongoose
                        </li>
                    </ul>
                </li>
                <li>
                    utils
                    <ul>
                        <li>
                            config.js<br/>import environmental variables
                        </li>
                        <li>
                            logger.js<br/>choice of info and error logging
                        </li>
                        <li>
                            middleware.js<br/>minimum: request logger; unknown endpoint catch; error handler
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default BlogText