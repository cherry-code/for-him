import React from 'react';
import './Secret.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Secret() {
  return (
    <div className="secret">
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          <img src="/chrysanthemum.png" className="Logo" alt="birth-flower" />
        </Link>
        <div className="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/open/Opened">Open Letter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog/Blog">Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/secret/Secret">
          <img src="/music.png" className="spotify" alt="spotify" />
        </Link>
      </nav>
      <div className="music">
        <h1>Songs that remind me of you.</h1>
        <h3>These songs, each one so pretty, bring me to tears, and I immediately think about how much I love you. 22 songs for your 22nd birthday, my pretty boy.</h3>
        <ol>
          <li>I got you, baby. Whatever it is, I'm willing to understand your perspective and work through it.</li>
          <li>Everything in this song is literally a perfect depiction of how I feel about you. I want to do the little things for you. Right now, it's like sending you updates, calling you the prettiest boy in the world all the time, and making sure you're feeling okay every day (not stressing too much). I want you to be the happiest boy and I want to be the reason why. You deserve it.</li>
          <li>I'm so happy to have you. Regardless of how often I nag you about tiny things and get mad over stupid shit, I know you're the best catch I could get. You were made for me and I don't want anyone else. You're the best bf I could ask for, so considerate. </li>
          <li>I NEED YOU! I really do. After everything and anything, just knowing I have you to come back to really helps my emotions settle down and then I cna take on every problem one by one because I feel supported by you, so well. If anything goes wrong, at the end of the day, I know you will be there for me and that alone is comfort enough.</li>
          <li>I want to spend forever with you and I'm willing to do anything to make that happen. I know it will all be worth it, whatever sacrifices we have to make will all be worth it if I get to spend the rest of my life with you.</li>
          <li>How possessive I feel about you!!! I yearn for you and I despise the thought of another woman, no, another living thing, being closer to you. The possibility of someone else making you happier than I do sometimes makes me sad. I want you all to myself.</li>
          <li>You're the one for me. I want to spend every waking moment with you and anything new I do, any new adventure I embark on, I want it to happen with you by my side, looking all pretty like you always do.</li>
          <li>Erm, this is about sex. Yeah, you really make me want it, make me look forward to it, and make me feel good. I'm so happy you're my first and you're gonna be my last as well. Everything I wanna try, I know I can try it with you. It's really only you who makes me feel this way.</li>
          <li>I want you to know you can rely on me and depend on me whenever you need because I know I do. You're never alone in everything you do, baby. I promise. I'm gonna be with you through everything. You never have to struggle alone.</li>
          <li>I love you, I love you so so much. So, when I see you sad or struggling or stressing, I get worried and I know this feeling is reciprocated. Just another way to say everything will be okay my sweetheart.</li>
          <li>The love I feel for you. I really admire all of you, like ALL of you. Things you do, when your mustache grows out a bit, when ur bald, and the way I feel that love is so beautiful. Just looking at you makes my stomach flutter. I'll always have a crush on you.</li>
          <li>Hmmm, I did not know I had this many songs talking about how I'm gonna be with you all the DAMN time. That's just how possessive I am and I know how lucky I am to have you. I'm gonna protect what we have and put in all the efforts needed to make us work and I'll be happy doing it at every step of the way.</li>
          <li>You're my pillar. You keep me standing. You make me keep going day-to-day. You're always there for me and you always take my side. I love that about you. I know you won't embarrass me in front of people. I love coming back home to you every night. I look forward to it so much.</li>
          <li>Huh, another possessive-ish song. Yes, I am crazy in love with you. I'll do anything to protect your peace. I know I act a little crazy sometimes as in erm unreasonable, but I promise it's only because I love you so much. Anyone I don't care about wouldn't get that kinda time of the day from me.</li>
          <li>Ignore the girl parts. This is one of my favorite songs ever. I'm just reinforcing that your jealousy is never a problem because you're my priority. It's your feelings before anyone else. Honestly, it's just a really pretty song. I just want it to be us in the world alone, that's it.</li>
          <li>You're sexy. Yeup, I said it. You're a stud. You can quite literally get it. You're everything I imagined you to be when I thought of a bf. Sexiest boyfriend.</li>
          <li>Because you're so sexy, I want to match that energy. I wanna be a 10/10 for you, in terms of manners, habits, perspective, and looks. After all our tiny "arguments", I know we have a happy ending waiting for us. We'll be fine baby</li>
          <li>The time we spend together in the future, when it's just us two, I want time to fly by so slowly and for us to love as long as possible. Loving you is a great distraction from the problems. You make me happy.</li>
          <li>It's in Japanese, but idea is. No matter what happens, no matter how far you are from me, all I will do is love you. That's what I got from it. I don't know the rest, but I love the song. It's pretty and very soothing.</li>
          <li>Mhm, we were meant for each other. Yes, we are connected. There's no one else for me and there better not be anyone else for you. I've never loved this hard and never cared this much. I've never been so certain about my feelings for someone. You're the one for me.</li>
          <li>Lyrics. Literally the lyrics. That's it.</li>
          <li>These lyrics aren't exactly what I want, but all I'm taking from it is "you give me butterflies." Never saying goodbye to you. The sounds of this song makes me... I don't know, but it does good things despite the lyrics. That's how you make me feel. I feel good having you around. I'm so satisfied.</li>
        </ol>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/14KPUkK7CftrsgvDYlEnKh?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Secret;
