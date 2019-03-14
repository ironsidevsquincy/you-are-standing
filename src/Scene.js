import classNames from 'classnames'
import React, { useState } from 'react'

import './Scene.css';

const Scene = ({ number, text, choices, onSelect }) => {
  const [hasEnded, setHasEnded] = useState(false)
  const classes = classNames('scene', {
    [`scene--ended`]: hasEnded
  })

  return (
    <fieldset className={classes} disabled={hasEnded}>
      <legend>{text}</legend>
      <div className="choices">
        {choices.map((text, choiceNumber) => (
          <label key={choiceNumber}>{text}
            <input
              type="radio"
              name={`scene-${number}-choice`}
              value={choiceNumber}
              onChange={() => {
                setHasEnded(true)
                onSelect(choiceNumber)
              }}
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default Scene
