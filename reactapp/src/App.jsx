import React from "react";

export default class App extends React.Component{
  render() {
    return (
      <div>
        <form>
          <h1>Termék hozzáadása a kosárhoz</h1>
          <label htmlFor="">Termék neve:</label>
          <input type="text" id="input_nev" name="input_nev" placeholder="Név..."/> <br />
          <label htmlFor="">Ár:</label>
          <input type="number" id="input_nev" name="input_nev" value={0}/> <br />
          <label htmlFor="">Mennyiség:</label>
          <input type="number" id="input_nev" name="input_nev" placeholder="Darab..."/> <br />
          <input type="button" name="btn_submit" id="btn_submit" value="Hozzáadás a kosárhoz" /> <br />
        </form>
        <hr />
        <h3>A kosár tartalma</h3>
        <ul></ul>
      </div>
    )
  }
}