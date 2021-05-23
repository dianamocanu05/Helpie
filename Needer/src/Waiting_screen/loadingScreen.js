import './loadingScreen.css';

function LoadingScreen() {
  return (
    <div className="Loading">
      <header className="Loading-header">
        <p class="text">Vă rugăm să așteptați...</p>
        <div class="loader"></div>
      </header>
    </div>
  );
}

export default LoadingScreen;
