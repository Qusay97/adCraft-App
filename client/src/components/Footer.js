import React from 'react';
import '../style/App.css';
import { Grid, GridList } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../style/signup.png';


class Footer extends React.Component {
  render() {
    return (
      <Grid className="lastFooter">
            <footer class="footer-distributed">
        <Grid class="footer-left">
          <CardMedia
              className="media3"
              image={logo}
              alignItem="center"
          />
         
          <p class="footer-company-name">adCraft Advertising &copy; 2018</p>
        </Grid>
        <Grid className="footer-nextleft">
        <GridList>
          <p class="footer-links">
            <li href="#">Home</li> 
            <li href="#">Blog</li>
            <li href="#">Pricing</li>
            <li href="#">About</li>
            <li href="#">Faq</li>
            <li href="#">Contact</li>
          </p>
          </GridList>
        </Grid>
        <Grid class="footer-center">
        <Grid>
            <i class="fa fa-map-marker"></i>
            <p><span>18 Hacker Haus Street</span> Amman, Jordan</p>
          </Grid>
          <Grid>
            <i class="fa fa-phone"></i>
            <p>+962 79641 8297</p>
          </Grid>
          <Grid>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">adCraft@adCraft.com</a></p>
          </Grid>
        </Grid>
        <Grid class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Adcraft Advertising has come a long way from its beginnings in a small idea of great minds from RBK's Students in wonders of Jordan.
          </p>
          <Grid class="footer-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
          </Grid>
        </Grid>
        </footer>

    </Grid>
    );
  }
}
export default Footer;
