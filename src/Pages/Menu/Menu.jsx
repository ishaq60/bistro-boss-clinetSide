import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../share/Cover/Cover';
import menu from '../../assets/menu/menu-bg.png'
import menu1 from '../../assets/menu/banner3.jpg'
import dessertimg from '../../assets/menu/dessert-bg.jpeg'
import pizzasimg from '../../assets/menu/pizza-bg.jpg'
import soupimg from '../../assets/menu/soup-bg.jpg'
import PopularManu from '../Home/PopularManu/PopularManu';
import useMenu from '../../hooks/Usehokks';
import SectionTitle from '../../Components/sectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

const [menu]=useMenu()
const desserts=menu.filter(item=>item.category==='dessert')
const pizzas=menu.filter(item=>item.category==='pizza')
const salads=menu.filter(item=>item.category==='salad')
const soup=menu.filter(item=>item.category==='soup')
const offered=menu.filter(item=>item.category==='offered')

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menu1} title='Our menu' ></Cover>
              {/* offerd menu items */}
            <SectionTitle subheading="Don't miss" heading="Toady's offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory title="Dessert" coverImg={dessertimg} items={desserts}></MenuCategory>
            <MenuCategory title="pizza" coverImg={pizzasimg} items={pizzas}></MenuCategory>
            <MenuCategory title="soup" coverImg={soupimg} items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;
