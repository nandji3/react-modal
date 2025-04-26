import { useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import RootLoader from "./components/Loader/RootLoader";
import Modal from "./components/Modal/Modal";
import { useModal } from "./components/Modal/useModal";
import { Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";



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
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <button
          onClick={openModal}
          className="bg-teal-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Show Modal
        </button>

        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold mb-2 text-center text-red-400 uppercase">Reusable Modal</h2>
          <b className="mb-4 capitalize !text-center block">This modal can be used anywhere with custom content.</b>
          <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates vero consectetur necessitatibus mollitia, modi culpa totam a numquam, non laudantium, exercitationem tenetur quasi. Necessitatibus qui illum quas nam nostrum?
            Cupiditate sit, quasi harum quod ad veritatis autem beatae a velit explicabo eligendi ut culpa minima nemo, nihil corrupti saepe dolores dolor, placeat nesciunt aperiam. Aspernatur, rem quae. Vitae, nesciunt.</p>
          <button
            onClick={closeModal}
            className="bg-red-400 text-white px-3 py-[0.1rem] text-[0.8rem] rounded cursor-pointer mx-auto block font-medium uppercase tracking-wide"
          >
            Close
          </button>
        </Modal>
      </div>
      <Counter />

      <RootLoader isLoading={loading} />
    </>
  );
}

export default App;
