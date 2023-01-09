import React, { useEffect, useState } from "react";

function Blog() {
  //set up state...

  const [currentPosition, setcurrentPosition] = useState(0);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    //List News Items
    const newsItem = [
      {
        title: "Education",
        //    url: "https://www.bbc.com/news",
        description:
          "Had my WAEC from Hope Academy Schools Mkpat Enin, My A'Level from Akwa Ibom College Of Art & Science, currently pursuing my Bsc in Mathematics & Statics & a Diploma in Software Engineering at Altschool Africa.",
      },
      {
        title: "Hobbies",
        //    url: "https://www.cnn.com/news",
        description: "I love coding, problem solving and building dynamic websites with good simple animations, Aside that, I love reading and listening to music",
      },
      {
        title: "Autography",
        //    url: "https://news.google.com/",
        description: "My name is Victor Bernard, I hail from Akwa Ibom State, Nigeria. I am a Front-End developer with proficiency in HTML,CSS,JavaScript,ReactJS,VueJS and Firebase",
      },
      {
        title: "Aspirations",
        //    url: "https://techrunch.com/",
        description: "I want to be positive impact in the Africa society, I hope to achieve this by building multiple life problem solving softwares and credible charity. ",
      },
      {
        title: "Work Experience",
        //    url: "https://www.theverge.com/",
        description: "I own and manage an Entertainment blog www.demusiclinkup.com.ng, having about 10 workers on the blog under my lead gave me a big boast on my work and leadership skills.",
      },
    ];

    const item = newsItem[currentPosition];

    //set state...
    setListItems(newsItem);
    //set our  state...
    setNews(item);
    setLoading(false);
  }, [currentPosition]);

  /*  
         <div className="news-items" key={mykey}>
           <h2>{item.title}</h2>
           <p>{item.description}</p>
           <a href={item.url} target="_blank">
             {item.url}
           </a>
         </div>
   
   */
  const handleNext = (event) => {
    event.preventDefault();
    //Update Our State....
    if (currentPosition < listItems.length - 1) {
      setcurrentPosition((prev) => prev + 1);
    } else {
      setcurrentPosition(0);
    }
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    //Update Our State....
    if (currentPosition > 0) {
      setcurrentPosition((prev) => prev - 1);
    } else {
      setcurrentPosition(0);
    }
  };

  return (
    <>
      <section>
        {loading ? (
          <div>loading</div>
        ) : (
          <div className="news-items">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url} target="_blank">
              {news.url}
            </a>
          </div>
        )}
      </section>
      <div className="paginate">
        <button className="prev" onClick={handlePrevious}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}

export default Blog;
