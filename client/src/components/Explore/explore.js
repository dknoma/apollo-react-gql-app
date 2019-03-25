import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Grid, 
  Cell,
  CardMenu,
  IconButton
} from "react-mdl";

class Explore extends Component {
  render() {
    return (
      <div>
      <article class="cf">
        <div class="fl w-50 w-25-ns">
          <a href="https://www.amazon.com/BEYONCÉ-Beyonce/dp/B00KCOMBJC/ref=sr_1_2_twi_lp__3?s=music&ie=UTF8&qid=1480422067&sr=1-2&keywords=beyonce&tag=mrmrs01-20" className="db aspect-ratio aspect-ratio--1x1 dim">
            <span role="img" aria-label="Beyoncé" class="bg-center cover aspect-ratio--object"></span>
          </a>
        </div>
      </article>
      </div>
    );
  }
}

export default Explore;