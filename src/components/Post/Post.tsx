import postStyles from './Post.module.css'

export default function Post() {
  return (
    <li className={postStyles.container}>
      <div className={postStyles.flexContainer}>
        <h4 className={postStyles.title}>Twenty One Pilots</h4>
        <span className={postStyles.date}>12.01.22</span>
      </div>
      <p className={postStyles.text}>Просто шикарный альбом, Пилоты после Blurryface решили не идти проторенной дорожкой, и сделали что то новое. На мой взгляд у них на 100% получилось, альбом слушается на одном дыхании, каждая песня чем то запоминается, естественно нужно понимать тексты, чтобы вникнуть до конца во весь сюжет и атмосферу альбома.... </p>
    </li>
  )
}