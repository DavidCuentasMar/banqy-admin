import feathers from "feathers-client";

const host = "http://35.238.131.108:3030";

export default feathers()
  .configure(feathers.hooks())
  .configure(feathers.rest(host).fetch(window.fetch.bind(window)))
  .configure(
    feathers.authentication({
      jwtStrategy: "jwt",
      storage: window.localStorage
    })
  );
