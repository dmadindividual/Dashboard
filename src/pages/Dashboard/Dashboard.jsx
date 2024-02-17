import React from "react";
import css from "./Dashboard.module.css";
import { cardsData, groupNumber } from "../../data/data";
import Statistics from "../../components/Statistics/Statistics";
import Order from "../../components/Orders/Order";


const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.dashboard}>
        <div className={`${css.dashboard_head} theme-container`}>
          <div className={css.head}>
            <span>Dashboard</span>

            <div className={`${css.durationbutton} `}>
              <select>
                <option>-----Select----</option>
                <option>1 week</option>
                <option>2 weeks</option>
                <option>3 week</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <div key={index} className={css.card}>
                <div className={css.card_head}>
                  <span className={css.title}>{card.title}</span>
                  <span className={css.title}>+{card.change}</span>
                </div>
                <div className={css.card_amount}>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>

                </div>
              </div>
            ))}
          </div>
        </div>
        <Statistics/>
      </div>

  
        <Order/>
 
    </div>
  );
};

export default Dashboard;
