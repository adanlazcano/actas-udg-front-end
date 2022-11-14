import { useContext } from "react";
import MainContext from "../context/MainContext";

// Open Modal when you click on an icon
const Icon = ({ title, nameClass, item }) => {
  const { setStatusModal, setTitleModal, setStudent } = useContext(MainContext);

  const openModal = (_) => {
    setStatusModal(true);
    setStudent(item);
    setTitleModal(title);
  };

  return (
    <i title={title} onClick={openModal} className={`bx ${nameClass}`}></i>
  );
};

export default Icon;
