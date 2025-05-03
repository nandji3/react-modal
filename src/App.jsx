import { useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import RootLoader from "./components/Loader/RootLoader";
import Modal from "./components/Modal/Modal";
import { useModal } from "./components/Modal/useModal";
import { Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import A from "./components/ParentChild/A";
import ReactForm from "./components/Form/ReactForm";



function App() {
  const { isOpen, openModal, closeModal } = useModal();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <A />
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">

        <button
          onClick={openModal}
          className="rounded-md bg-teal-500 px-4 py-2 text-white transition hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 text-[0.85rem] cursor-pointer font-semibold tracking-wider block mx-auto"
        >
          Show Modal
        </button>

        <Modal isOpen={isOpen} onClose={closeModal}>

          {/* <--------- Header Section ------------> */}
          <header className="p-3 gap-[0.1rem] bg-teal-500 text-white flex flex-col justify-between items-center">
            <h2 className="text-[1.2rem] font-bold text-center text-white uppercase ">Reusable Modal</h2>
            <h3 className="text-[1.05rem] !text-center text-white ">This modal can be used anywhere with custom content.</h3>
          </header>

          {/* <--------- Body Section ------------> */}
          <main className="p-3 max-h-[76vh] overflow-y-auto mx-auto block ">
            <ReactForm />
          </main>

          {/* <--------- Footer Section ------------> */}
          <footer className="p-3 bg-teal-500 text-white flex flex-col justify-between items-center ">
            <button
              onClick={closeModal}
              className="bg-teal-600 hover:bg-teal-700 text-white py-1 px-4 rounded text-[0.85rem] cursor-pointer font-semibold tracking-wider block mx-auto"
            >
              Close
            </button>
          </footer>

        </Modal>
      </div>
      <Counter />

      <RootLoader isLoading={loading} />
    </>
  );
}

export default App;
