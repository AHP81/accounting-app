import { useState } from 'react'
import { Button } from '@/ui/button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        {/* <button className='btn btn-primary mt-4 ml-4' onClick={() => setCount((count) => count + 1)}>
          hello world {count}
        </button> */}
        <div>
          <Button variant='success' fullWidth>
          ثبت
        </Button>
        </div>
      </div>
    </>
  )
}

export default App
