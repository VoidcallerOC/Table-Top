import { Redirect, Route, Switch } from "wouter";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/site-chrome";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Guild from "@/pages/Guild";

export default function App() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/guild" component={Guild} />
        <Route path="/pages/about-us">
          <Redirect to="/about" />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      <SiteFooter />
    </>
  );
}
