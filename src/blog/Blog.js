import React from 'react';
import {Router,Link} from 'react-router-dom';
import './Blog.css';

function Blog() {
    return (
      <div className="whole3">
        <nav class="navbar">
          <Link class="navbar-brand" to="/">
            <img src="/chrysanthemum.png" className="Logo" alt="birth-flower"/>
          </Link>
          <div class="nav" >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/open/Opened">Open Letter</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link activity" to="/blog/Blog">Us</Link>
              </li>
            </ul>
          </div>
          <Link to="/secret/Secret">
                <img src="/music.png" className="spotify" alt="spotify"></img></Link>
        </nav>

        <div className="heading">
          <h1>Our Firsts ❤️</h1>
        </div>

        <div>
          <div className="row">
            <div className="items">
              <img className="photo" src="/photos/1.JPG"></img>
              <p>First ever photo I took of you (in secret).</p>
            </div>

            <div className="items">
              <img className="photo" src="/photos/2.jpg"></img>
              <p>First stuffed toy I got since meeting you also known as Ryan Jr.</p>
            </div>

            <div className="items">
              <img className="photo" src="/photos/3.jpg"></img>
              <p>Cutest boy sending me hearts. Teehee 🫶</p>
            </div>
          </div>

          <div className="row">
            <div className="items">
              <img className="photo" src="/photos/4.JPG"></img>
              <p>The first photo you sent me after arriving in New York (from what I remember).</p>
            </div>

            <div className="items">
              <img className="photo" src="/photos/5.jpg"></img>
              <p>First photos we took together after meeting each other. SUPA SHY 😊</p>
            </div>

            <div className="items">
              <img className="photo" src="/photos/6.jpg"></img>
              <p>First photo we took in bed together... things are getting heated ooooo</p>
            </div>
          </div>

          <div className="row">
            <div className="items">
              <img className="photo" src="/photos/7.JPG"></img>
              <p>First Mirror Selfie (?) <br></br>---I was h***y no CAP---</p>
            </div>

            <div className="items">
              <img className="photo" src="/photos/8.jpg"></img>
              <p>First time parting ways. My baby big cry. You so cute. </p>
            </div>

            <div className="items">
              <img className="photo" src="/photos/9.png"></img>
              <p>First digital camera photo. It's giving hella "yea this is a photo of mom and dad when they were young."</p>
            </div>
          </div>

          <div className="row">
            <div className="items">
              <img className="photo" src="/photo2/10.jpeg"></img>
              <p>My first time in Toronto.</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/11.jpeg"></img>
              <p>Our first permanent bracelet together</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/12.jpg"></img>
              <p>Our first night as boyfriend and girlfriend, YAY!
              </p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/13.jpeg"></img>
              <p>MORNING AFTER FIRST FUCK YEEESSSSSSSSS</p>
            </div>

          </div>

          <div className="row">

            <div className="items">
              <img className="photo" src="/photo2/14.jpeg"></img>
              <p>First double date with achi and jay hehe.</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/15.jpeg"></img>
              <p>First time you cried in my arms (?) and first movie night ever!</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/16.jpeg"></img>
              <p>First naked photo in bed.</p>
            </div>

          </div>

          <div className="row">
            <div className="items">
              <img className="photo" src="/photo2/17.jpeg"></img>
              <p>First time enjoying crane machines and not feeling hella pressured teehee.</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/18.jpeg"></img>
              <p>First time kart racing together. I'm faster. </p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/19.jpeg"></img>
              <p>First mirror selfie in your car :3</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/20.jpeg"></img>
              <p>First time beach with a boy only and first time beach with a bikini EVER. Glad it was with you. Almost went rogue out there.</p>
            </div>
          </div>

          <div className="row">

            <div className="items">
              <img className="photo" src="/photo2/21.jpeg"></img>
              <p>First time bomb time, forgot what it's called. escape room?</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/22.jpeg"></img>
              <p>First KBBQ together and first meal with big achi?</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/23.jpg"></img>
              <p>First time flight got canceled LOL</p>
            </div>
          </div>

          <div className="row">

            <div className="items">
              <img className="photo" src="/photo2/24.jpg"></img>
              <p>First time at Six Flags together .</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/25.jpeg"></img>
              <p>First time you took bus to me MUAH.</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/26.jpeg"></img>
              <p>First time going to skwool together.</p>
            </div>
          </div>

          <div className="row">

            <div className="items">
              <img className="photo" src="/photo2/27.jpeg"></img>
              <p>First time Tacombi, the long awaited Tacombi.</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/28.JPEG"></img>
              <p>First time at Korean sauna together.</p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/29.jpg"></img>
              <p>First double date with Sonam and her bf, also our first hike together. </p>
            </div>

            <div className="items">
              <img className="photo" src="/photo2/30.jpeg"></img>
              <p>First time at Canada Wonderland (?). The one ride we rode was really fun...</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
  
  export default Blog;