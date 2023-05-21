import { Helmet } from "react-helmet-async";

const Blogs = () => {
    return (
        <div className="mt-10 mb-20 max-w-6xl mx-auto">
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <article className="my-10">
                <h1 className="text-3xl text-pink"><span className="text-blue font-bold">Q.</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="mt-3 text-xl space-y-3">Access token and refresh token commonly used in authentication and authorization.
                    <li>Access Token: Access tokens are credential used to access protected resource. It provide temporary and limited access to protect resource and access token often included in the authorization header of API requests to validate the clients identity and authentication. Access token has short lifespan, it commonly stored in browser cookies and local storage</li>
                    <li>Refresh Token: Refresh token use alongside access token and it has longer lifespan. Refresh token allows clients to request a new access token without requiring reauthenticate. When access token expire clients can request a new access token from the authentication server. Refresh has a longer lifespan and it stored in HTTP-only cookies or secure storage in mobile apps.</li>
                </p>
            </article>
            <article className="my-10">
                <h1 className="text-3xl text-pink"><span className="text-blue font-bold">Q.</span> Compare SQL and NoSQL databases?</h1>
                <p className="mt-3 text-xl">SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems.
                    <li className="mt-5">SQL databases are relational, But NoSQL is not relational</li>
                    <li>SQL databases follow a structured data model, and have predefined scheme. But NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL data is stored in tables with columns and rows, While NoSQL stored in collections or documents</li>
                    <li>SQL Supports JOIN and complex queries, But NoSQL does not support</li>
                </p>
            </article>
            <article className="my-10">
                <h1 className="text-3xl text-pink"><span className="text-blue font-bold">Q.</span> What is express js? What is Nest JS?</h1>
                <p className="mt-3 text-xl space-y-3">Access token and refresh token commonly used in authentication and authorization.
                    <li>
                        Express Js: Express js is a web application framework for NodeJs. It provides various features to quickly and easily build web applications using javascript and Express js allows developers to handle HTTP requests, define routes, implement middleware, and manage various aspects of web application development.
                    </li>
                    <li>
                        Nest Js: NestJs is a typescript based framework. It uses to building scalable and maintainable server-side applications. NestJs built on top of Express.js and adds additional features and architectural patterns.
                    </li>
                </p>
            </article>
            <article className="my-10">
                <h1 className="text-3xl text-pink"><span className="text-blue font-bold">Q.</span> What is MongoDB aggregate and how does it work?</h1>
                <p className="mt-3 text-xl">MongoDB Aggregation framework is a powerful feature that allows for data processing and analysis within the MongoDB database. One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. In aggregate framework we can break down a complex query into easier stages.There some filtering stages in aggregate pipeline by the end of the query pipeline, we will get the data that we wanted.
                </p>
            </article>
        </div>
    );
};

export default Blogs;