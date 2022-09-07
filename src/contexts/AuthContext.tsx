import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IGeneralProps } from "../interfaces/components";
import { IAdress, IAuth, IUser } from "../interfaces/contexts";
import api from "../services/api";

export const AuthContext = createContext<IAuth>({} as IAuth);

const AuthProvider = ({ children }: IGeneralProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const [cep, setCep] = useState<IAdress>({});
  const [cepError, setCepError] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("@portfy(token)");
    localStorage.removeItem("@portfy(id)");
    navigate("/welcome", { replace: true });
  };

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@portfy(token)");
      const idUser = localStorage.getItem("@portfy(id)");
      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const { data } = await api.get(`/users/${idUser}`);
          setUser(data);
          navigate("/dashboard", { replace: true });
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const cepRequest = async (e: React.FocusEvent<HTMLInputElement, Element>) => {
    try {
      const { data } = await axios.get<IAdress>(
        `https://viacep.com.br/ws/${e.target.value}/json/`
      );
      if (data.erro) {
        setCepError(true);
      } else {
        setCep(data);
        setCepError(false);
      }
    } catch (error) {
      setCepError(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        cep,
        cepError,
        setUser,
        logout,
        cepRequest,
        posts,
        setPosts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
