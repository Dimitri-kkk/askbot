import React from 'react'

interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

const page = ( { params } : PageProps) => {
    console.log(params);
  return (
    <div>page</div>
  )
}

export default page;