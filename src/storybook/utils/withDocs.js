import React from 'react'
import { withDocs } from 'storybook-readme'

export default withDocs({
	PreviewComponent: ({ children }) => (
		<div
			style={{
				marginTop: '2rem',
				marginBottom: '2rem'
			}}>
			{children}
		</div>
	),
	FooterComponent: ({ children }) => <div>{children}</div>
})