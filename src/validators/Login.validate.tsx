import * as yup from "yup";

export const LoginValidationSchema = () => {
  return yup.object().shape({
    user: yup
      .string()
      .email("Email invalid")
      .required("Email required")
      .notOneOf([""], "Email required"),

    password: yup
      .string()

      .required("Password required" as string)
      .notOneOf([""], "Password required" as string)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Please enter a valid password with at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number.",
      ),
  });
};
