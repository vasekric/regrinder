/* @flow */
import React, {PropTypes} from 'react'
import Helmet from 'react-helmet'
import classes from './Counter.scss'
import {Card, CardText, CardTitle} from 'material-ui/Card'

// FlowType annotations
type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function,
  fetchHtml: Function,
  html: string
}

const Counter = (props:Props) => (
  <div>
    <Helmet title='Counter' />
    <Card className={classes.cardContainer}>
      <CardTitle title='Counter' />
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

export default Counter
