import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";

interface IUser {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: IUser;
  loading: boolean;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): Promise<void>;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      // const [token, user] = await AsyncStorage.multiGet([
      //   "@Barbaard:token",
      //   "@Barbaard:user",
      // ]);

      const user = {
        id: "1",
        name: "Teste",
        email: "",
        avatar_url: "",
      };
      const token = "123";

      // if (token[1] && user[1]) {
      //   api.defaults.headers.authorization = `Bearer ${token[1]}`;
      //   setData({ token: token[1], user: JSON.parse(user[1]) });
      // }

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData({ token: token, user: user });
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      const response = await api.post("sessions", {
        email,
        password,
      });

      const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ["@Barbaard:token", token],
        ["@Barbaard:user", JSON.stringify(user)],
      ]);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    },
    [],
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@Barbaard:token", "@Barbaard:user"]);

    setData({} as IAuthState);
  }, []);

  const updateUser = useCallback(
    async (user: IUser) => {
      await AsyncStorage.setItem("@Barbaard:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
