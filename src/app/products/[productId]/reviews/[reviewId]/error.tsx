'use client'
export default function ErrorBoundary({error,reset}:{error:Error; reset:()=>void}) {
  return (
    <>
    <div>Error in reviewId {error.message}</div>
    <button onClick={()=>{reset}}>Try Again</button>
    </>
  )
}
