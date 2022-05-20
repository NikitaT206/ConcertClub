import aboutBandStyles from './AboutBand.module.css'

export default function AboutBand() {
  return (
    <div className={aboutBandStyles.container}>
      <h3 className={aboutBandStyles.title}>О группе</h3>
      <p className={aboutBandStyles.text}>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</p>
    </div>
  )
}