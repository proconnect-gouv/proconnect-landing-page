import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WrapperLayout from "../Pages/WrapperLayout";
import HomeLayout from "../Pages/HomeLayout";
import Roadmap from "../Pages/Roadmap";
import Services from "../Pages/Services";
import SiteMap from "../Pages/SiteMap";
import Cgu from "../Pages/Cgu";
import LegalNotices from "../Pages/LegalNotices";
import Stats from "../Pages/Stats";
import SiteRecommandation from "../Pages/SiteRecommandation/SiteRecommandation";
import SiteRecommandationTest from "../Pages/SiteRecommandation/SiteRecommandationTest";
import NotFound from "../Pages/NotFound";
import MonCompte from "../Pages/MonCompte";
import PostAuthentification from "../Pages/PostAuthentication";
import PostLogout from "../Pages/PostLogout";
import AuthenticationError from "../Pages/AuthenticationError";
import { Accessibility } from "../Pages/Accessibility";
import DocumentationAccueil from "../Pages/DocumentationUtilisateur/DocumentationAccueil";
import Glossaire from "../Pages/DocumentationUtilisateur/Glossaire";
import DecouvrirProConnect from "../Pages/DocumentationUtilisateur/DecouvrirProConnect";
import ComprendreConnexion from "../Pages/DocumentationUtilisateur/ComprendreConnexion";
import UtiliserProConnectIdentite from "../Pages/DocumentationUtilisateur/UtiliserProConnectIdentite";
import ComprendreOrganisations from "../Pages/DocumentationUtilisateur/ComprendreOrganisations";
import SecuriserIdentite from "../Pages/DocumentationUtilisateur/SecuriserIdentite";
import VerifierIdentiteEtDroits from "../Pages/DocumentationUtilisateur/VerifierIdentiteEtDroits";
import UtiliserServicesPartenaires from "../Pages/DocumentationUtilisateur/UtiliserServicesPartenaires";
import AssistanceBonnesPratiques from "../Pages/DocumentationUtilisateur/AssistanceBonnesPratiques";

const router = createBrowserRouter([
  {
    errorElement: (
      <WrapperLayout>
        <NotFound />
      </WrapperLayout>
    ),
    children: [
      {
        path: "/",
        element: (
          <WrapperLayout>
            <HomeLayout />
          </WrapperLayout>
        ),
      },
      {
        path: "/services",
        element: (
          <WrapperLayout>
            <Services></Services>
          </WrapperLayout>
        ),
      },
      {
        path: "/documentation",
        element: (
          <WrapperLayout>
            <DocumentationAccueil />
          </WrapperLayout>
        ),
      },
      {
        path: "/documentation/glossaire",
        element: (
          <WrapperLayout>
            <Glossaire />
          </WrapperLayout>
        ),
      },
      {
        path: "/accessibilite",
        element: (
          <WrapperLayout>
            <Accessibility />
          </WrapperLayout>
        ),
      },
      {
        path: "/recommandation-test",
        element: (
          <WrapperLayout>
            <SiteRecommandationTest />
          </WrapperLayout>
        ),
      },
      {
        path: "/recommandation/:employer",
        element: (
          <WrapperLayout>
            <SiteRecommandation />
          </WrapperLayout>
        ),
      },

      {
        path: "/feuille-de-route",
        element: (
          <WrapperLayout>
            <Roadmap></Roadmap>
          </WrapperLayout>
        ),
      },
      {
        path: "/plan-du-site",
        element: (
          <WrapperLayout>
            <SiteMap />
          </WrapperLayout>
        ),
      },
      {
        path: "/cgu",
        element: (
          <WrapperLayout>
            <Cgu />
          </WrapperLayout>
        ),
      },
      {
        path: "/mentions-legales",
        element: (
          <WrapperLayout>
            <LegalNotices />
          </WrapperLayout>
        ),
      },
      {
        path: "/stats",
        element: (
          <WrapperLayout>
            <Stats />
          </WrapperLayout>
        ),
      },
      {
        path: "/post-authentication",
        element: (
          <WrapperLayout>
            <PostAuthentification />
          </WrapperLayout>
        ),
      },
      {
        path: "/post-logout",
        element: (
          <WrapperLayout>
            <PostLogout />
          </WrapperLayout>
        ),
      },
      {
        path: "/authentication-error",
        element: (
          <WrapperLayout>
            <AuthenticationError />
          </WrapperLayout>
        ),
      },
      {
        path: "/mon-compte",
        element: (
          <WrapperLayout>
            <MonCompte />
          </WrapperLayout>
        ),
      },
      {
        path: "/documentation/partie-1",
        element: (
          <WrapperLayout>
            <DecouvrirProConnect />
          </WrapperLayout>
        ),
      },
      {
        path: "/documentation/partie-2",
        element: (
          <WrapperLayout>
            <ComprendreConnexion />
          </WrapperLayout>
        ),
      },
      {
        path: "/documentation/partie-3",
        element: (
          <WrapperLayout>
            <UtiliserProConnectIdentite />
          </WrapperLayout>
        ),
      },
      {
        path: "/documentation/partie-4",
        element: (
          <WrapperLayout>
            <ComprendreOrganisations />
          </WrapperLayout>
        ),
      },
      {
        path: "/documentation/partie-5",
        element: (
          <WrapperLayout>
            <SecuriserIdentite />
          </WrapperLayout>
        ),
      },
      {
        path: "/documentation/partie-6",
        element: (
          <WrapperLayout>
            <VerifierIdentiteEtDroits />
          </WrapperLayout>
        ),
      },
      {
        path: "/documentation/partie-7",
        element: (
          <WrapperLayout>
            <UtiliserServicesPartenaires />
          </WrapperLayout>
        ),
      },
      {
        path: "/documentation/partie-8",
        element: (
          <WrapperLayout>
            <AssistanceBonnesPratiques />
          </WrapperLayout>
        ),
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
