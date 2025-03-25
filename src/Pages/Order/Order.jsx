import React, { useState } from "react";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "../share/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/Usehokks";
import Card from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = [  "salad", "pizza", "dessert", "soup", "drink"];

  const { category } = useParams();
  const intialtailtabIndex = categories.indexOf(category);
  const [tabIndex, settabindex] = useState(intialtailtabIndex);
  const [menu] = useMenu();

  console.log(category);
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const Drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={orderCover} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => settabindex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Dirnks</Tab>
        </TabList>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
            {salads.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
            {pizzas.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
            {desserts.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
            {soup.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
            {Drinks.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
