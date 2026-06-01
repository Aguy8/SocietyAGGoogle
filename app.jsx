// Society — routeur hash simple
const PAGES = {
  '': PageAccueil,
  accueil: PageAccueil,
  fonctionnalites: PageFonctionnalites,
  'pour-qui': PagePourQui,
  tarifs: PageTarifs,
  'a-propos': PageAPropos,
  inscription: PageInscription,
  confirmation: PageConfirmation,
};

const App = () => {
  const getPage = () => window.location.hash.replace('#', '') || 'accueil';
  const [page, setPage] = React.useState(getPage);

  React.useEffect(() => {
    const onHash = () => {
      const p = getPage();
      setPage(p);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const Page = PAGES[page] || PageAccueil;
  return <Page />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
