import Modal from "./components/Modal/Modal";
import { useModal } from "./components/Modal/useModal";

function App() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
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
            Cupiditate sit, quasi harum quod ad veritatis autem beatae a velit explicabo eligendi ut culpa minima nemo, nihil corrupti saepe dolores dolor, placeat nesciunt aperiam. Aspernatur, rem quae. Vitae, nesciunt.
            Ab laborum necessitatibus officia. Autem incidunt, itaque laborum saepe unde inventore provident perspiciatis fuga est temporibus. Voluptate at fugit exercitationem corporis tempora deserunt. Fuga modi similique tempore et, eaque in.
            Dignissimos provident expedita, quaerat labore soluta necessitatibus vel autem et amet molestiae maiores! Maxime eveniet cumque nostrum est ullam nemo, distinctio libero? Sed reprehenderit mollitia unde quia, doloribus perferendis tempore!
            Nulla quae maiores molestiae iste itaque est ab illum. Veniam perspiciatis odio maiores, rem modi corrupti, consequatur corporis architecto officia velit quas. Error nobis magnam maxime sunt odio nihil qui?
            Quod consequatur soluta ut! Voluptates, dolor. Sed officiis corrupti, iste adipisci veniam dolores ratione ea labore sequi sit non laboriosam obcaecati, suscipit voluptates mollitia harum perspiciatis quos praesentium at! Hic!
            Ex provident, quidem magnam quod ad, possimus iste dolore, eaque cumque assumenda ipsum dolorum quisquam! Perferendis beatae maiores sequi cum obcaecati, nisi, odio assumenda atque dignissimos blanditiis necessitatibus illum dicta?
            Suscipit, esse praesentium atque id facilis ad quam recusandae cupiditate, earum velit quo, tempore aliquid autem dolorem inventore. Velit debitis blanditiis harum, hic omnis doloremque voluptatem perspiciatis optio laudantium odit.
            Eligendi consequatur numquam dolorem fugit ipsa amet mollitia, similique magnam inventore explicabo voluptate hic. Ex explicabo voluptate quas. Laboriosam explicabo consectetur cumque atque, qui cupiditate a totam sunt eum corporis?
            Ducimus blanditiis voluptatem, ad assumenda dignissimos, voluptatum, fuga corrupti officia praesentium iste perferendis quam commodi totam. Deserunt blanditiis ullam unde quaerat. Placeat ipsum architecto obcaecati reiciendis ab, eos sequi rerum.
            Sint iste repellendus, numquam facilis rerum ipsum libero. Libero repellat blanditiis maiores culpa animi accusamus quisquam, molestiae officiis facilis tempora sequi velit perferendis, voluptas illum amet quas? Blanditiis, cum sunt?
            Aliquid cum fugit velit repellendus. Recusandae libero eum natus dolores, vero veritatis nam placeat deserunt doloribus veniam, expedita perspiciatis in voluptatibus commodi consectetur vitae deleniti accusamus quae provident, tempora fugit.
            Blanditiis cum, debitis molestiae corporis numquam quibusdam facilis repellat dolorem facere pariatur nisi exercitationem, suscipit obcaecati ea veritatis ducimus eaque voluptatum? Deserunt rerum impedit voluptatum suscipit dolore consequuntur ratione tempore!
            Corrupti in nemo ab sed adipisci optio necessitatibus reprehenderit tempora repudiandae ipsum, quo ea inventore maiores repellendus saepe expedita omnis veniam asperiores dolorum error dolores, commodi ex. Qui, voluptatibus consectetur.
            Veniam quibusdam excepturi accusantium atque a libero commodi dicta ullam doloremque voluptatibus asperiores, possimus amet veritatis dolores culpa dolorem ut voluptas hic laudantium eligendi non eius aperiam. Ipsum, error numquam.</p>
          <button
            onClick={closeModal}
            className="bg-red-400 text-white px-3 py-[0.1rem] text-[0.8rem] rounded cursor-pointer mx-auto block font-medium uppercase tracking-wide"
          >
            Close
          </button>
        </Modal>
      </div>
    </>
  );
}

export default App;
