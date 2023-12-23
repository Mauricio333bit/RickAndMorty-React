export default function Characters(props) {
  const { characters, setCharacters } = props;
  const resetCharatcters = () => {
    setCharacters(null);
  };

  return (
    <div className="characters d-flex row justify-content-center align-items-center">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharatcters}>
        Volver a home
      </span>
      <div className="vw-100 d-flex row flex-wrap">
        {characters.map((character, index) => (
          <div
            class="card bg-dark text-grey col-4  my-2  d-flex align-items-center justify-content-between"
            key={index}
          >
            <img
              src={character.image}
              class="card-img-top"
              alt={character.name}
            ></img>
            <div class="card-body d-flex row justify-content-center align-items-center">
              <h5 class="card-title text-center">{character.name}</h5>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="alive "></span>
                      <p className="my-auto">Alive</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="dead d-flex"></span>
                      <p className="my-auto">Dead</p>
                    </div>
                  </>
                )}
              </h6>
              <p className="w-100 episo">
                <span className="mx-1 col-12">Episodios: </span>
                <span className="text-white">{character.episode.length}</span>
              </p>
              <p className="w-100">
                <span className="mx-1">Especie:</span>
                <span className="text-white">{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
