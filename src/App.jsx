import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import FloatingNav from './components/FloatingNav.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

// Eager-loaded (above the fold, every visit)
import Accueil from './pages/Accueil.jsx'

// Lazy-loaded (everything else)
const Fonctionnalites = lazy(() => import('./pages/Fonctionnalites.jsx'))
const PourQui = lazy(() => import('./pages/PourQui.jsx'))
const Tarifs = lazy(() => import('./pages/Tarifs.jsx'))
const APropos = lazy(() => import('./pages/APropos.jsx'))
const Inscription = lazy(() => import('./pages/Inscription.jsx'))
const Confirmation = lazy(() => import('./pages/Confirmation.jsx'))
const Segment = lazy(() => import('./pages/Segment.jsx'))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const Presse = lazy(() => import('./pages/Presse.jsx'))
const Documentation = lazy(() => import('./pages/Documentation.jsx'))
const Securite = lazy(() => import('./pages/Securite.jsx'))
const Carrieres = lazy(() => import('./pages/Carrieres.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const CentreAide = lazy(() => import('./pages/CentreAide.jsx'))
const EtudesDeCas = lazy(() => import('./pages/EtudesDeCas.jsx'))
const Statut = lazy(() => import('./pages/Statut.jsx'))
const MobileApp = lazy(() => import('./pages/MobileApp.jsx'))
const MentionsLegales = lazy(() => import('./pages/MentionsLegales.jsx'))
const Confidentialite = lazy(() => import('./pages/Confidentialite.jsx'))
const CGU = lazy(() => import('./pages/CGU.jsx'))
const Benevolat = lazy(() => import('./pages/Benevolat.jsx'))
const MiseEnRelation = lazy(() => import('./pages/MiseEnRelation.jsx'))
const Diagnostic = lazy(() => import('./pages/Diagnostic.jsx'))
const Presentation = lazy(() => import('./pages/Presentation.jsx'))
const Comparatif = lazy(() => import('./pages/Comparatif.jsx'))
const Integrations = lazy(() => import('./pages/Integrations.jsx'))
const Manifeste = lazy(() => import('./pages/Manifeste.jsx'))
const Ambassadeurs = lazy(() => import('./pages/Ambassadeurs.jsx'))
const Temoignages = lazy(() => import('./pages/Temoignages.jsx'))
const Demarrer = lazy(() => import('./pages/Demarrer.jsx'))
const RSE = lazy(() => import('./pages/RSE.jsx'))
const Newsletter = lazy(() => import('./pages/Newsletter.jsx'))
const Webinaires = lazy(() => import('./pages/Webinaires.jsx'))
const Changelog = lazy(() => import('./pages/Changelog.jsx'))
const Impact = lazy(() => import('./pages/Impact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const Evenements = lazy(() => import('./pages/Evenements.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const FeatureMembres = lazy(() => import('./pages/features/Membres.jsx'))
const FeatureFinances = lazy(() => import('./pages/features/Finances.jsx'))
const FeatureEvenements = lazy(() => import('./pages/features/Evenements.jsx'))
const FeatureCommunication = lazy(() => import('./pages/features/Communication.jsx'))
const FeatureImpact = lazy(() => import('./pages/features/Impact.jsx'))

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <div style={{ width: 36, height: 36, borderRadius: '50%', border: '3px solid #E5E5E5', borderTopColor: '#0E47AB', animation: 'spin 0.8s linear infinite' }} />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <FloatingNav />
      <WhatsAppFloat />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/fonctionnalites" element={<Fonctionnalites />} />
          <Route path="/fonctionnalites/membres" element={<FeatureMembres />} />
          <Route path="/fonctionnalites/finances" element={<FeatureFinances />} />
          <Route path="/fonctionnalites/evenements" element={<FeatureEvenements />} />
          <Route path="/fonctionnalites/communication" element={<FeatureCommunication />} />
          <Route path="/fonctionnalites/impact" element={<FeatureImpact />} />
          <Route path="/pour-qui" element={<PourQui />} />
          <Route path="/pour-qui/:slug" element={<Segment />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/presse" element={<Presse />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/securite" element={<Securite />} />
          <Route path="/carrieres" element={<Carrieres />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/centre-aide" element={<CentreAide />} />
          <Route path="/etudes-de-cas" element={<EtudesDeCas />} />
          <Route path="/statut" element={<Statut />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/benevolat" element={<Benevolat />} />
          <Route path="/mise-en-relation" element={<MiseEnRelation />} />
          <Route path="/comparatif" element={<Comparatif />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/manifeste" element={<Manifeste />} />
          <Route path="/ambassadeurs" element={<Ambassadeurs />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/demarrer" element={<Demarrer />} />
          <Route path="/rse" element={<RSE />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/webinaires" element={<Webinaires />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/diagnostic/:slug" element={<Diagnostic />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
