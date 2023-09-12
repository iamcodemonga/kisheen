'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Could not fetch data</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}