import React from "react";
import style from "./Feed.module.scss";
import News1 from "./../img/Feed/news1.png";
import News2 from "./../img/Feed/news2.png";
import News3 from "./../img/Feed/news3.png";
import News4 from "./../img/Feed/news4.png";
import News5 from "./../img/Feed/news5.png";
import News6 from "./../img/Feed/news6.png";
import Icon from "./../img/Feed/icon.png";
class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          text:
            "WWE WrestleMania 37 commenced on Saturday evening as the Night 1 card grabbed the spotlight in historic fashion. Amid a limited number of fans permitted to attend a WWE live event for the first time in over one year, the loaded card delivered, and then some.",

          name: "Wrestlemania",
          img: [News1],
          date: "13.05.2021",
          icon: Icon,
        },
        {
          id: 2,
          text:
            "WWE WrestleMania 37 commenced on Saturday evening as the Night 1 card grabbed the spotlight in historic fashion. Amid a limited number of fans permitted to attend a WWE live event for the first time in over one year, the loaded card delivered, and then some.",

          name: "Wrestlemania",
          img: [News2, News3],
          date: "13.05.2021",
          icon: Icon,
        },
        {
          id: 3,
          text:
            "WWE WrestleMania 37 commenced on Saturday evening as the Night 1 card grabbed the spotlight in historic fashion.",

          name: "Wrestlemania",
          img: [News4, News5, News6],
          date: "13.05.2021",
          icon: Icon,
        },
      ],
    };
  }
  render() {
    return (
      <div className={style.feed__block}>
        {this.state.posts.map((item, index) => {
          return (
            <div className={style.feed__post} key={index}>
              <div className={style.feed__head}>
                <div className={style.feed__icon}>
                  <img src={item.icon} alt="" />
                </div>
                <div className={style.feed__info}>
                  <h2 className={style.feed_name}>{item.name}</h2>
                  <p className={style.feed__date}>{item.date}</p>
                </div>
              </div>
              <div className={style.feed__main}>{item.text}</div>
              {item.img.length === 3 ? (
                <div className={style.feed__fotos}>
                  <div className={style.feed__first}>
                    <img
                      src={item.img[0]}
                      className={style.feed__foto1}
                      alt=""
                    />
                  </div>
                  <div className={style.feed__second}>
                    <img
                      className={style.feed__foto2}
                      src={item.img[1]}
                      alt=""
                    />
                    <img
                      className={style.feed__foto2}
                      src={item.img[2]}
                      alt=""
                    />
                    <img
                      className={style.feed__foto2}
                      src={item.img[2]}
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div className={style.feed__fotos}>
                  {item.img.map((item, index) => {
                    return (
                      <img
                        className={style.feed__foto}
                        src={item}
                        key={index}
                        alt=""
                      />
                    );
                  })}
                </div>
              )}
              {/* <div className={style.feed__fotos}>
                {item.img.map((item, index) => {
                  return (
                    <img
                      className={style.feed__foto}
                      src={item}
                      key={index}
                      alt=""
                    />
                  );
                })}
              </div> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Feed;
