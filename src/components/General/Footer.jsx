import React from "react";
import "./style.css";
import Logo from "../../assents/images/Logo";
import LogoTG from "../../assents/images/LogoTG";
import LogoWA from "../../assents/images/LogoWA";
import LogoViber from "../../assents/images/LogoViber";
import LogoInstagram from "../../assents/images/LogoInstagram";
import LogoVK from "../../assents/images/LogoVK";

const Footer = () => {
    return <footer className="footer">
        <div className="footer__logo">
            <Logo />
            <span>© «Интернет-магазин DogFood.ru»</span>
        </div>
        <div className="footer__nav-list">
            <a href="/">Каталог</a>
            <a href="/">Акции</a>
            <a href="/">Новости</a>
            <a href="/">Отзывы</a>
        </div>
        <div className="footer__nav-list">
            <a href="/">Оплата и доставка</a>
            <a href="/">Часто спрашивают</a>
            <a href="/">Обратная связь</a>
            <a href="/">Контакты</a>
        </div>
        <div className="footer__contacts">
            <h3>Мы на связи</h3>
            <div>
                <a href="tel:+7999000000"><h3>8 (999) 99-99-99</h3></a>
                <a href="mailto:dogfood.ru@gmail.com">dogfood.ru@gmail.com</a>
            </div>
            <div className="footer__contacts-social">
                <a href="/"><LogoTG /></a>
                <a href="/"><LogoWA /></a>
                <a href="/"><LogoViber /></a>
                <a href="/"><LogoInstagram /></a>
                <a href="/"><LogoVK /></a>
            </div>
        </div>
    </footer>
}

























// import Logo from "./Logo";
// import {Link} from "react-router-dom";
// const links = [
    
//         {name: "Каталог", src: "/"},
//         {name: "Акции", src: "/"},
//         {name: "Новости", src: "/"},
//         {name: "Отзывы", src: "/"}
// ];
// const linksTwo = [
//   { name: 'Оплата и доставка', src: '/' },
//   { name: 'Часто спрашивают', src: '/' },
//   { name: 'Обратная связь', src: '/' },
//   { name: 'Контакты', src: '/' }
// ];

// const Footer = () => {
// return (
//   <>
// <footer className="footer">
// <div className="container">
// <div className="footer__wrapper">
// <div className="footer__copy">
    
//     <Logo />
//     <span>© «Интернет-магазин DogFood.ru»{' '}
//     {new Date().getFullYear()}</span>
    
//     </div>
//     <nav className="footer__nav">
//     <ul className="footer__menu">
//     {links.map(el => {
//       return (
//        <li key={el.name} className="footer__item">
//     <Link to={el.src}>{el.name}</Link>
//     </li>
//     );
//   })}
//   </ul>

//   <ul className="footer__menu">
//     {linksTwo.map(el => {
//       return (
//     <li key={el.name} className="footer__item">
//     <Link to={el.src}>{el.name}</Link>
//     </li>);
//     })}
//   </ul>
// </footer>

export default Footer;