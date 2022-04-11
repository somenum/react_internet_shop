import React from 'react';
import {useSelector} from "react-redux";
import {selectGoods} from "../../app/goodsSlice";
import styles from './Goods.module.scss';
import GoodItem from "../GoodItem/GoodItem";

const Goods = () => {
    const goods = useSelector(selectGoods)

    return (
        <div className={styles.goods}>
            {goods.map(good => (
                <GoodItem good={good} key={good._id}/>
            ))}
        </div>
    )
}

export default Goods;