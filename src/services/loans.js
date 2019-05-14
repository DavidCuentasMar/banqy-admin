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
  FunctionField,
  SingleFieldList,
  ChipField,
  ReferenceField,
  ReferenceInput,
  SelectInput
} from "react-admin";

export const LoansList = props => (
  <List {...props} title="Lista de prestamos">
    <Datagrid rowClick="show">
      <TextField label="id" source="id" />
      <TextField source="estado" />
      <ReferenceField
        label="User"
        source="userId"
        reference="users"
        linkType="show"
      >
        <TextField source="nombre" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const LoansShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="estado" />

      <ReferenceField
        label="Usuario"
        source="userId"
        reference="users"
        linkType="show"
      >
        <TextField source="nombre" />
      </ReferenceField>

      <ReferenceManyField
        label="Acuerdo"
        reference="agreements"
        target="loanId"
      >
        <SingleFieldList linkType="show">
          <ChipField source="id" />
        </SingleFieldList>
      </ReferenceManyField>

      <ReferenceManyField label="Pagos" reference="payments" target="loanId">
        <SingleFieldList linkType="show">
          <ChipField source="id" />
        </SingleFieldList>
      </ReferenceManyField>

      <TextField label="Deuda" source="totalDeuda" />
      <TextField label="Pagado" source="totalPagado" />
    </SimpleShowLayout>
  </Show>
);

export const LoansCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Usuario" source="userId" reference="users">
        <SelectInput optionText="nombre" />
      </ReferenceInput>

      <SelectInput
        source="estado"
        choices={[
          {
            id: "esperando",
            name: "Esperando"
          },
          {
            id: "aprobado",
            name: "Aprobado"
          },
          {
            id: "rechazado",
            name: "Rechazado"
          },
          {
            id: "pagado",
            name: "Pagado"
          },
          {
            id: "en_mora",
            name: "En mora"
          }
        ]}
      />
    </SimpleForm>
  </Create>
);

export const LoansEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />

      <ReferenceInput label="Usuario" source="userId" reference="users">
        <DisabledInput optionText="nombre" />
      </ReferenceInput>

      <SelectInput
        source="estado"
        choices={[
          {
            id: "esperando",
            name: "Esperando"
          },
          {
            id: "aprobado",
            name: "Aprobado"
          },
          {
            id: "rechazado",
            name: "Rechazado"
          },
          {
            id: "pagado",
            name: "Pagado"
          },
          {
            id: "en_mora",
            name: "En mora"
          }
        ]}
      />
    </SimpleForm>
  </Edit>
);
