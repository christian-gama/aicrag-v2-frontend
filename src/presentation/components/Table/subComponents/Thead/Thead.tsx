import React from 'react'

const Thead: React.FC = (props) => {
  return <thead data-testid="table-thead">{props.children}</thead>
}

export default Thead
