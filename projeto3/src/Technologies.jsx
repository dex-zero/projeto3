import Menu from './components/menu'
import Card from './components/card'
import { useState } from 'react'
import Data from './constants/tech.json'

import style from './Tech.module.css'

export const Tech = () =>{  
  const [selectedTitle, setSelectedTitle] = useState('All');
  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
  };

  const renderTechCards = () => {
    if (selectedTitle === 'All') {
      return Data.map((tech) => (
        <Card
          key={tech.id}
          heightCard = {tech.heightCard}
          widthImg = {tech.widthImg}
          srcImg={tech.srcImg}
          title={tech.title}
          desc={tech.desc}
        />
      ));
    } else {
      return Data.filter((tech) => tech.title === selectedTitle).map((tech) => (
        <Card
          key={tech.id}
          srcImg={tech.srcImg}
          title={tech.title}
          desc={tech.desc}
        />
      ));
    }
  };

  const categories = ['All', ...new Set(Data.map((tech) => tech.title))];
  
  return(
    <div>
      <Menu/>
      <div className={style.wrapContainer}>
        <h1>Technologies</h1>
        <div className={style.wrapBtn}>
            {categories.map((title) => (
              <button
                key={title}
                className={style.btnTech}
                onClick={() => handleTitleSelect(title)}>
                {title}
              </button>
            ))}
        </div>
        <div className={style.wrapCards}>
          {renderTechCards()}
        </div>
      </div>
    </div>
  )
}
