import React, { Component } from "react";
import "./style.css";
import Iframe from 'react-iframe';

const Bio = () => {
  return (
    <div className="bio">
    <div class="container">

        <h2 className="font-weight-light">Nandi K.</h2>
        <p>
        Nandi Kayyy is a Queer, Southern born singer/songwriter based in Brooklyn, New York. Drawing inspiration from artists like Imani Omari, Little Dragon, & The Internet, while being guided by Neosoul ancestors like Erykah Badu, Nandi Kayyy delivers a sound from where 90s r&b meets space. In 2016, Nandi released her debut EP, NandiJay; collaboration between Nandi and producer/composer Jessi Lee (Fyziks).
        </p>
      </div>

 
 


    <div className="photos">
    <center>
<p>
<i class="fas fa-grip-horizontal"></i>
POSTS</p>
</center>
      <div className="card-body">
      <section>
      <Iframe url="https://snapwidget.com/embed/677796"
          width="100%"
          height="600px"
          id="myId"
          className="snapwidget-widget"
          position="relative"
          allow="encrypted-media"
          overflow="hidden"
          allowFullScreen/>
          </section>
      </div>
      </div>
    </div>
    
  );
};
export default Bio;


