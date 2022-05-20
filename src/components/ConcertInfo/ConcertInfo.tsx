import AboutBand from '../AboutBand/AboutBand'
import AboutConcertHall from '../AboutConcertHall/AboutConcertHall'
import ApplicationForm from '../ApplicationForm/ApplicationForm'
import TiketBuyers from '../TiketBuyers/TiketBuyers'
import concertInfoStyles from './ConcertInfo.module.css'

export default function ConcertInfo() {
  return (
    <section className={concertInfoStyles.section}>
      <TiketBuyers/>
      <div className={concertInfoStyles.flexContainer}>
        <AboutConcertHall/>
        <ApplicationForm/>
      </div>
      <AboutBand/>
    </section>
  )
}