import { HeroForm, HeroTitle } from "./components";

// Maquetado por Pedro Diaz Guarniz

function App() {
  return (
    <div className="w-[600px] max-h-full rounded grid grid-cols-1 grid-rows-layout-1 border">
      <div className="w-full border-b">
        <HeroTitle />
      </div>
      <div className="w-full mb-6">
        <HeroForm />
      </div>
      <div className="w-full border-t h-full flex flex-row justify-end items-center">
        <button className="w-32 h-9 rounded-md bg-gray-300 text-gray-600 font-semibold mr-4 text-sm">
          Cancel
        </button>
        <button className="w-32 h-9 rounded-md bg-green-700 text-white font-semibold mr-4 text-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default App;
