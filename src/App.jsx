import Header from "./components/Header"

function App() {

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>

      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-200 hover:accent-lime-600"
      />
    </div>
  )
}

export default App
