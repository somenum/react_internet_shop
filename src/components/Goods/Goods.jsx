import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectGoods } from "../../app/slices/goodsSlice";
import styles from "./Goods.module.scss";
import GoodItem from "../GoodItem/GoodItem";
import Button from "../Button/Button";

const Goods = () => {
  const [noOfElements, setNoOFElements] = useState(8);
  const goods = useSelector(selectGoods);

  const slice = goods.slice(0, noOfElements);

  const loadMore = () => {
    setNoOFElements(noOfElements + 4);
  };

  return (
    <div className={styles.goods__container}>
      <div className={styles.goods}>
        {slice.map((good) => (
          <GoodItem good={good} key={good.id} />
        ))}
      </div>
      {noOfElements !== goods.length && (
        <Button
          onClick={loadMore}
          className={styles.goods__button}
          buttonStyle="primary"
          type="button"
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default Goods;
