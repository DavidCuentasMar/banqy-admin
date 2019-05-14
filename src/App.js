import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Admin, Resource } from "react-admin";
import feathersClient from "./feathersClient";
import { restClient, authClient } from "ra-data-feathers";

import { UsersList, UserEdit, UserCreate, UserShow } from "./services/users";
import { LoansList, LoansCreate, LoansEdit, LoansShow } from "./services/loans";
import {
  AgreementsList,
  AgreementsCreate,
  AgreementsShow
} from "./services/agreements";

import LoanIcon from "@material-ui/icons/Receipt";
import UserIcon from "@material-ui/icons/Group";
import AgreementIcon from "@material-ui/icons/Gesture";
import { PaymentsList, PaymentCreate } from "./services/payments";

const restClientOptions = {
  id: "id", // In this example, the database uses '_id' rather than 'id'
  usePatch: true // Use PATCH instead of PUT for updates
};

const authClientOptions = {
  usernameField: "correo", // Our example database might use 'username' rather than 'email'
  permissionsField: "rol", // Use the 'userroles' field on the JWT as the users role
  // redirectTo: "/signin" // Our example login form might be at '/signin', redirect here if AUTH_CHECK fails

  authenticate: {
    // Options included in calls to Feathers client.authenticate
    strategy: "local" // The authentication strategy Feathers should use
  },
  storageKey: "feathers-jwt"
};

function App() {
  return (
    <Admin
      title="jejeje"
      dataProvider={restClient(feathersClient, restClientOptions)}
      authProvider={authClient(feathersClient, authClientOptions)}
    >
      <Resource
        name="users"
        options={{ label: "Usuarios" }}
        list={UsersList}
        create={UserCreate}
        edit={UserEdit}
        show={UserShow}
        icon={UserIcon}
      />

      <Resource
        name="loans"
        options={{ label: "Prestamos" }}
        list={LoansList}
        create={LoansCreate}
        edit={LoansEdit}
        show={LoansShow}
        icon={LoanIcon}
      />

      <Resource
        name="agreements"
        options={{ label: "Acuerdos" }}
        list={AgreementsList}
        create={AgreementsCreate}
        // edit={LoansEdit}
        show={AgreementsShow}
        icon={AgreementIcon}
      />

      <Resource
        name="payments"
        options={{ label: "Pagos" }}
        list={PaymentsList}
        create={PaymentCreate}
        // edit={LoansEdit}
        // show={AgreementsShow}
        // icon={AgreementIcon}
      />
    </Admin>
  );
}

export default App;
