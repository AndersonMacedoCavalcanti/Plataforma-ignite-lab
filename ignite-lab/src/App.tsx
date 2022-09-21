import {Router} from "./Router";
import {cliente} from "./lib/apollo";
import {ApolloProvider} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";

export function App() {
    return (
        <>
            <ApolloProvider client={cliente}>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </ApolloProvider>
        </>
    )
}

