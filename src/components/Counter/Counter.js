/* @flow */
import React, {PropTypes} from 'react'
import Helmet from 'react-helmet'
import classes from './Counter.scss'
import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'
import CardTitle from 'material-ui/lib/card/card-title'

// FlowType annotations
type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function,
  fetchHtml: Function,
  html: string
}
const date = new Date()

const Counter = (props:Props) => (
  <div>
    <Helmet title='Counter' />
    <Card className={classes.cardContainer}>
      <CardTitle title='Counter' style={{background: getSeasonColor(date)}} />
      <CardText>
        <h2 className={classes.counterContainer}>
          Count:
          {' '}
          <span className={classes['counter--green']}>
            {props.counter}
          </span>
        </h2>
        <button className='btn btn-default' onClick={props.increment}>
          Increment
        </button>
          {' '}
        <button className='btn btn-default' onClick={props.doubleAsync}>
          Double (Async)
        </button>
        <button className='btn btn-default' onClick={props.fetchHtml}>
          fetchHtml
        </button>
        <br />
        <code>
          {props.html}
        </code>
      </CardText>
    </Card>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  html: PropTypes.string.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  fetchHtml: PropTypes.func.isRequired
}

//Well, I should rewrite that completely + it should me action
const getSeasonColor = (date:Date) => {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date - start
  const oneDay = 1000 * 60 * 60 * 24
  const dayNumber = Math.floor(diff / oneDay)
  const maxDays = 365
  const springStarts = 60
  const seasonLast = 90
  let num = dayNumber - springStarts
  if (num < 0)
    num = maxDays + num
  const colors = [
    {r: 139, g: 170, b: 67}, // spring
    {r: 28, g: 82, b: 69},   // summer
    {r: 232, g: 156, b: 60}, // fall
    {r: 154, g: 153, b: 151} // winter
  ]
  const res = num / seasonLast
  const color = colors[Math.floor(res) % 4]
  return rgb2hex(color.r, color.g, color.b)
}

const rgb2hex = (red, green, blue) => {
  const rgb = blue | (green << 8) | (red << 16)
  return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

export default Counter
