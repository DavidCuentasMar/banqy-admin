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

export const AgreementsList = props => (
  <List {...props} title="Lista de acuerdos">
    <Datagrid rowClick="show">
      <TextField label="id" source="id" />

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

export const AgreementsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Loan" source="loanId" reference="loans">
        <SelectInput optionText="id" />
      </ReferenceInput>

      <TextInput source="monto" type="number" />
      <NumberInput source="numero_pagos" />
      <NumberInput source="dias_entre_pagos" />
      <DateInput source="fecha_inicial" />
      <DateInput source="fecha_final" />
    </SimpleForm>
  </Create>
);

export const AgreementsShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="monto" />
      <TextField source="numero_pagos" />
      <TextField source="dias_entre_pagos" />
      <TextField source="fecha_inicial" />
      <TextField source="fecha_final" />

      <ReferenceField
        label="Loan"
        source="loanId"
        reference="loans"
        linkType="show"
      >
        <TextField source="id" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
