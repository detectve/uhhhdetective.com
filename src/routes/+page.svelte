<script>
  import DiscordStatus from "../components/DiscordStatus.svelte";
</script>

<svelte:head>
  <title>destination - uhhhdetective.com</title>
</svelte:head>

<body>
  <main class="mx-6 flex flex-col">
    <section class="flex w-full max-w-3xl pb-12 pt-24 sm:pt-4">
      <div class="space-y-2 sm:space-y-3">
        <div class="text-center">
          <h1 class="text-white font-bold text-6xl">
            uhhhdetective.com
          </h1>
        </div>
        <div class="box-border h-50 w-50 py-2 px-10">
          <div class="rounded-lg">
            <p class="text-white text-2xl">Hi, I'm Em. I'm a 16 year old software engineer from and based in the UK. 
              I'm currently more focused on front-end development, but enjoy other programming aspects as well.</p>
          </div>
        </div>
        <div class="box-border h-50 w-50 py-2 px-10">
          <div class="rounded-lg">
            <p class="text-white text-2xl">Outside of coding and studies, I enjoy travelling around the UK, predominantly on trains and the railway. </p>
          </div>
        </div>
        <div class="box-border h-50 w-50 py-2 px-10">
          <div class="rounded-lg">
            <p class="text-white text-2xl">If you have any enquiries, please do not hesitate to contact me via the following methods:
              <br>
              <a href="https://github.com/detectve">
                <i class="fab fa-github" /> detectve</a> - where you can see projects I've worked on and my contributions to other projects.
            </p>
            <p class="text-white text-2xl">
              <a href="https://twitter.com/detectve">
                <i class="fab fa-twitter" /> uhhhdetective</a> - where I keep up with railways and people within the community.
            </p>
            <p class="text-white text-2xl">
              <a href="https://discord.com/users/327462128061069056">
                <i class="fab fa-discord" /> uhhhdetective#1337</a> - where I can be contacted for more casual enquiries or just to have a conversation.
            </p>
            <p class="text-white text-2xl">
              <a href="mailto:uhhhdetective@protonmail.com">
                <i class="fas fa-envelope" /> uhhhdetective@protonmail.com</a> - where I can be contacted for more formal enquiries and/or conversations.
          </div>
        </div>
        <div class="box-border h-50 w-50 py-2 px-10">
          <div class="rounded-lg">
            <p class ="text-white text-2xl">I am currently: </p>
            <DiscordStatus />
          </div>
      </div>
    </section>
  </main>
</body>