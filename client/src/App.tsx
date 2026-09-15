import { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import { SiteFooter, SiteHeader, SkipLink } from "@/components/site-chrome";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Guild from "@/pages/Guild";

const titles: Record<string, string> = {
  "/": "Tabletop Gaming Center — Newington, CT",
  "/about": "About — Tabletop Gaming Center",
  "/guild": "Young Adventurer’s Guild — Tabletop Gaming Center",
};

function DocumentTitle() {
  const [location] = useLocation();
  useEffect(() => {
    document.title = titles[location] ?? titles["/"];
  }, [location]);
  return null;
}

export default function App() {
  return (
    <>
      <DocumentTitle />
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
