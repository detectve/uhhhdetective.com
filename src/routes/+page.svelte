<script>
  import DiscordStatus from "../components/DiscordStatus.svelte";
</script>

<svelte:head>
  <title>uhhhdetective.xyz</title>
</svelte:head>

<div id="main">
  <div
    class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
  >
    <div
      class="rounded overflow-hidden shadow-lg bg-[#302e2e] hover:scale-105 transition duration-300 ease-in-out"
    >
      <div class="px-6 py-4">
        <h1 class="text-white text-2xl font-semibold mb-4">About:</h1>
        <p class="text-white">→ Hi, I'm Em!</p>
        <p class="text-white">→ I'm a 16 year old aspiring Front-End/Full Stack developer.</p>
        <p class="text-white">→ HTML, CSS, JavaScript, SvelteKit, Python</p>
        <p class="text-white">→ I make websites, program bots for discord, and other projects for personal use.</p>
      </div>
    </div>

    <div
      class="rounded overflow-hidden shadow-lg bg-[#302e2e] hover:scale-105 transition duration-300 ease-in-out "
    >
      <div class="px-6 py-4 inset-x-0 top-0">
        <h1 class="text-white text-2xl font-semibold mb-4">Projects:</h1>
        <h2 class="text-white text-xl font-semibold glowhover">Train Info for Discord</h2>
        <p class="text-white">→ A bot for Discord that upon command shows UK train times for a station of your choice, including delays and cancellations, using the Realtime Trains API.</p>
        <br />
        <h2 class="text-white text-xl font-semibold glowhover">Dot Matrix (personal project, under current development)</h2>
        <p class="text-white">→ A dot matrix display that informs the user of arrival and departure times of trains, delays and cancellations for a station of their choice, using the Realtime Trains API.</p>
        <br />
        <h2 class="text-white text-xl font-semibold glowhover">uhhhdetective.xyz, this website (work in progress)</h2>
        <p class="text-white">→ The website you're on now, made with SvelteKit and Tailwind CSS, hosted with Cloudflare Pages.</p>
      </div>
    </div>

    <div class="rounded overflow-hidden shadow-lg bg-[#302e2e] hover:scale-105 transition duration-300 ease-in-out ">
      <div class="px-6 py-4 top-0 right-0">
        <h1 class="text-white text-2xl font-semibold mb-4">Contact:</h1>
        <p class="text-white glowhover">
          <a href="https://github.com/detectve">
            <i class="fab fa-github" /> detectve</a>
        </p>
        <p class="text-white glowhover">
          <a href="https://discord.com/users/718798976211484724">
            <i class="fab fa-discord " /> uhhhdetective#1337
          </a>
        </p>
        <p class="text-white glowhover">
          <a href="mailto:uhhhdetective@protonmail.com">
            <i class="fas fa-envelope" /> uhhhdetective@protonmail.com</a>
        </p>
        <p class="text-white glowhover">
          <a href="https://twitter.com/uhhhdetective">
            <i class="fab fa-twitter" /> @uhhhdetective</a>
        </p>
      </div>
    </div>

    <div class="rounded overflow-hidden shadow-lg bg-[#302e2e] hover:scale-105 transition duration-300 ease-in-out">
      <DiscordStatus />
    </div>
  </div>
</div>
