// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
export default story => (
	<div style={{ padding: '2rem', maxWidth: '900px' }}>
		{story()}
	</div>
)