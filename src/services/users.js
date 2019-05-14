import React from "react";
import {
  Datagrid,
  List,
  TextField,
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  LongTextInput,
  CardActions,
  CreateButton,
  ExportButton,
  RefreshButton,
  Create,
  Show,
  SimpleShowLayout,
  EditButton,
  ReferenceManyField,
  SingleFieldList,
  ChipField
} from "react-admin";

const UsersActions = ({
  basePath,
  currentSort,
  exporter,
  filterValues,
  resource,
  total
}) => (
  <CardActions>
    <ExportButton
      disabled={total === 0}
      resource={resource}
      sort={currentSort}
      filter={filterValues}
      exporter={exporter}
    />
  </CardActions>
);

export const UsersList = props => (
  <List {...props} title="Lista de usuarios">
    <Datagrid rowClick="show">
      <TextField label="id" source="id" />
      <TextField label="Name" source="nombre" />
      <TextField label="E-mail" source="correo" />
      <TextField source="cedula" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="nombre" />
      <TextField source="correo" />
      <TextField source="rol" />
      <TextField source="score" />
      <TextField source="telefono" />
      <TextField source="cedula" />

      <ReferenceManyField label="Loans" reference="loans" target="userId">
        <SingleFieldList linkType="show">
          <ChipField source="id" />
        </SingleFieldList>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="correo" type="email" />
      <TextInput source="password" type="password" />
      <TextInput source="telefono" type="number" />
      <TextInput source="cedula" type="number" />
      <TextInput source="score" type="number" />
    </SimpleForm>
  </Create>
);

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="nombre" />
      <TextInput source="correo" />

      <TextInput source="telefono" type="number" />
      <TextInput source="cedula" type="number" />
      <TextInput source="score" type="number" />
    </SimpleForm>
  </Edit>
);
