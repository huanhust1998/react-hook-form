import {
  TextField,
  Button,
  Table,
  TableRow,
  TableCell,
} from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultValues = {
  firstName: "",
  lastName: "",
  age: 0,
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const schema = yup.object({
  firstName: yup.string().required("Please enter first name!"),
  lastName: yup.string().required("Please enter last name!"),
  age: yup.string().required("Please enter age name!"),
  address: yup.string().required("Please enter address"),
  email: yup
    .string()
    .required("Please enter email")
    .email("Incorrect email format"),
  password: yup.string().required("Please enter password"),
  confirmPassword: yup
    .string()
    .required("Please confirm password")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

function RegisterForm_MaterialUI(props) {
  const { handleSubmit, control, formState } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { errors, isValid, isDirty } = formState;

  function handleRegister(data) {
    console.log(data);
  }

  return (
    <form noValidate onSubmit={handleSubmit(handleRegister)}>
      <Table>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  type="text"
                  error={!!errors.firstName}
                  helperText={errors?.firstName?.message}
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    maxLength: 10,
                  }}
                />
              )}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Last Name</TableCell>
          <TableCell>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  type="text"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    maxLength: 10,
                  }}
                />
              )}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Age</TableCell>
          <TableCell>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Age"
                  type="number"
                  error={!!errors.age}
                  helperText={errors.age?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Address</TableCell>
          <TableCell>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Address"
                  type="text"
                  error={!!errors.address}
                  helperText={errors.address?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Email</TableCell>
          <TableCell>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Password</TableCell>
          <TableCell>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="text"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Confirm password</TableCell>
          <TableCell>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Confirm password"
                  type="text"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </TableCell>
        </TableRow>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid}
          style={{ marginTop: "1rem" }}
        >
          Submit
        </Button>
      </Table>
    </form>
  );
}

export default RegisterForm_MaterialUI;
