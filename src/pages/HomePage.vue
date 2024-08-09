<template>
  <div id = "main_canvas">
    <div id = "intro">
      <div style="font-family: 'Terminal', sans-serif; color: whitesmoke;">
        <h1>Loc Pham</h1>
        <h2>Junior Software Engineer @ <span style="color: #003B95; font-weight: bold;">Booking.com</span>.</h2>
        <h2><span style="color: red;">Java</span>, <span style="color: yellowgreen;">Python</span>, and <span style="color: #6295CB;">C++</span> enthusiast.</h2>
        <hr>
      </div>
      
    </div>
    <div id = "terminal">
      <div id = "terminal_box">
        <div id="scanline"></div>
        <p>
          &gt; webpack: Compiled successfully. <br>
          &gt; webpack: Compiling... <br>
          &gt; Hash: 33d8c38093d5e8261eac <br>
          &gt; Version: webpack 3.11.0 <br>
          &gt; Time: 1337ms <br>
          <table style="width: 100%; overflow: hidden;"> 
          <col> 
            <tr> 
                <th>&gt; Asset</th> 
                <th>Size</th> 
                <th>Chunks</th>
                <th>Chunk Names</th>
                <th>Chunk Size</th>
                <th>Chunk ID</th>
            </tr> 

            <tr> 
                <td>&gt; project.js</td> 
                <td>12.3 MB</td> 
                <td>0</td>
                <td>[emitted]</td>
                <td>[big]</td>
                <td>project</td>
            </tr> 

            <tr> 
                <td>&gt; dashboard.js</td> 
                <td>6.36 MB</td> 
                <td>1</td>
                <td>[emitted]</td>
                <td>[big]</td>
                <td>dashboard</td>
            </tr>
            
            <tr> 
                <td>&gt; organize.js</td> 
                <td>5.29 MB</td> 
                <td>2</td>
                <td>[emitted]</td>
                <td>[big]</td>
                <td>organize</td>
            </tr>

            <tr>
                <td>&gt; proPens.js</td>
                <td>4.92 MB</td>
                <td>3</td>
                <td>[emitted]</td>
                <td>[big]</td>
                <td>proPens</td>
            </tr>

            <tr>
                <td>&gt; 0.81c79b4db476a98d272f.hot-update.js</td>
                <td>87.4 kB</td>
                <td>0</td>
                <td>[emitted]</td>
                <td>[unknown]</td>
                <td>hot-update-1</td>
            </tr>

            <tr>
                <td>&gt; 1.81c79b4db476a98d272f.hot-update.js</td>
                <td>7.94 kB</td>
                <td>1</td>
                <td>[emitted]</td>
                <td>[unknown]</td>
                <td>hot-update-2</td>
            </tr>
            
            <tr>
                <td>&gt; 81c79b4db476a98d272f.hot-update.json </td>
                <td>52 bytes</td>
                <td></td>
                <td>[emitted]</td>
                <td>[unknown]</td>
                <td>hot-update-3</td>
            </tr>
            
          </table> 
          &gt; Loading baked beans [##################################################] 100% <br>
          &gt; Loading brussels sprout [############################################      ] 88% <br>
          &gt; Loading CDs [##################################################] 100% <br>
          &gt; Loading nuts [##################################################] 100% <br>
          &gt; For any vue-ture inquiries feel free to reach out<br>
          <pre style="background: none; border-style: none; color: #ffffe6; overflow: hidden;">
________________________________________
/ He is always willing to take a Loc at my errors and is able to \
| provide a Phamtastic Vuew often given new insights.            | 
\ - Broski                                                       /
-----------------------------------------------------------------
  \ 
    \
        .--.
      |o_o |
      |:_/ |
      //   \ \
    (|     | )
    /'\_   _/`\
    \___&#x29;=&#x28;___/
          </pre>
        </p>
      </div>
    </div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.cdnfonts.com/css/terminal');

#main_canvas {
  background-color: #1E1F22;
  height: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#intro {
  display: flex;
  width: 50%; 
  height: 100%;
  align-items: center;
  justify-content: center;
}

#terminal {
  display: flex;
  width: 50%;
  height: 100%;
  padding-right: 20px;
  align-items: center;
  justify-content: center;
}

#terminal_box {
  width: 100%;
  height: 80%;
  padding: 10px;
  border-color: black;
  border-style: solid;
  border-width: 5px;
  background-color: black;
  background-image: radial-gradient(
    rgba(0, 150, 0, 0.75), black 120%
  );
  font: 1.3rem Inconsolata, monospace;
  color: #ffffe6;
  text-align: left;
  text-indent: .1em;
  overflow: hidden;
  position: relative;
}

#terminal_box:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        to bottom,
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
    );
    background-size: 100% 8px;
    z-index: 2;
    pointer-events: none;
}

@keyframes scanline {
    0% {
        bottom: 100%;
    }
    80% {
        bottom: 100%;
    }
    100% {
        bottom: 0%;
    }
}

#scanline {
    width: 100%;
    height: 100px;
    z-index: 8;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(255, 255, 255, 0.2) 10%,
        rgba(0, 0, 0, 0.1) 100%
    );
    opacity: 0.3;
    position: absolute;
    bottom: 100%;
    animation: scanline 3s linear infinite;
}
</style>
