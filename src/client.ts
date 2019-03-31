import { get as _get } from "lodash";

import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { toast } from "react-toastify";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { DEBUG, DEV_SERVER_PORT } from "./env";

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
          switch (_get(extensions, "status_code")) {
            case 401:
              toast.error("You are not authenticated");
              break;
            case 409:
              toast.error(message);
              break;
            default:
              if (DEBUG) {
                toast.error(message);
              }
          }
          const line = _get(locations, "line");
          const column = _get(locations, "column");
          console.log(
            `[GraphQL error]: Message: ${message}, Location: (${line}, ${column}), Path: ${path}`,
          );
        });
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
        toast.error("An error has occurred. Please try again later.");
      }
    }),
    new ApolloLink((operation: any, forward: any) => {
      const token = localStorage.getItem("token");
      if (token) {
        // add the authorization to the headers
        operation.setContext(({ headers = {} }: { headers: any }) => ({
          headers: {
            ...headers,
            Authorization: `JWT ${token}`,
          },
        }));
      }

      return forward(operation);
    }),
    new HttpLink({
      uri: `http://localhost:${DEV_SERVER_PORT}/graphql`,
      credentials: "same-origin",
    }),
  ]),
  cache: new InMemoryCache(),
});
