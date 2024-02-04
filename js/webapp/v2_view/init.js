console.log("v2: view 2 view skin");

/*------------------------------------------------------*/

document.body.innerHTML=`
<style>#load-container{position:fixed;top:0;left:0;width:100%;height:100%;background-color:black;display:flex;align-items:center;justify-content:center;z-index:9999;}.load-item{border: 8px solid darkgray;border-top:8px solid black;border-radius: 50%;width: 50px;height: 50px;animation: spin 1s linear infinite;}@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}</style>
<div id="load-container"> <div class="load-item"></div></div> 
<style>
.my-code{
  font-family:monospace;
  font-size:0.6rem;
  background-color:black;
  padding:8px;
  color:white;
  text-wrap:wrap;
  word-break:break-word;
}
</style>

<div class="hero is-primary is-halfheight" style="padding-top:0px;">
  <div class="hero-body" style="padding-top:0px;padding-bottom:15px;">
    <div class="container"> <!-- begin main container -->
      <div class="field has-text-right" style="position:relative;z-index:999;">
        <div id="bulmaskins-dropdown"></div>
      </div>
      <div class="container has-text-centered">
        <a href="https://saul11235.github.io/BulmaSkins/">
          <h1 id="label_skin_name" class="title" style="font-size:4rem;padding:10px;"> </h1>
        </a>
      </div>
      <div class="container has-text-centered">
        <button id="BulmaSkins-switch" class="button is-rounded is-size-6" style="min-width:150px;"><div id="BulmaSkins-switch-light"><span id="button-light"></span><span class="icon"><i class="bi bi-sun"></i></span></div><div id="BulmaSkins-switch-dark" style="display:none"><span id="button-dark"></span><span class="icon"><i class="bi bi-moon"></i></span></div></button>
        <a id="button_skin_github" class="button is-light is-size-6 is-rounded"><span id="label_skin_github"></span><span class="icon"><i class="bi bi-github"></i></span></a>
      </div>
      <div class="columns is-multiline is-vcentered"><!-- begin main columns -->
        <div class="column is-4-desktop is-12-tablet"><!-- begin col 1 -->
            <strong class="is-size-4"><span id="label-cdn"></span></strong>
            <div class="is-size-6 is-spaced is-is-outlined">
            <span id="label-light-cdn"></span>
            <button id="copy-light" class="icon button is-primary"><i class="bi bi-copy"></i></button> 
            </div> 
            <div id="field-light" class="my-code"></div>
            <div class="is-size-6">
            <span id="label-dark-cdn"></span>
            <button id="copy-dark" class="icon button is-primary"><i class="bi bi-copy"></i></button> 
            </div> 
            <div id="field-dark" class="my-code"></div>
        </div><!-- end col 1 -->
        <div class="column is-8-desktop is-12-tablet"> <!-- begin col 2 -->
          <strong class="is-size-4"><span id="label-switch-cdn"></span></strong>
          <div class="columns is-multiline is-vcentered">
          <div class="column is-6-desktop is-12-tablet"><!-- begin col 2.1 -->
             <div class="is-size-6">
             in head element:
             <button id="copy-head" class="icon button is-primary"><i class="bi bi-copy"></i></button> 
             </div> 
             <div id="field-head" class="my-code"></div>
             <div class="is-size-6">
             in end of body element:
             <button id="copy-body" class="icon button is-primary"><i class="bi bi-copy"></i></button> 
             </div> 
             <div id="field-body" class="my-code"></div>
          </div> <!-- end col 2.1 -->
          <div class="column is-6-desktop is-12-tablet"><!-- begin col.2.2 -->
              <div class="is-size-6">
              creating a button to manage the switch themes, in body:
              <button id="copy-button" class="icon button is-primary"><i class="bi bi-copy"></i></button> 
              </div> 
              <div id="field-button" class="my-code"></div>
          </div> <!-- end col 2.2 -->
          </div>
        </div> <!-- end col 2 -->
      </div> <!-- end main columns -->
    </div> <!-- end main container -->
  </div> <!-- hero-body -->
</div> <!-- hero -->

<div id="put_reel_html_here"></div>

<footer id="footer-webapp" class="hero is-primary is-small">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="block is-spaced">
        <a class="button is-danger" href="https://saul11235.github.io/BulmaSkins/">
          <span>BulmaSkins</span>
          <span class="icon"><i class="bi bi-brush"></i></span>
        </a>
        <a class="button is-link" href="https://edwinsaul.com">
          <span>By Edwin Saul</span>
          <span class="icon"><i class="bi bi-rocket-takeoff"></i></span>
        </a>
        <a class="button is-light" href="https://github.com/Saul11235/BulmaSkins">
          <span>View on github</span>
          <span class="icon"><i class="bi bi-github"></i></span>
        </a>
      </div>
    </div>
  </div>
</footer>

<!-- end BulmaSkins -->
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js"></script>
<script> style_view_skin();</script>`


