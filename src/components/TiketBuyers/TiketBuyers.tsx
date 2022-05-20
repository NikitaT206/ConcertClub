import TiketBuyer from '../TiketBuyer/TiketBuyer'
import tiketBuyersStyles from './TiketBuyers.module.css'

const arr = [...new Array(5).fill(0)]

export default function TiketBuyers() {
  return (
    <div className={tiketBuyersStyles.container}>

      <div className={tiketBuyersStyles.flexContainer}>
        <h3 className={tiketBuyersStyles.title}>Купили билеты</h3>

        <div className={tiketBuyersStyles.ammountContainer}>
          <span className={tiketBuyersStyles.ammountBlack}>932/ </span>
          <span className={tiketBuyersStyles.totalAmmount}>1000</span>
        </div>
      </div>

      <ul className={tiketBuyersStyles.list}>
        {arr.map((item, index) => {
          return <TiketBuyer key={index}/>
        })}
      </ul>

    </div>
  )
}