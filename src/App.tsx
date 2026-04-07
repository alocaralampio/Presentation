import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [catUrl, setCatUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // api gatitos
  const fetchCat = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      setCatUrl(data[0].url);
    } catch (error) {
      console.error("Error al cargar michi", error);
    } finally {
      setIsLoading(false);
    }
  };

  const artistas = ["Stray Kids", "Zayn", "Louis", "5sos", "Harry", "Taylor"];

  return (
    <div className="main-content">
      <h1>ALONDRA CARALAMPIO</h1>
      <h2>Programación Web</h2>
      <p style={{ color: "#3f0b6e", fontWeight: "bold" }}>
        Ingeniería en Datos e Inteligencia Organizacional
      </p>
      <p style={{ color: "#3f0b6e", fontWeight: "bold" }}>240300798</p>

      <div className="intro-card">
        <h4>alolvsgatitos</h4>
        <p> ᥫ᭡</p>
        <pre> へ ╱|、</pre>
        <pre> ૮ - ՛ ) (` - 7</pre>
        <pre> / ⁻ ៸| |、⁻〵</pre>
        <pre>乀 (ˍ, ل ل じしˍ,)ノ</pre>
      </div>

      <div className="cat-container">
        <h3>Imágenes de gatitos </h3>
        <button
          className="artist-button"
          onClick={fetchCat}
          style={{ background: "#3f0b6e", color: "white", border: "none" }}
        >
          {isLoading ? "Cargando michi..." : "Cargar nuevo michi"}
        </button>
        {catUrl && <img src={catUrl} alt="Michi random" className="cat-img" />}
      </div>

      <h3>Mis artistas favoritos</h3>
      <div className="artist-list">
        {artistas.map((artista, index) => (
          <button key={index} className="artist-button">
            {artista}
          </button>
        ))}
      </div>

      <footer style={{ marginTop: "50px", opacity: 0.5 }}>
        <p>© Alondra Caralampio Barrios</p>
      </footer>
    </div>
  );
}
