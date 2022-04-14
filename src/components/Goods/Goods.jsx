import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectGoods} from "../../app/slices/goodsSlice";
import styles from './Goods.module.scss';
import GoodItem from "../GoodItem/GoodItem";

const Goods = () => {
    const [noOfElements, setNoOFElements] = useState(8)
    const goods = useSelector(selectGoods)

    const slice = goods.slice(0, noOfElements)

    const loadMore = () => {
        setNoOFElements(noOfElements + noOfElements)
    }

    return (
        <div className={styles.goods}>
            {slice.map(good => (
                <GoodItem good={good} key={good._id}/>
            ))}
            <button
                className={styles.goods__button}
                onClick={() => loadMore()}
            >
                Load more
            </button>
        </div>
    )
}

export default Goods;