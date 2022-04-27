import React from "react";

function page2film() {
return (
    <div style={{ textAlign: "center" }}>
      <form
        style={{ margin: "2rem 0rem" }}
        action=""
        method="get"
        className="configuration_form"
      >
        <label htmlFor="pseudo">
          <h2>
            Votre pseudo :
            <input
              style={{
                fontSize: "2.5rem",
                marginLeft: "1.5rem",
                paddingLeft: "1rem",
              }}
              value={pseudo}
              type="text"
              name="pseudo"
              placeholder="Votre pseudo ici"
              id="pseudo"
              onChange={handlePseudoChange}
              required
            />
          </h2>
        </label>
        <div style={{ textAlign: "center", margin: "1rem 0 " }}>
          <h2 style={{ alignItems: "center" }}>
            Choisissez votre mode de jeu :
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "1rem 0 ",
            }}
          >
            <CardConfig
              title="Classique"
              explication={explicationClassique}
              ready
              handleClickSubmit={handleClickSubmit}
            />
            <CardConfig
              title="Personnalisé"
              explication={explicationPersonnalise}
              ready={false}
              handleClickSubmit={handleClickSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
        }