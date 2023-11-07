import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Text,
  TouchableOpacity,
} from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";
import { LoginForm } from "../../types/auth";

import Container from "../../components/Container/Container";

import { LoginValidationSchema } from "../../validators/Login.validate";

import logo from "../../assets/logo.webp";
import TextInput from "../../components/Input/TextInput";
import ErrorText from "../../components/common/ErrorText";
import Button from "../../components/common/Button";

interface ISignInFormData {
  email: string;
  password: string;
}

const inputs = [
  {
    name: "user",
    label: "Email",
    placeholder: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
  },
];

const SignIn: React.FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const navigation = useNavigation();

  const { signIn } = useAuth();

  const keyboardDidShow = useCallback((): void => setIsHidden(true), []);
  const keyboardDidHide = useCallback((): void => setIsHidden(false), []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      user: "",
      password: "",
    },
    resolver: yupResolver(LoginValidationSchema()),
    reValidateMode: "onChange",
    mode: "onSubmit",
  });

  const onSubmit = async (payload: LoginForm) => {
    await signIn({
      email: payload.user,
      password: payload.password,
    });
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  });

  return (
    <>
      <KeyboardAvoidingView
        className="flex-1 bg-primary-dark"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Image source={logo} />

            <View className="pt-2">
              <Text className="uppercase font-sologan text-gray-medium font-medium">
                Groom, style & network
              </Text>
            </View>

            <View className="mt-4 flex flex-col w-full px-4">
              {inputs.map((item, index) => {
                if (item.name === "password" || item.name === "user") {
                  return (
                    <View className="pt-5" key={index}>
                      <Controller
                        control={control}
                        name={item.name}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <View className="flex flex-col gap-1">
                            <TextInput
                              inputMode={
                                item.name === "user" ? "email" : "text"
                              }
                              rightIcon={
                                item.name === "password" &&
                                (!hidePassword ? (
                                  <TouchableOpacity
                                    onPress={() =>
                                      setHidePassword(!hidePassword)
                                    }
                                    className=" mt-[2px]"
                                    testID="login_hide_password_btn"></TouchableOpacity>
                                ) : (
                                  <TouchableOpacity
                                    onPress={() =>
                                      setHidePassword(!hidePassword)
                                    }
                                    className=" mt-[2px]"
                                    testID="login_show_password_btn"></TouchableOpacity>
                                ))
                              }
                              secureTextEntry={
                                item.name === "password" && hidePassword
                                  ? true
                                  : false
                              }
                              label={item.label}
                              placeholder={item.placeholder}
                              placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
                              onBlur={onBlur}
                              onChangeText={text => onChange(text)}
                              value={value}
                              testID={`login_${item.type}_input`}
                            />
                          </View>
                        )}
                      />
                      {errors[item.name as keyof LoginForm] && (
                        <ErrorText
                          message={
                            errors[item.name as keyof LoginForm]?.message
                          }
                          testID={`login_${item.type}_error`}
                        />
                      )}
                    </View>
                  );
                } else {
                  return;
                }
              })}
            </View>
            <View className="w-full">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ForgotPasswordScreen");
                }}
                testID="forgotPasswordButton">
                <Text className="my-5 text-center text-h6 leading-6 text-gray-medium">
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <View className="pt-2 px-2">
                <Button
                  containerClassName="bg-primary-light flex-none px-1 "
                  textClassName="line-[30px] text-center text-md font-medium text-white"
                  title={"Login"}
                  onPress={handleSubmit(onSubmit)}
                  testID="login_submit_btn"
                />
              </View>
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
