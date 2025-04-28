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
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repudiandae dignissimos mollitia odio numquam praesentium facilis minima quo fugit pariatur sunt vero nobis tempora consequatur consectetur iusto at enim earum!
              Quos ut in rerum eveniet deleniti hic, voluptate, sequi cum dolorem ullam quia, amet perferendis qui ducimus quidem et reiciendis repudiandae optio. Vitae libero temporibus deleniti quas et at quod?
              Possimus rem eligendi doloremque voluptatibus autem quasi incidunt qui vitae vero odio id temporibus maxime quis, quos consequatur voluptate ullam odit deleniti earum saepe nihil, cupiditate tenetur? Qui, excepturi fugit!
              Consequuntur vero, expedita officiis sequi repellat maxime voluptas at vel repudiandae laborum voluptatem asperiores eius veritatis alias laboriosam consequatur fugit quo soluta. Corporis eius iste nam impedit doloribus optio harum!
              Soluta eveniet, perspiciatis illum voluptate vel incidunt impedit quis aliquid provident praesentium reiciendis ratione ut beatae sed, nulla reprehenderit sit error animi voluptatum laborum autem, quibusdam saepe consectetur. Aliquam, minus!
              Provident mollitia quam ex voluptate culpa. Odit in distinctio amet voluptatum nobis fuga laudantium accusamus sit ipsum corporis eaque quas repellat cumque vel mollitia, doloremque aut nostrum, atque quaerat nesciunt.
              Pariatur, tempore aliquam rerum nobis facilis doloremque! Nostrum cumque veritatis culpa! Veritatis explicabo saepe placeat consequatur aut aliquid, ipsa, aliquam commodi doloribus perspiciatis incidunt ullam voluptatem quisquam quaerat repudiandae iste.
              Eos ab sunt voluptatem commodi facere inventore unde quam corrupti saepe. Beatae unde aliquam ut expedita quas cumque mollitia placeat illum? Natus harum, aliquam expedita mollitia voluptatibus assumenda ipsa praesentium?
              Neque odit tenetur ratione omnis eaque minus ea quibusdam quo eveniet! Dolores, maiores deleniti nemo veritatis laboriosam, autem hic inventore at ab illo id aperiam quia reiciendis explicabo. Dolorum, laudantium?
              Dicta, ducimus odit. Maiores expedita eos ratione inventore ea numquam aliquam suscipit culpa beatae eius cumque harum, modi voluptates! Pariatur odio ut totam eveniet deserunt doloribus quis commodi modi fugiat.
              Odio saepe veritatis facilis necessitatibus rerum, sapiente provident voluptates labore molestias aliquam nostrum impedit nisi quia enim neque, cum quibusdam quo quam aspernatur! Nemo totam ipsam quod. Assumenda, asperiores voluptatibus.
              Deserunt quis incidunt impedit ad optio autem repellendus itaque assumenda consequatur ratione, qui nostrum totam, ipsa laborum veniam nemo ipsum? Dolorem libero eaque nesciunt vitae voluptatibus consequatur odio at ratione.
              Ipsa, neque similique rerum dolore corrupti, error laudantium reprehenderit placeat illo blanditiis debitis earum quod ipsum dolorum dolores minus cupiditate amet sint illum facilis esse alias! Cumque dicta consequuntur at.
              Culpa quidem molestias aliquam mollitia sapiente nesciunt eius accusamus natus, illo rem, ipsam ullam impedit odit aperiam excepturi temporibus eveniet debitis totam iure at quaerat dolorem laudantium in. Similique, soluta!
              Deleniti vel aliquid totam quibusdam nisi eveniet? Asperiores iure, hic quam omnis laboriosam, temporibus saepe qui delectus voluptatem repudiandae veniam. Eos, repellat! Eum expedita consequatur ex. Quae neque labore in?
              Repellendus, optio harum. Ratione nisi iure dolorum quam molestiae asperiores illo necessitatibus obcaecati porro sint natus sequi soluta maxime sed nihil esse alias reprehenderit distinctio, doloribus, accusantium repudiandae veniam. Explicabo.
              Porro ipsam tempore beatae magnam obcaecati impedit itaque accusamus explicabo quas, aliquid, dolore voluptas libero saepe similique aliquam vitae in? Cumque facilis numquam adipisci velit sit unde modi animi rerum!
              Dolore, aspernatur expedita! Magni quo saepe nihil modi excepturi laboriosam, quidem accusamus quis recusandae, nobis ipsa distinctio optio earum atque eligendi placeat qui nemo rerum. Quisquam iure soluta sed! Officiis!
              Ullam ratione est quia veritatis sequi? Aliquam debitis placeat cupiditate, odit iure iste quibusdam necessitatibus quam? Iste adipisci in debitis, dignissimos, quo reprehenderit consequuntur recusandae officia quia nemo asperiores hic?
              Minima beatae omnis cum laudantium reiciendis odit quis officia distinctio ratione, quisquam saepe veritatis dolor corporis corrupti id voluptas animi ut quasi accusamus cupiditate. Aspernatur dignissimos aliquid rem animi dolore!
              Repellat dolorum suscipit aspernatur, neque commodi voluptas hic rerum aperiam quidem placeat. Est veniam repellendus, laborum saepe quasi, dolor tenetur quam nostrum vitae ab suscipit consequuntur! Placeat et esse odio?
              Quaerat, deserunt alias. Possimus temporibus, perferendis placeat saepe dignissimos fugit dolores expedita a. Fugit commodi necessitatibus iure nobis enim, reprehenderit qui inventore libero, perspiciatis facere, adipisci quia quidem sit odio!
              Earum totam perspiciatis distinctio illo minima dolor praesentium adipisci, necessitatibus quia aperiam eius voluptas unde ad aspernatur natus dolore fugit quo fuga at cumque excepturi, enim incidunt? Officiis, exercitationem neque!
              Debitis, laudantium? Voluptatum at voluptas molestias aut repellendus porro qui dicta delectus rerum accusantium vero placeat voluptatem, quidem consectetur mollitia sapiente nemo optio maiores ratione suscipit minus? Doloremque, magni animi?
              Unde magnam nemo hic. Illum magnam necessitatibus sit fugiat, eum, porro consequatur accusantium culpa dicta nobis vitae non suscipit deleniti ullam libero magni, reiciendis iste cupiditate? Iure possimus placeat optio.
              Quibusdam, hic! Tempora, minima distinctio. Repellendus distinctio reiciendis vitae ad beatae quisquam hic fuga molestias voluptatibus doloribus corrupti, sit magnam adipisci officiis, facere alias labore porro corporis a saepe asperiores.
              Libero, expedita! Commodi nulla repudiandae, rem obcaecati modi alias pariatur, architecto voluptates iste earum cupiditate quo neque quis repellat sapiente vitae quasi laboriosam temporibus dignissimos consequatur necessitatibus? Ipsam, commodi veritatis?
              Rem rerum ad, aliquid optio quibusdam libero illum, qui dignissimos veniam nam minus placeat ut quidem ullam officia natus, doloribus odit nostrum quos soluta perspiciatis eaque recusandae vitae vero. Ullam!
              Delectus, atque asperiores? Quaerat doloribus modi minus animi? Officia, nam reiciendis architecto ipsa necessitatibus, fugit aperiam a eos tempore omnis et, enim quo iure eius quidem commodi doloribus ipsum atque?
              Molestiae, animi recusandae! Possimus libero, accusamus saepe officiis provident architecto maiores quod quos totam nisi mollitia numquam eius quaerat ex perferendis? Ea dolores, excepturi sit expedita earum sapiente aperiam ad.
              Perspiciatis maxime asperiores eligendi, corporis natus soluta a eaque animi excepturi culpa possimus optio temporibus laboriosam nobis dolorem quidem voluptates in ratione quod labore iure, rerum suscipit. Voluptate, iure exercitationem?
              Velit, harum! Iusto, impedit laboriosam? Ratione, sed obcaecati quos consectetur pariatur, inventore natus reprehenderit, asperiores atque exercitationem blanditiis illo reiciendis? Cum cumque perferendis optio voluptas omnis accusamus, animi commodi voluptatem.
              Voluptatibus aut labore officia quas earum deleniti obcaecati tempore quaerat, qui exercitationem, atque tempora voluptates est provident, totam nam laudantium. Magni ab tenetur perferendis reiciendis? Non possimus obcaecati aliquam dolorem?
              Sapiente, beatae harum soluta eaque nisi perspiciatis blanditiis molestiae sed? Deleniti nulla fuga nesciunt a quam, deserunt corrupti quasi labore ullam in totam aliquid ipsum. Minima nulla esse ex deserunt.
              Perferendis tempora tenetur iure, dolorem aliquam ratione voluptates qui, aut reiciendis quas commodi vero voluptas aspernatur itaque quod sequi suscipit expedita laudantium facilis ipsam nulla sit quos cum ab? Laudantium?
              Beatae magni reprehenderit culpa voluptatibus ullam ratione cumque, facilis omnis nam deleniti autem ab accusamus assumenda totam ex dicta. Omnis cum numquam eos recusandae assumenda possimus nobis deserunt dolorum esse?
              Enim nisi porro eos, officiis omnis voluptas molestiae sed fugit totam! Iure, voluptatibus odio incidunt consequatur eligendi ipsam eum minus, expedita doloremque odit architecto reprehenderit sint? Iure ea ad quos.
              At maiores error veritatis laboriosam voluptas, odit quos sed placeat reiciendis facere inventore asperiores quibusdam repellendus nam laborum distinctio perspiciatis et nemo! Unde soluta vel aperiam quaerat animi, sequi autem.
              Officia cum dolor repellat suscipit perferendis voluptas enim officiis, cumque ex dolorum velit hic repellendus commodi! Sunt fugit debitis similique tempora veritatis, amet error earum quisquam id voluptatum laborum natus!
              Nulla, vero architecto accusamus incidunt minima dolore consequuntur ut voluptatum. Voluptatem quaerat numquam vitae? Quaerat, vel culpa! Eius iste qui facilis, nesciunt eum aspernatur explicabo aliquam delectus, odit, nemo natus.
              Ad quas architecto, aliquid impedit tempore ipsum sunt. Iste quas aut assumenda ab sint saepe ipsum nesciunt illum incidunt consectetur fugiat nemo maxime illo, dicta vel accusantium facere eligendi qui?
              Temporibus asperiores recusandae provident harum consectetur reiciendis odio dicta molestias esse nulla eos, perspiciatis cupiditate. Quisquam amet, iure vero optio quia eum illum, placeat itaque pariatur accusantium iste asperiores dolorum!
              Fuga dolores earum, eius quod natus placeat odit perspiciatis dolor dignissimos suscipit porro commodi totam ea cupiditate saepe tempore ipsam et fugiat. Sit alias itaque unde placeat ducimus culpa quidem?
              Porro repellendus, velit pariatur adipisci dolorem recusandae quaerat libero animi similique tempora, nemo esse amet, quasi consequatur rerum minima neque tenetur minus perspiciatis voluptates officia quis fuga doloremque odio. Libero!
              Recusandae eaque aut sit consequatur, modi est quas provident excepturi eligendi tempora expedita eos beatae eum nisi natus libero dolorum at quod cupiditate perferendis nemo vel? Tenetur possimus praesentium reiciendis?
              Maiores tenetur quam eum libero, reprehenderit, cum corporis dolorum ipsum delectus quo minima tempora harum perferendis ratione? Ab inventore, provident et veritatis fuga voluptas ea, fugiat sit sequi ad tempore.
              Reiciendis totam adipisci, doloremque, dicta perferendis inventore fuga molestias libero aut cupiditate ea, consequatur expedita dolore quam dolorum dolorem sint amet. Rem similique distinctio at? Dolor quod quibusdam accusamus esse.
              Illo numquam id obcaecati sapiente quia? Vel officia ratione ut soluta doloremque amet impedit eius quasi incidunt sapiente omnis porro provident cum veniam illo dicta ea, blanditiis architecto non repellendus!
              Doloremque aperiam sequi dolore aut quaerat, cupiditate quod nihil nisi mollitia tenetur blanditiis eligendi alias inventore quis cum illum quam? Aliquid est neque assumenda saepe minima cumque pariatur provident dolores?
              Asperiores iusto optio odio magni? Alias ex unde est? Saepe illo natus ex? Deserunt in magnam dolorem provident possimus! Minus quaerat atque voluptates facilis vel architecto. Quasi non alias assumenda.</p>
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
