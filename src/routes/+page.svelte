<script>
  import DiscordStatus from "../components/DiscordStatus.svelte";
</script>

<svelte:head>
  <title>uhhhdetective.xyz</title>
</svelte:head>

<div id="main">
  <div class="box-content h-50 w-50 py-2 px-10">
    <div class="rounded overflow-hidden shadow-lg bg-[#302e2e]">
      <div class="px-6 py-4">
        <h1 class="text-white text-2xl font-semibold mb-4">About:</h1>
        <p class="text-white">
          → Hi, I'm Em. I am a 16 year old aspiring developer.
        </p>
        <p class="text-white">→ I am from the UK, timezone - GMT</p>
        <p class="text-white">
          → I enjoy coding personal and commercial projects, travelling around
          the UK, photography and website design and development.
        </p>
      </div>
    </div>
  </div>

  <div class="box-content h-50 w-50 py-2 px-10">
    <div class="rounded overflow-hidden shadow-lg bg-[#302e2e]">
      <div class="px-6 py-4">
        <h1 class="text-white text-2xl font-semibold mb-4">Projects:</h1>
        <h2 class="text-white text-xl font-semibold">Train Info for Discord</h2>
        <p class="text-white">
          → A bot for Discord that upon command shows UK train times for a
          station of your choice, including delays and cancellations, using the
          Realtime Trains API.
        </p>
        <br />
        <h2 class="text-white text-xl font-semibold">
          Dot Matrix (personal project, under current development)
        </h2>
        <p class="text-white">
          → A dot matrix display that informs the user of arrival and departure
          times of trains, delays and cancellations for a station of their
          choice, using the Realtime Trains API.
        </p>
        <br />
        <h2 class="text-white text-xl font-semibold">
          uhhhdetective.xyz, this website (work in progress)
        </h2>
        <p class="text-white">
          → The website you're on now, made with SvelteKit and Tailwind CSS,
          hosted with Cloudflare Pages. Used to advance knowledge with web
          development.
        </p>
      </div>
    </div>
  </div>

  <div class="box-content h-50 w-50 py-2 px-10">
    <div class="rounded overflow-hidden shadow-lg bg-[#302e2e]">
      <div class="px-6 py-4">
        <h1 class="text-white text-2xl font-semibold mb-4">Contact:</h1>
        <p class="text-white">
          <a href="https://github.com/detectve">
            <i class="fab fa-github" /> detectve</a
          >
        </p>
        <p class="text-white">
          <a href="https://discord.com/users/718798976211484724">
            <i class="fab fa-discord " /> uhhhdetective#1337
          </a>
        </p>
        <p class="text-white">
          <a href="mailto:uhhhdetective@protonmail.com">
            <i class="fas fa-envelope" /> uhhhdetective@protonmail.com</a
          >
        </p>
        <p class="text-white">
          <a href="https://twitter.com/uhhhdetective">
            <i class="fab fa-twitter" /> @uhhhdetective</a
          >
        </p>
      </div>
    </div>
  </div>

  <div class="box-content h-50 w-50 py-2 px-10">
    <div class="rounded overflow-hidden shadow-lg bg-[#302e2e]">
      <div class="px-6 py-4">
        <DiscordStatus />
      </div>
    </div>
  </div>
</div>
