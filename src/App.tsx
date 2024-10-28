import './App.css'
import { Button } from './components/ui/button'
import { RainbowButton } from './components/ui/rainbow-button'

function App() {

  return (
    <>
      <div className='h-screen flex justify-center gap-10 items-center'>
      <Button>Click me</Button>
      <RainbowButton>Hello</RainbowButton>
      </div>
    </>
  )
}

export default App
