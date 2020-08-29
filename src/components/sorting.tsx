import React, { useState, useEffect } from "react";

const LIST_LENGTH = 30;
const MAX_VALUE = 20;

const random = () => {
  let items = [];
  for (let index = 0; index < LIST_LENGTH; index++) {
    items.push({
      value: Math.round(Math.random() * MAX_VALUE),
      position: 0,
    });
  }
  return items;
};

export default () => {
  const [update, setUpdate] = useState(false);
  const [items, setItems] = useState(random());
  const [currentI, setCurrentI] = useState(0);
  const [currentJ, setCurrentJ] = useState(0);
  useEffect(() => {
    if (update) {
      setUpdate(false);
      return;
    }
    let itemsChanged = false;
    const updatedItems = items.map((it, index) => {
      if (Math.abs(index - it.position) < 0.1) {
        it.position = index;
      } else {
        itemsChanged = true;
      }
      return {
        value: it.value,
        position: it.position + (index - it.position) / 100,
      };
    });
    if (itemsChanged) {
      setItems(updatedItems);
    } else {
      if (currentI > LIST_LENGTH) {
        return;
      }
      if (currentJ >= items.length - currentI - 1) {
        setCurrentI(currentI + 1);
        setCurrentJ(0);
      } else {
        if (items[currentJ].value > items[currentJ + 1].value) {
          const it = items[currentJ];
          items[currentJ] = items[currentJ + 1];
          items[currentJ + 1] = it;
          setItems(items);
        }
        setCurrentJ(currentJ + 1);
      }
    }
  }, [update]);
  useEffect(() => {
    setInterval(() => {
      setUpdate(true);
    }, 1000 / 24);
  });
  const maxValue = items.reduce((acc, it) => Math.max(acc, it.value), -1000000);
  return (
    <div style={{ margin: 50 }}>
      {/* <div style={{ display: "flex", flexDirection: "row", margin: "0 auto" }}> */}
      {items.map((it, index) => {
        return (
          <div
            key={index}
            style={{
              borderRadius: "20px",
              position: "absolute",
              left: it.position * 15 + 50,
              top: (maxValue - it.value) * 20 + 50,
              display: "flex",
              alignSelf: "flex-end",
              // margin: 5,
              height: it.value * 20,
              width: 10,
              backgroundColor: "#00B0FF",
            }}
          ></div>
        );
      })}
      {/* </div> */}
    </div>
  );
};
