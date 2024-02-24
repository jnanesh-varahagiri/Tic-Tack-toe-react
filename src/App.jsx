

import Player from "./components/Player";
function App() {
  

  return (
  <>
    <main>
        <div id="game-container">
         Players 
         <ol id="players">
          <Player  name="Player1" symbol={'X'}></Player>
          <Player  name="Player2" symbol={'O'}></Player>
         </ol>
         Game Board  
        </div> 
        Log
    </main> 
  </>);
}

export default App
