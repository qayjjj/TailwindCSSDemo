import logo from './logo.svg'
import './App.css'

function App() {
  return (
    // Change position to middle
    <div className="App h-screen grid place-items-center">
      {/* Add rounded corner, padding */}
      <div className="w-1/2 bg-white rounded-lg p-6">
        {/* Make avatar circle, change position to middle */}
        <img className="h-16 w-16 rounded-full mx-auto" src="cat.png" />
        {/* Add spacing between avatar and info */}
        <div className="text-center mt-4">
          {/* Bold name */}
          <h2 className="text-lg font-bold">Googoo Gaga</h2>
          <div className="text-purple-500">Professional Milk Drinker</div>
          <div className="text-gray-600">googoogaga@milkies.com</div>
          <div className="text-sm text-gray-600">(123) 123-1234</div>
        </div>
      </div>
    </div>
  )
}

export default App
