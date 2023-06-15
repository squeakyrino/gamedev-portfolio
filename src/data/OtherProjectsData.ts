import ProjectData from '@/data/ProjectData.ts'

export default [
  new ProjectData("project-render-engine", "Render engine from scratch", "img/projects/project-render-engine/project-render-engine-thumbnail.png", `
  <div>
      <div class="paragraph">
        A C++/OpenGL engine from scratch with skeletal animations and other features!
      </div>
      <div class="notice">
        Source code available on <a href="https://github.com/squeakyrino/Skeletal-Animation-Engine">GitHub</a>
      </div>
      <div class="paragraph">
        Main features:
        <ul>
          <li>Skeleton animation</li>
          <li>Model loading and animation loading using <a href="https://github.com/assimp/assimp">ASSIMP</a></li>
          <li>Deferred shading</li>
          <li>Normal mapping</li>
          <li>Shadows</li>
          <li>Post processing using render targets</li>
        </ul>
      </div>

      <div class="paragraph center">
        <video class="pc-screenshot" controls>
          <source src="img/projects/project-render-engine/Animations and shadows.mp4" type="video/mp4">
        </video>
        <video class="pc-screenshot" controls>
          <source src="img/projects/project-render-engine/Directional and Point lights with normal mapping.mp4" type="video/mp4">
        </video>
        <video class="pc-screenshot" controls>
          <source src="img/projects/project-render-engine/Gbuffer and depth map.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  `, 
  "#000000", true, true),
  new ProjectData("project-mupu", "Mega Unemployed Plumber Universe", "img/projects/project-mupu/project-mupu-thumbnail.png", `
    <div class="paragraph">
      <strong>Mega Unemployed Plumber Universe</strong> is project for a university class made with the render engine from scratch!
      Developed by a group of of 4, my contribution was the rendering engine, with the physics engine and camera controls being developed by the other group members.

      <div class="paragraph center">
        <video class="pc-screenshot" controls>
          <source src="img/projects/project-mupu/project-mupu-video.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    `, "#540505"),
    new ProjectData("project-chip-8", "Chip-8 emulator", "img/projects/project-chip-8/project-chip-8-thumbnail.gif", `
    <div class="paragraph">
      To understand how emulators worked, I set out to build my own.
      The Chip-8 emulator project is an emulator for the <a href="https://en.wikipedia.org/wiki/CHIP-8">CHIP-8 virtual
        machine</a>.
    </div>
    <div class="paragraph">
      You can run games quite a few games on it, with a few having some issues due to inaccuracies.
    </div>
    <div class="paragraph">
      <div class="notice">
        Emulator avaiable on <a href="https://github.com/squeakyrino/Chip8-Emulator">github.com</a>.
      </div>
    </div>
    <div class="paragraph">
      Main features :
      <ul>
        <li>CHIP-8 interpreter</li>
        <li>Window/graphics using <a href="https://www.sfml-dev.org/">SFML</a></li>
      </ul>

      <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/project-chip-8/project-chip-8-tic-tac.gif"/>
        <img class="pc-screenshot" src="img/projects/project-chip-8/project-chip-8-pong.gif"/>
        <img class="pc-screenshot" src="img/projects/project-chip-8/project-chip-8-thumbnail.gif"/>
      </div>

    </div>`),
  new ProjectData("project-simple-ray-tracer", "Simple ray tracer", "img/projects/project-simple-ray-tracer/project-simple-ray-tracer-thumbnail.png", `
    <div>
      <div class="paragraph">
        A simple ray tracer based of Casey Muratori's <a href="https://www.youtube.com/watch?v=pq7dV4sR7lg">one.</a>
      </div>
      <div class="notice">
        Source code available on <a href="https://github.com/squeakyrino/Simple-Ray-Tracer">GitHub</a>
      </div>
      <div class="paragraph">
        Supports:
        <ul>
          <li>Planes, spheres and triangles</li>
          <li>Parallelization</li>
        </ul>
      </div>

      <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/project-simple-ray-tracer/ray tracer render.bmp"/>
      </div>
    </div>
    `, "#4d4d4d", true, true),
    new ProjectData("project-dynarec", "Dynamic compilation project", "img/projects/project-dynarec/project-dynarec-thumbnail.jpg", `
    <div class="paragraph">
      DynaRec is a small project that I built to understand how JIT compilation works.
      I was really interested in understanding how emulators were able to translate code, from a source platform, to native instructions of a target platform. 
    </div>
    
    <div class="paragraph">
      It features a code emitter that is able to write a few different x86 assembly instructions to a code block, and later executes that code block dynamically.
    </div>

    <div class="paragraph">
      <div class="notice">
        You can take a look at the code <a href="https://github.com/squeakyrino/DynaRec">here</a>.
      </div>
    </div>`, "#1ca1e2"),
    new ProjectData("project-conway-game-life", "Conway's game of life", "img/projects/project-conway-game-life/project-conway-game-life-thumbnail.gif", `
    <div class="paragraph">
      A simple implementation of Conway's Game of Life!
    </div>

    <div class="paragraph">
      First project where I used <a href="https://www.sfml-dev.org/">SFML</a>.
    </div>
    
    <div class="paragraph">
      <div class="notice">Source code available on <a href="https://github.com/squeakyrino/Conways-Game-of-Life">github.com</a>.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/project-conway-game-life/project-conway-game-life-thumbnail.gif"/>
    </div>
</div>`, "#540542"),
];