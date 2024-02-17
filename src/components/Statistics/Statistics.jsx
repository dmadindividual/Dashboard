import React from "react";
import css from "./Statistics.module.css";
import {BsArrowUpShort} from 'react-icons/bs'
import {  groupNumber } from "../../data/data";
import StatisticsChart from "../../components/StatisticsChart/StatisticsChart";

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <span className={css.title}>Overview Stats</span>
        <div className={`${css.cards} grey-container`}>
          <div>
            <div className={css.arrow}>
              <BsArrowUpShort width={20} height={20}/>
            </div>
            <div className={css.card}>
              <span>Top Item this month</span>
              <span>Office Comps</span>
            </div>
          </div>

          <div className={css.card}>
              <span>Items</span>
              <span>{`${groupNumber(3700)}`}</span>
            </div>

            <div className={css.card}>
              <span>Profit</span>
              <span>{`${groupNumber(4556)}`}</span>
            </div>

            <div className={css.card}>
              <span>Daily Average</span>
              <span>{`${groupNumber(67200)}`}</span>
            </div>
            
        </div>

        <StatisticsChart />

    </div>
  )
};

export default Statistics;
