console.log("v2: view 2 view skin");

/*------------------------------------------------------*/

document.body.innerHTML=`
<div class="hero is-primary is-halfheight">
  <div class="hero-head"> <!-- BEGIN HERO-HEAD -->
    <nav class="navbar">
      <div class="container">
	<div class="navbar-item">
	  <a class="subtitle" href="https://saul11235.github.io/BulmaSkins/">BulmaSkins</a>
	</div>

	<div class="navbar-end"> <!--- BEGIN - NAVBAR-END -->

	  <div class="container block"> 
	  <div id="bulmaskins-dropdown"></div>

       </div>




	</div> <!--- END NAVBAR-END -->

      </div>
    </nav>
  </div>  <!-- END HERO-HEAD -->

  <div class="hero-body"> <!-- BEGIN HERO-BODY -->

 <!-- ----- -->
 <div class="container">

   <div class="columns">
     <div class="column is-10">

      <div class="block">
        <h1 id="label_skin_name" class="title" style="font-size:3rem;"> </h1>
      </div>
      <br/>

     </div>
     <div class="column is-2">

        <!-- BulmaSkins-switch -->
	<br/>
        <div class="block">
          <button id="BulmaSkins-switch" class="button ">
            <div id="BulmaSkins-switch-light"> Light </div>
            <div id="BulmaSkins-switch-dark" style="display:none"> Dark </div>
          </button>
        </div>
	<!-- ----------------- -->
 
     </div>

   </div>





     <!-- ---------------------------------------------- -->

   <div class="columns">

     <div class="column is-4">

     <strong class="is-size-4">
          <span id="label-cdn"></span>
     </strong> 

    <div class="is-size-6 is-spaced is-is-outlined">
          <span id="label-light-cdn"></span>
          <button id="copy-light" class="icon button is-primary"><i class="bi bi-copy"></i></button> 
     </div> 
     <div id="field-light" class="notification"  style="font-size:0.7rem;font-family:monospace;padding:8px;overflow-x:auto;white-space:nowrap;color:white;background-color:black;"></div>
     <div class="is-size-6">
          <span id="label-dark-cdn"></span>
          <button id="copy-dark" class="icon button is-primary"><i class="bi bi-copy"></i></button> 
     </div> 
     <div id="field-dark" class="notification"  style="font-size:0.7rem;font-family:monospace;padding:8px;overflow-x:auto;white-space:nowrap;color:white;background-color:black;"></div>

     <a id="button_skin_github" class="button is-light" href="https://google.com">
       <span id="label_skin_github"></span> 
       <span class="icon"><i class="bi bi-github"></i></span>
     </a>
 
     </div>
     <!-- ---------------------------------------------- -->
     <div class="column is-8">

        <strong class="is-size-4">
          <span id="label-switch-cdn"></span>
        </strong> 

       <div class="columns">
	 <!-- ---------------------------------------------- -->
	 <div class="column is-6">

     <div class="is-size-6">
          in head element:
          <button id="copy-head" class="icon button is-primary"><i class="bi bi-copy"></i></button> 
     </div> 
     <div id="field-head" class="notification"  style="font-size:0.7rem;font-family:monospace;padding:8px;overflow-x:auto;white-space:nowrap;color:white;background-color:black;"></div>
     <div class="is-size-6">
           in end of body element:
           <button id="copy-body" class="icon button is-primary"><i class="bi bi-copy"></i></button> 
      </div> 
      <div id="field-body" class="notification"  style="font-size:0.7rem;font-family:monospace;padding:8px;overflow-x:auto;white-space:nowrap;color:white;background-color:black;"></div>

	 </div>

	 <!-- ---------------------------------------------- -->
	 <div class="column is-6">

     <div class="is-size-6">
          creating a button to manage the switch themes, in body:
          <button id="copy-button" class="icon button is-primary"><i class="bi bi-copy"></i></button> 
     </div> 
     <div id="field-button" class="notification"  style="font-size:0.7rem;font-family:monospace;padding:8px;overflow-x:auto;white-space:nowrap;color:white;background-color:black;"></div>

	 </div>

	 <!-- ---------------------------------------------- -->
       </div>
     </div>
   </div>
   </div>

</div> <!-- hero-body -->
</div> <!-- hero -->




 <!-- ----- -->


 <div class="container">
 <div class="columns">
   <!-- -------------------------- col ----------------------- -->

   <div class="column is-4" >

   </div>

   <!-- -------------------------- col ----------------------- -->

   <div class="column is-4">


   </div>

   <!-- -------------------------- col ----------------------- -->

   <div class="column is-4">

   </div>
 </div>
 </div>


 <!-- ----- -->

 <div id="put_reel_html_here"></div>

 <!-- ----- -->

<footer class="hero is-primary is-small">
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


`

