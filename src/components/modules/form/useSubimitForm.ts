import { FormikHelpers } from "formik";
import { ValuesFormik } from ".";
import apiClient from "../../../common/apiClient";
import useToken from "../../../hooks/useToken";
import { useUsersContext } from "../../../hooks/useUsersContext";

type SubmitResponse = {
  success: boolean;
  user_id: string;
  message: string;
};

const useSubimitForm = () => {
  const { onUserRegistered } = useUsersContext();

  const { tokenState, deleteToken } = useToken();

  const onSubmit = async (
    values: ValuesFormik,
    formikHelpers: FormikHelpers<ValuesFormik>
  ) => {
    try {
      const response = await apiClient.post<SubmitResponse>(
        "/users",
        { ...values, position_id: Number(values.position_id) },
        {
          headers: {
            Token: tokenState.value,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (!response.data.success)
        throw new Error("Error while trying add new user");
    } catch (error) {
      console.log(error);
    } finally {
      formikHelpers.resetForm();
      deleteToken();
      tokenState.retry();
      onUserRegistered();
    }
  };

  return onSubmit;
};

export default useSubimitForm;
