import React from 'react'

//count component
function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

export default React.memo(Count)