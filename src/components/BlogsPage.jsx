import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "../assets/css/blog.css";
import articleImage from "../assets/images/blog header image.png";
import blog1 from "../assets/images/blog 1.png";
import blog2 from "../assets/images/blog 2.png";
import blog3 from "../assets/images/blog 3.png";
import blog4 from "../assets/images/blog 4.png";
import blog5 from "../assets/images/blog 5.png";
import blog6 from "../assets/images/blog 6.png";


const articles = [
    {
        id: 1,
        image: blog1,
        date: "08/04/2025",
        title: "Budget-Friendly Grocery",
        desc: "Welcome to our Plant Care section, where we share expert advice...",
    },
    {
        id: 2,
        image: blog2,
        date: "22/03/2025",
        title: "Meal planning for the week",
        desc: "Welcome to our Plant Care section, where we share expert advice...",
    },
    {
        id: 3,
        image: blog3,
        date: "15/03/2025",
        title: "Healthy grocery swaps",
        desc: "Welcome to our Plant Care section, where we share expert advice...",
    },
    {
        id: 4,
        image: blog4,
        date: "10/03/2025",
        title: "Smart Grocery Tips",
        desc: "Save more with smart and eco-friendly grocery shopping ideas...",
    },
    {
        id: 5,
        image: blog5,
        date: "05/03/2025",
        title: "Quick Meal Preps",
        desc: "Speed up your weeknights with easy-to-prepare grocery hacks...",
    },
    {
        id: 6,
        image: blog6,
        date: "01/03/2025",
        title: "Zero-Waste Kitchen",
        desc: "Discover sustainable ways to shop and cook waste-free...",
    },
];

const Blogs = () => {
    return (

        <div className="container py-5">
            <Helmet>
                <title>Blogs/Grocery Store</title>
            </Helmet>
            <div className="featured-article-wrapper d-flex flex-column flex-md-row gap-4 p-4 bg-light mb-5">
                <div className="article-card shadow-sm rounded-4 p-3 bg-white flex-fill">
                    <div className="position-relative">
                        <span className="badge bg-light-success text-success position-absolute top-0 start-0 m-2 px-3 py-1 fw-semibold rounded-pill">
                            FEATURED ARTICLE
                        </span>
                        <img
                            src={articleImage}
                            alt="Eco-Friendly Shopping Tips"
                            className="w-100 h-100 rounded-4 object-fit-cover"
                        />
                    </div>
                    <div className="mt-3">
                        <small className="text-black fs-5">08/04/2025</small>
                        <h5 className="mt-2 fs-3 fw-bold">Eco-Friendly Shopping Tips</h5>
                        <p className="fs-4 fw-bolder">
                            “Welcome to our Plant Care section, where we share expert advice
                            and practical tips to help you have your trees, and plants healthy
                            and thriving...
                        </p>
                    </div>
                </div>

                <div
                    className="quick-prefix px-3 py-3 fs-5"
                    style={{ minWidth: "295px" }}
                >
                    <h6
                        className="fs-4 fw-bold pb-2"
                        style={{ textDecoration: "underline" }}
                    >
                        Quick Prefix in this Article:
                    </h6>
                    <ol className=" text-dark lh-lg">
                        <li>What are Indoor Plants?</li>
                        <li>How do you plant indoor plants?</li>
                        <li>How much light do indoor plants need?</li>
                        <li>What qualities make for a good indoor plant?</li>
                        <li>Which indoor plants are easy to take care of?</li>
                    </ol>
                </div>
            </div>


            <div className="row g-4 mb-5">
                {articles.map((article) => (
                    <div className="col-12 col-md-6 col-lg-4" key={article.id}>
                        <div className="card  h-100 shadow-sm rounded-4 border-0">
                            <Link to={`/articles/${article.id}`}>
                                <img
                                    src={article.image}
                                    className="card w-100 rounded-top-4"
                                    alt={article.title}
                                />

                            </Link>
                            <div className="card-body">
                                <small className="text-muted">{article.date}</small>
                                <h5 className="fw-bold mt-2">{article.title}</h5>
                                <p className="card-text">{article.desc}</p>
                                <Link to={`/articles/${article.id}`}>
                                    <button className="btn btn-success rounded-pill px-4">
                                        Read Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
