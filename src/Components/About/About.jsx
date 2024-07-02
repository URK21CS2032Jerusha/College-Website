import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img'/>

        </div>
        <div className="about-left">
            <h3>ABOUT UNIVERSITY</h3>
            <h2> Nurturing Tomorrow's Leaders Today</h2>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores provident, in quam quidem quod sapiente dolorum neque tenetur, optio laborum ex. Vero quidem delectus amet optio ipsum, ratione reprehenderit quia!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis voluptas beatae explicabo tenetur, molestias nemo veniam mollitia quis delectus excepturi cumque sint amet possimus enim, temporibus sunt perspiciatis! Veritatis!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti at porro fugiat libero eveniet cupiditate. Temporibus veritatis, vero ut sapiente quis ullam! Ad soluta quam quia eligendi molestiae optio excepturi!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, animi fuga laboriosam repudiandae nobis provident odit culpa natus, error corrupti dolore consequatur soluta laborum earum! Minima pariatur reiciendis consectetur commodi!
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In amet explicabo porro saepe vero temporibus natus est, consequuntur tempore pariatur dignissimos ex tempora error enim et, quaerat, ipsa non eius?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut asperiores culpa iusto, illum earum voluptatum at cumque, magni, sapiente provident repudiandae non! Nemo omnis aut nobis mollitia aperiam reiciendis!
            </p>
        </div>
    </div>
  )
}

export default About
