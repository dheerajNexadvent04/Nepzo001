import { Navbar } from './components/Navbar'
import { NepzoPage } from './NepzoProgramPage'
import { NepzoFooter } from './components/Footer'
import { UnifiedPopupModal } from './components/UnifiedPopupModal'

function App() {
  return (
    <>
      <Navbar />
      <NepzoPage />
      <NepzoFooter />
      <UnifiedPopupModal />
    </>
  )
}

export default App
