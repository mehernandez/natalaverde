import Dress from "./Dress"
import Person from "./Person"
import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';

function App() {

  const [base, setBase] = useState(1);
  const [dress, setDress] = useState(0);

  return (
    <Grid container>
      <Grid item xs={8}>
        <Button variant="contained" color="primary" style={{ color: 'white' }} onClick={() => {
          setDress(0);
          return false;
        }}>
          Reiniciar
</Button>
        <Grid container justify="center">
          <Grid item>
            <Person base={base} dress={dress} display={(dress === 0) ? 'none' : 'block'} style={{ width: 280 }} />
          </Grid>
        </Grid>



        <Grid container spacing={2} justify="center">
          {[1, 2, 3].map((ind) =>
            <Grid item>
              <Dress key={ind} ind={ind} update={setDress} base={base} />
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={2} >
        <Grid direction="column" spacing={2} justify="space-between">
          {[1, 2, 3].map((ind) =>
            <Grid item>
              <Button
                variant="contained"
                color={ind === base ? "secondary" : "primary"}
                onClick={() => {
                  setDress(0);
                  setBase(ind);
                  return false
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img src={"./base_" + ind + ".png"} width={150} alt="base" draggable="false" />
                  <img src={"./hair_" + ind + ".png"} width={150} alt="base" draggable="false" style={{ position: 'absolute', left: 0, top: 0 }} />
                </div>

              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={2} spacing={2}>
        <Grid direction="column">
          {[4].map((ind) =>
            <Grid item>
              <Button
                variant="contained"
                color={ind === base ? "secondary" : "primary"}
                onClick={() => {
                  setDress(0);
                  setBase(ind);
                  return false
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img src={"./base_" + ind + ".png"} width={150} alt="base" draggable="false" />
                  <img src={"./hair_" + ind + ".png"} width={150} alt="base" draggable="false" style={{ position: 'absolute', left: 0, top: 0 }} />
                </div>

              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
