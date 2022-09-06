import CardUser from "../../components/CardUser";
import { Header } from "../../components/Header";
import { MdAdd } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { BsFilePdf } from "react-icons/bs";
import { CardsNews } from "../../components/CardsNews";
import { Container } from "./style";
import { Post } from "../../components/Post";
import { Modal } from "../../components/Modal";
import Form from "../../components/Formulary/styles";
import { useContext } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";

export const Dashboard = () => {
  const { condicionModal, setCondicionlModal } = useContext(SwitchContext);

  return (
    <>
      <Header />
      <Container>
        <div className="main">
          <CardUser
            iconMore={<MdAdd />}
            iconPencil={<HiPencil />}
            iconPaper={<BsFilePdf />}
          />
          <Post />
        </div>
        <section>
          <CardsNews/>
        </section>
        {condicionModal && (
          <Modal>
            <button>X</button>
            <Form>
              <div className="divHeader">
                <h2>Atualizar Perfil</h2>
              </div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" />
            </Form>
          </Modal>
        )}
        {condicionModal && (
          <Modal>
            <Form>
              <div className="divHeader">
                <h2>Adicionar tecnologia</h2>
                <button
                  type={"button"}
                  onClick={() => setCondicionlModal(!condicionModal)}
                >
                  X
                </button>
              </div>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" />
            </Form>
          </Modal>
        )}
      </Container>
    </>
  );
};
