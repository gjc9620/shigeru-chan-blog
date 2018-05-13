import React from 'react';
import HR from '../../component/HR';

class DrawFAQ extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // componentDidMount() {}
  render() {
    return (
      <section className='draw-faq'>
        <h2>
          <HR/>
          <span>I can draw</span>
        </h2>
        <ul>
          <li>Anime style</li>
          <li>fanart from anime or game or kemonomimi (human with tail or animal ear) or your OC or real people in anime style</li>
          <li>Female character (chibi, loli, teen)</li>
          <li>chibi characters girl and boy</li>
          <li>soft ecchi / sexy theme (soft yuri, bikini, swimsuit, underwear, censored)</li>
          <li>normal characters mixed with chibi character</li>
          <li>icons, twitch emotes</li>
          <li>coloring your lineart</li>
          <li>character sheet / character reference sheet</li>
          <li>one character with some alternative clothes, different expressions</li>
          <li>Dakimakura</li>
          <li>Some fetish (you can consult with me first if feel unsure) except fetish harassing and upset other people</li>
        </ul>
        <h2>
          <HR/>
          <span>At the moment I can't drawing:</span>
        </h2>
        <ul>
          <li>male character</li>
          <li>complicated pose</li>
          <li>Adult content</li>
          <li>old people</li>
          <li>realism / semi realism</li>
          <li>very complex BG</li>
          <li>Mecha / robot, skeleton, monster, animal / furry</li>
        </ul>
        <h2>
          <HR/>
          <span>I completely refuse to draw</span>
        </h2>
        <ul>
          <li>Too bloody scenes & gore</li>
          <li>violence to woman and disturbing content</li>
          <li>racism and art that has meaning to mock certain religion</li>
          <li>Other people OC in bad way like for harassing and bully them</li>
        </ul>
      </section>
    )
  }
}

DrawFAQ.defaultProps = {

};

export default DrawFAQ;

