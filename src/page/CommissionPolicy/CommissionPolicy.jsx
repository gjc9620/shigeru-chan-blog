import React from 'react';
import HR from '../../component/HR';
import { Link } from 'react-router-dom';

class CommissionPolicy extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // componentDidMount() {}
  render() {
    return (
      <section className='commission-policy'>
        <h2>
          <HR/>
          <span>Commission Policy</span>
        </h2>
        <div>PLEASE READ my TOS carefully before commissioning me. Thank you!</div>
        <div><Link to="DrawFAQ" >please click here to read "What will I draw and won't draw"</Link></div>
        <h2>GENERAL INFO</h2>
        <div>
          <ul>
            <li>You are only purchasing the digital file. Not the printed art and it will not be shipped to your address. The final product will be sent via email with .PNG / .JPG picture format without my watermark.</li>
            <li>At the moment I do anime style only.</li>
            <li>The commission prices listed on the pricing page are all in USD, for NON-NSFW commissions, and for personal use only, and are not meant for commercial use. Please consult me directly for commercial commissions for contracts, pricing, and payment.</li>
            <li>Please contact me via discord Shigeru-chan#2584 or directly contact my email 2546113944@qq.com or with Question Form if you'd like to be added to the waiting list, or to ask me detail about commission for commercial use, or to consult me if you feel unsure if I can draw some certain character(s) for you.</li>
            <li>I have the right to decline the commission offer if I think I can't work on it or beyond my ability or I feel uncomfortable with the theme or my commissioner.</li>
            <li>I won’t accept any commission that won’t go through Commission Form.</li>
            <li>When I am ready to work on your order, I will contact you to acknowledge if the order that you make is correct to avoid other people make an order with using your identity without your consent.</li>
            <li>As an artist, my art is constantly evolving, so there might be slight differences between the samples in my gallery and the illustration you will receive (linearts style, coloring method, composition...)</li>
            <li>I will work as best as I can, but you're the one who have to make sure that whatever you order is suitable with my style so you can avoid any dissatisfaction. Please browse around my gallery on Deviantart or pricing page for samples and please take your time to consider carefully.</li>
            <li>If you don't like my pricing and or my another policy, please don't waste your time to harass me, complain and haggle, instead search another artist to draw for you.</li>
          </ul>
        </div>
        <h2>WORK SPEED</h2>
        <ul>
          <li>Commissions will generally be delivered within one month after the approval of the sketch. I will be in touch with you if for some reasons there will be delays in the commission.</li>
          <li>Ultimately, the time varies depending on how detailed the request is, the amount of other commissions I have at the time, and the amount of redrafting needed. So, sometimes you need to wait for a while until your turn. Please refer to my progress list.</li>
          <li>I am a slow illustrator, so please don't hurry me if you want me to deliver you the best quality artwork.</li>
          <li>First come first serve, or you can add extra fee for first priority / rush order, but I have the right to refuse it if I am really busy in real life at that moment and can’t meet your deadline.</li>
        </ul>
        <h2>COPYRIGHT / USAGE POLICY</h2>
        <ul>
          <li>Commissioner cannot post the fullsize drawing publicly, I will send you the downsized version with my watermark to sharing around.</li>
          <li>Layered files and PSDs are included for copyright commissions only</li>
          <li>if the commissioner order for personal use, they have the rights to repost the commissioned art to other site (with credit to my page), use it as decoration for your social media, and printing / merchandising it as long as you're not selling them, resell the artwork itself, claim to have made it, making any profit with it.</li>
          <li>I retain the rights to the commissioned artworks and by commissioning me, you are allowing me to use and feature the commissioned work on my portfolio/ social medias/ future artbooks/ reward on patreon.</li>
          <li>If you wish for your commission to not be uploaded anywhere on the internet I'll charge you an extra fee. If by any case you wish to "un-private" that commission in the future, you just have to send me a message, however there will be no refunds for the extra private fee CHANGES / REVISION</li>
        </ul>
        <h2>CHANGES / REVISION</h2>
        <ul>
          <li>Progress of the commissions will be available to view in the Progress page. You may ask for a WIP preview anytime while I'm working on yours. You will get a downsized, watermarked version of the image for preview.</li>
          <li>Major changes (such as posing, whole outfits, etc.) after the rough sketch has been approved will be subject to extra charges. Feel free to ask some changes on rough sketch stage and please take your time to confirm all revisions BEFORE approving the sketch .</li>
          <li>It is the commissioner's responsibility to provide specific details of the character that should not be missed on the order form.</li>
          <li>I will accept a maximum of 3 minor changes for free (counting start from after you agreeing with my rough sketch). After the 3rd change I have the right to decline any further changes or to charge you an extra fee 5$ USD or more per change (due to difficulty) .</li>
          <li>I will charge extra fees 10$ USD or more per change (due to difficulty) such as an outfit change, outfit addition or subtraction, background change, posing change, or anything that makes me have to redraw parts of the picture that make me do major changes after the sketch has been approved.</li>
          <li>if the fault is on my side because i'm not paid attention for what you explain and you are already provided very clear references already, I make the change without charge you any fee. Instead I'll ask an apology for give you trouble and I'll do a extra free commission (the type is up to me) for you.</li>
        </ul>
        <h2> System for refunds</h2>
        <ul>
          <li>You can only ask for a full refund before I start the rough sketch</li>
          <li>- rough sketch started (60% will be given back) + the image file at the moment progress</li>
          <li>- rough sketch finished (50% will be given back) + the image file at the moment progress</li>
          <li>- lining started (40% will be given back) + the image file at the moment progress</li>
          <li>- lining finished (30% will be given back) + the image file at the moment progress</li>
          <li>- base color started (20% will be given back) + the image file at the moment progress</li>
          <li>- base color finished (10% will be given back) + the image file at the moment progress</li>
          <li>- shading started & commission completed (0% will be given back) + the image file at the moment progress</li>
          <li>I will not accept refunds for finished pieces.</li>
          <li>In the case of I cancel your commission order (due to reasons from my side for not able to complete the commission), you will get a 100% full refund without any progress fee cut that I have done.</li>
        </ul>
        <h2>Extra Pricing info:</h2>
        <ul>
          <li>I reserve the rights of increasing the price than the written base price if you want a high detailed illustration. I have additional price for complicated character(s), extra item(s) and complicated background</li>
          <li>*Simple background* is included in the price of every picture. But it's totally up to you if you want it or not. they are plain color, gradient backgrounds with some textures and/or tiny ornamentations.</li>
          <li>*Detailed character*: for character complicated stuff like : very long hair, very curly hair, braid, complicated ornament on hair, complicated and various skirt and clothing layers, ruffles, lace, some clothing pattern, tattoos, armor, wing, horn, etc. has extra price</li>
          <li>*Extra items*: weapon, broom, chain, small doll, animal, headphone, game controller, food, etc. has extra price</li>
          <li>*Medium or complex difficulty background* (such as scenery, room, landscape) has extra price</li>
        </ul>
        <h2>Other Info</h2>
        <ul>
          <li>Commissioner/Artist may not share each other's very private personal contact details with third parties.</li>
          <li>If you wish to tip me for doing a good job (as I know it is a custom in some countries or you are really satisfied with the result) you can do it via <a href="https://www.buymeacoffee.com/dNSIAQaRe">buymeacoffee 1</a> , <a href="https://ko-fi.com/A117269Z">buymeacoffee 2</a> or paypal. I will deeply appreciate it ♥</li>
          <li>If you file a chargeback against me, your right to everything I have ever made for you will be retracted and I have the right to sell the copyrighted artwork to new buyers. Also note that you will be blocked and you won't be able to purchase anything from me anymore (commissions, adopts...). Your name and info will be publicly posted everywhere for others to watch out.</li>
          <li>By purchasing any of my services (digital art commission), this means you have read and automatically accepting my Terms of Service and being obligated to follow them, as well as promising you won't request any chargeback with any reasons. Also it means you know that what you purchase is a digital art commission service from me with your own consent and willing, and you know and understand what you buy and will receive from me since I provide samples on my page. Also when a client contacts me for work, they agree that my TOS supersedes any TOS that they, the client, might have. You are also willing to wait and not rushing me.</li>
        </ul>
      </section>
    )
  }
}

CommissionPolicy.defaultProps = {

};

export default CommissionPolicy;

