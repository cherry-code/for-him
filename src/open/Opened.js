import './Opened.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Opened() {
  return (
    <div class = "whole2">
      <nav class="navbar">
        <Link class="navbar-brand" to="/">
          <img src="/chrysanthemum.png" className="Logo" alt="birth-flower"/>
        </Link>
        <div class="nav" >
          <ul class="navbar-nav">
            <li class="nav-ite active">
              <Link class="nav-link activity" to="/open/Opened">Open Letter</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog/Blog">Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/secret/Secret">
          <img src="/music.png" className="spotify" alt="spotify"></img>
        </Link>
      </nav>

      <div className="letter">
        <h1 className="birthday" >Happy Birthday Bubby!!!</h1>
        <h3>[ Also, happy 5th monthiversary 🌻 ]</h3>
        <p>Hi bubby, do you like what you see? 😉 </p>
        <p>Hehehehehe. I bought you gifts, but I know I can only give that stuff to you when you come here in November and that’s not even guaranteed. So, I made this so that I can at least give you *something* on your birthday. You’re my precious baby so I want you to have the best birthday ever, but it sucks that I can’t do much for you because of the distance. This is my attempt in doing something for your birthday. I hope you enjoy. I guess I give little description. Top left corner flower will redirect you to the main page with envelope. I have two tabs in the middle and a tab on the top right (you can kinda tell what that is). You can open each one and see for yourself, what is on each page. You’re already on the “Open Letter” page, aka where you’re reading this letter. Any who, now I must profess my love to you. </p>

        <p>At this point in our relationship, things I say are probably getting repetitive, but I only say everything repeatedly because I feel it again and again while spending time with you. You make me so so happy and I do not know what I would do with you. You’re the best backbone someone could ask for. Any problem that I come across, I know that you will back me up and support me through it all, whether it’s a problem with you, family, or friends. I’m so thankful we met and that you’re my boyfriend. I could not ask for anything else. I’m writing this stuff for your birthday because it kind of overlaps with our fifth monthiversary T-T. I’m so glad I have you to work things out with and I’m so glad we are equally invested in our relationship. I want to get married to you, so I do always want to work things out. I’m sorry I’ve been causing problems, but I am reflecting on it and will make efforts to smoothen things out and to not get triggered so easily. You’re so sweet. You’re so cute. You’re so sexc. You’re so understanding. You’re the best! </p>

        <p>I’m so glad you were born, pleased, delighted, and absolutely thrilled that today is your coming out of the womb day. MUAH. 👩‍❤️‍💋‍👨</p>

        <p>Congratulations on another year around the sun.</p>
        <p>Happy Born Day Gang!</p>
        <p>Many Balloons 🎈</p>
        <p>Cakes and Candles</p>
        <p>Happy Birthday to the Prettiest Boy 🫶 </p>
        <br></br>
        <p>Your love,</p>
        <p>Choezom <img src="https://images.vexels.com/content/188997/preview/doodle-stroke-heart-cute-c41032.png" className="emoji"></img>
        </p>
        <img src="/chrysanthemum.png" className="sign" alt="birth-flower"/>
        <br></br>
        <br></br>
        <br></br>
        <p>(P.S. I know you have been supa stressed from career and money. I just want to let you know that you don't have to worry about anything regarding me in that perspective. I love you and I still think you're the best boyfriend in the world. Don't feel embarrassed to tell me that you're stressed. I promise the only thing I will do is try to understand your perspective and adjust to it. I only want happiness for you. You're my precious baby and I want to protect your tiny tiny feelings. MUAH.)
          <br></br> I'm sorry for being a shit gf. I understand if you don't wanna keep this up. You can leave me. I can't not get upset. I'm insecure. I've gotten this constant feeling every time we argue that you love me less and when I don't get a nice reaction, I think it kind of confirms my bad thoughts for me. It ends up making me more insecure. I want you to be happy. Be happy. I love you. I'm trying to change my ways to make sure I am doing everything I can to not make you sad or upset when I get upset. I'll try to be less blaming. I'm not sure how, but I'll remind you that I just want love that's it. I hope you still want a future with me. I can't love another person, so we are going to have to work out. haha. yes, you're stuck. 
          <br></br> I'm sorry. <br></br> Realistically tho, if you don't want to deal with me. You can say so. I'll stay away. If it's a done deal and you don't wanna work on us, you can tell me. If you don't feel like changing your ways and making an effort too, then let me know. This is not me saying you're not making an effort. I love you. I love you so much. 
        </p>
      </div>

      <div className="margin-fix"> </div>
    </div>
  );
}

export default Opened;