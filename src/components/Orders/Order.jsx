import React from 'react'
import css from './Order.module.css'
import {  groupNumber, ordersData} from "../../data/data";
import OrdersPieCart from "../../components/OrderChart/OrderChart";

const Order = () => {
  return (
<div className={`${css.container} theme-container`}>
    <div className={css.head}>
        <h2>Dasshy</h2>
        <span>Orders Today</span>
    </div>

    <div className={`${css.stat} grey-container`}>
        <span>Amount</span>
        <span>{`${groupNumber(6789)}`}</span>

    </div>

    <div className={css.orders}>
        {
            ordersData.map((order, index)=>(
                <div key={index} className={css.order}>
                    <div>
                        <span>{order.name}</span>
                        <span>{order.change}</span>
                    </div>
                    <div>
                        <span>{order.type}</span>
                        <span>Items: {order.items}</span>
                    </div>
                </div>
                
            ))
        }

    </div>

    <div className={css.oderChart}>
        <span>Split Orders</span>
        <OrdersPieCart/>
    </div>

</div>
  )
}

export default Order