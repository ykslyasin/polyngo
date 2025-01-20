import './App.css';
import Navi from './layouts/Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import SignUp from './pages/SignUpPage';
import SignIn from './pages/SignInPage';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ContentPage from './pages/ContentPage';
import { useState } from 'react';
import ProfilePage from './pages/ProfilePage';
import LeaderboardPage from './pages/LeaderboardPage';
import ActiveScanning from './pages/ActiveScanningPage';
import BruteForce from './pages/BruteForcePage';
import DataFromInformationRepository from './pages/DataFromInformationRepositoryPage';
import ExploitPublicFacingApplication from './pages/ExploitPublicFacingApplicationPage';
import FileAndDirectoryDiscovery from './pages/FileAndDirectoryDiscoveryPage';
import NetworkDenialOfService from './pages/NetworkDenialOfServicePage';
import NetworkSniffing from './pages/NetworkSniffingPage';
import SearchOpenTechnicalDatabases from './pages/SearchOpenTechnicalDatabasesPage';
import Aireplay from './pages/AireplayPage';
import KomutUret from './pages/komutUretPage';
import Sqlmap from './pages/SqlmapPage';
import Favorites from './pages/FavoritesPage';






function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [sifre, setSifre] = useState('');
  const [userID, setUserID] = useState(0);

  const [userPoints, setUserPoints] = useState(0);

  const [level, setLevel] = useState(0);
  const [questionData, setQuestionData] = useState(null);
  const [playedVideos, setPlayedVideos] = useState([]);
  const [trueCount,setTrueCount] = useState(0);
  const [falseCount,setFalseCount] = useState(0);

  function handleSignOut() {
    setIsAuthenticated(false)
  }

  return (
    <div className="App">
      
    <Navi userPoints={userPoints} falseCount={falseCount} trueCount={trueCount} setLevel={setLevel} isAuthenticated={isAuthenticated} handleSignOut={handleSignOut} kullaniciAdi={kullaniciAdi} />


        <Routes>
          <Route path="/content" element={<ContentPage setUserPoints={setUserPoints} userID={userID} trueCount={trueCount} falseCount={falseCount} setFalseCount={setFalseCount} setTrueCount={setTrueCount} level={level} questionData={questionData} setQuestionData={setQuestionData} playedVideos={playedVideos} setPlayedVideos={setPlayedVideos}/>}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="active-scanning" element={<ActiveScanning />}></Route>
          <Route path="brute-force" element={<BruteForce />}></Route>
          <Route path="data-from-information-repository" element={<DataFromInformationRepository />}></Route>
          <Route path="exploit-public-facing-application" element={<ExploitPublicFacingApplication />}></Route>
          <Route path="file-and-directory-discovery" element={<FileAndDirectoryDiscovery />}></Route>
          <Route path="network-denial-of-service" element={<NetworkDenialOfService />}></Route>
          <Route path="network-sniffing" element={<NetworkSniffing />}></Route>
          <Route path="search-open-technical-databases" element={<SearchOpenTechnicalDatabases />}></Route>
          <Route path="/sign-in" element={<SignIn userID={userID} setUserPoints={setUserPoints} setUserID={setUserID} setIsAuthenticated={setIsAuthenticated} kullaniciAdi={kullaniciAdi} setKullaniciAdi={setKullaniciAdi} sifre={sifre} setSifre={setSifre} />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/aireplay" element={<Aireplay />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/leaderboard" element={<LeaderboardPage kullaniciAdi={kullaniciAdi} />}></Route>
          <Route path="/komut-uret" element={<KomutUret />}></Route>
          <Route path="/sqlmap" element={<Sqlmap />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>



        </Routes>


    </div>
  );
}

export default App;
