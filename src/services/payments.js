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
  ChipField,
  DateInput,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  SelectInput
} from "react-admin";

export const PaymentsList = props => (
  <List {...props} title="Lista de pagos">
    <Datagrid rowClick="show">
      <TextField label="id" source="id" />

      <TextField source="cantidad" />

      <ReferenceField
        label="Loan"
        source="loanId"
        reference="loans"
        linkType="show"
      >
        <TextField source="id" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const PaymentCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Loan" source="loanId" reference="loans">
        <SelectInput optionText="id" />
      </ReferenceInput>

      <TextInput source="cantidad" type="number" />
    </SimpleForm>
  </Create>
);
