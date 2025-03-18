import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import AscendHiring from "@/pages/AscendHiring";
import CagrClub from "@/pages/CagrClub";
import LinkedInAnalyzer from "@/pages/LinkedInAnalyzer";
import LinkedInAiInsightPrivacy from "@/pages/LinkedInAiInsightPrivacy";
import SquashNoteTaker from "@/pages/SquashNoteTaker";
import AtlasChugged from "@/pages/AtlasChugged";
import Navigation from "@/components/Navigation";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/ascend-hiring" component={AscendHiring} />
        <Route path="/projects/cagr-club" component={CagrClub} />
        <Route path="/projects/linkedin-analyzer" component={LinkedInAnalyzer} />
        <Route path="/projects/linkedin-ai-insight/privacy" component={LinkedInAiInsightPrivacy} />
        <Route path="/projects/squash-notetaker" component={SquashNoteTaker} />
        <Route path="/projects/atlas-chugged" component={AtlasChugged} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
