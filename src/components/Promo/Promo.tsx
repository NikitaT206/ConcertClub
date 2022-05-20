import promoStyles from './Promo.module.css'
import mainImage from '../../images/main.png'
import SliderArrow from '../SliderArrow/SliderArrow'

export default function Promo() {
  return (
    <section className={promoStyles.promo}>
      <img className={promoStyles.image} src={mainImage} alt='band'/>

      <div className={promoStyles.textContainer}>
        <h2 className={promoStyles.title}>Twenty One Pilots</h2>
        <span className={promoStyles.date}>22.02.23 в 21:00</span>
      </div>

      <div className={promoStyles.slider}>
        <button className={promoStyles.sliderButtonLeft}>
          <SliderArrow/>
        </button>
        <button className={promoStyles.button}>Купить билет</button>
        <button className={promoStyles.sliderButtonRight}>
          <SliderArrow/>
        </button>
      </div>

      <div className={promoStyles.gradient}></div>

    </section>
  )
  
}