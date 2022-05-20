import aboutConcertHallStyles from './AboutConcertHall.module.css'

export default function AboutConcertHall() {
  return (
    <div className={aboutConcertHallStyles.container}>
      <h3 className={aboutConcertHallStyles.title}>О площадке</h3>
      <div className={aboutConcertHallStyles.textContainer}>
        <p className={aboutConcertHallStyles.titleText}>Современная площадка для проведения концертов и&nbsp;других мероприятий любой сложности.</p>
        <p className={aboutConcertHallStyles.text}>Мы&nbsp;предоставляем всю необходимую для организаторов инфраструктуру и&nbsp;готовые решения под все основные задачи любого события, а&nbsp;также современное оборудование, соответствующее самым высоким мировым стандартам.</p>
      </div>
    </div>
  )
}