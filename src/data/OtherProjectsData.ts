import ProjectData from '@/data/ProjectData.ts'

export default [
  new ProjectData("project-1", "Render engine from scratch", "img/projects/project1/Engine-1.png", `
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
          <source src="img/projects/project1/Animations and shadows.mp4" type="video/mp4">
        </video>
        <video class="pc-screenshot" controls>
          <source src="img/projects/project1/Directional and Point lights with normal mapping.mp4" type="video/mp4">
        </video>
        <video class="pc-screenshot" controls>
          <source src="img/projects/project1/Gbuffer and depth map.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  `, 
  "#000000", true, true),
  new ProjectData("project-2", "Simple ray tracer", "img/projects/project2/thumbnail.png", `
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
        <img class="pc-screenshot" src="img/projects/project2/ray tracer render.bmp"/>
      </div>
    </div>
    `),
    new ProjectData("project-6", "Sultans Of Sing", "img/projects/project-6-icon.png", `
    <div class="paragraph">
      <strong>Sultans Of Sing</strong> is a thing of beauty that I am so proud of. It's available on Windows Store because why not.
      <br/>Image by <a href="https://www.pexels.com/fr-fr/@aldoalz" target="blank">Aldo Picaso</a>.
            </div>
            <div class="paragraph center">
              <a href="https://www.microsoft.com/en-us/p/some-app" target="_blank"><img src="img/projects/ms-store-logo.png" alt="MS Store button" /></a>
          </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>Some stuff</li>
            <li>Some great stuff</li>
            <li>More awesome stuff</li>
            <li>And then some</li>
            </ul>
        </div>

        <div class="paragraph center">
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" /> 
        </div>
    `, "#c10606", false, true),
    new ProjectData("project-7", "Drew Blood", "img/projects/project-7-icon.png", `
    <div class="paragraph">
                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@karolina-grabowska">Karolina Grabowska</a>.
            </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>Some stuff</li>
              <li>Some great stuff</li>
              <li>More awesome stuff</li>
              <li>And then some</li>
              </ul>
          </div>

            <div class="paragraph">
              <div class="notice">
                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> 
            </div>`, "#1ca1e2"),
    new ProjectData("project-8", "The Art of Walking", "img/projects/project-8-icon.png", `
    <div class="paragraph">
                <strong>The Art of Walking</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
            </div>

            <div class="paragraph center">
              <a href="https://play.google.com/store/apps/details?id=someapp" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
          </div>

          <div class="paragraph">
          Main features :
          <ul>
          <li>Some stuff</li>
          <li>Some great stuff</li>
          <li>More awesome stuff</li>
          <li>And then some</li>
          </ul>
      </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />
                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />
            </div>`),
    new ProjectData("project-9", "Nikolable", "img/projects/project-9-icon.png", `
     <div class="paragraph">
                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.
            </div>

            <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
              </div>
            </div>`, "#123123", true, true),
];