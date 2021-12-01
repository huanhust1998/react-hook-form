import {Box, Table, TableCell, TableRow, TextField} from "@material-ui/core";
import React from "react";
import {Controller, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Error!"),
});

const defaultValues = {
  name: "",
};

function FormValidateDemo(props) {
  const { control, formState, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Table>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    type="text"
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                    variant="outlined"
                    fullWidth
                    required
                  />
                )}
                rules={{ required: true }}
              />
            </TableCell>
          </TableRow>
        </Table>
      </form>
    </Box>
  );
}

export default FormValidateDemo;
