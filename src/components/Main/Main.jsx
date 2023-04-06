import React from "react";
import "./index.scss";
import Card from "../../UI/Card/Card.jsx";
import Cards from "../../UI/Cards/Cards.jsx";
import img1 from "../../assets/img/img1.svg";
import img2 from "../../assets/img/img2.svg";
import img3 from "../../assets/img/img3.svg";
import img4 from "../../assets/img/img4.svg";
const Main = () => {
  const cardData = [
    {
      id: 1,
      title: "Making a design system from scratch",
      date1: "12 Feb 2020",
      date2: "Design, Pattern",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "Creating pixel perfect icons in Figma",
      date1: "12 Feb 2020",
      date2: "Figma, Icon Design",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  const cardsData = [
    {
      id: 1,
      img: img2,
      title: "Designing Dashboards",
      year: 2020,
      category: "Dashboard",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      img: img3,
      title: "Vibrant Portraits of 2020",
      year: 2018,
      category: "Illustration",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      img: img4,
      title: "36 Days of Malayalam type",
      year: 2018,
      category: "Typography",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officinim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <main>
      <div className="container2">
        <div className="main__flex">
          <div className="main__flex__wrapper">
            <h1 className="main__flex__wrapper--title">
              Hi, I am John, Creative Technologist
            </h1>
            <p className="main__flex__wrapper--text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="main__flex__img">
            <img src={img1} />
          </div>
        </div>

        <button className="main__flex--btn">Download Resume</button>
      </div>

      <div className="card">
        <div className="container2">
          <div className="card__link">
            <h3>Recent posts</h3>
            <a href="#">View all</a>
          </div>

          <div className="card__flex">
            {
            cardData.map((item) => {
              return <Card key={item.id} item={item} />;
            })
            }
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="works__title">
          <h3>Featured works</h3>
        </div>

        {
        cardsData.map((item) => {
          return <Cards key={item.id} item={item} />;
        })
        }
      </div>
    </main>
  );
};

export default Main;
