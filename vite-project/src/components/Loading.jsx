import React from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'
TopBarProgress.config({
    barColors: {
        "0": "blue",
        "0.5": "blue",
        "1.0": "blue"
    },
    shadowBlur: 10
})
const Loading = () => {
  return (
    <TopBarProgress/>
  )
}

export default Loading