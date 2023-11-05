// import { createContext, useState } from "react";

// interface IContext {
//   modal: boolean;
//   changeModal: () => void;
// }

// export const GlobalContext = createContext<IContext>({
//   modal: false,
//   changeModal: () => {},
// });

// export const GlobalProvider = (props: React.PropsWithChildren<{}>) => {
//   const [modal, setModal] = useState(false);

//   const changeModal = () => {
//     setModal(!modal);
//   };

//   return (
//     <GlobalContext.Provider value={{ modal, changeModal }}>
//       {props.children}
//     </GlobalContext.Provider>
//   );
// };
