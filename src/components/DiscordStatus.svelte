<script>
  // TODO: edit this whole component
  import axios from "axios";
  import { onMount } from "svelte";
  let discordData = "";
  let statusColor = "";
  async function getDiscordData() {
    try {
      let response = await axios
        .get("https://api.lanyard.rest/v1/users/718798976211484724")
        .then(function (response) {
          console.log(response.data);
          discordData = response.data.data;
          const statusColors = {
            online: "#34D399",
            idle: "#FACC15",
            dnd: "#F87171",
            offline: "#9CA3AF",
          };
          statusColor = statusColors[discordData.discord_status];
        });
    } catch (e) {
      console.log("Error fetching data");
    }
    setTimeout(getDiscordData, 25000); // refreshes every 25 seconds
  }
  onMount(() => {
    getDiscordData();
  });
</script>

{#if discordData.discord_status != undefined}
  <div class="flex items-center mb-6">
    <div class="p-5">
      <a href="https://discord.com/users/{discordData.discord_user.id}">
        <img
          class="inline w-32 h-32 rounded-md object-left discordImg transition delay-50 duration-300 ease-in-out hover:-rotate-[5deg] hover:scale-105"
          src="https://cdn.discordapp.com/avatars/{discordData.discord_user
            .id}/{discordData.discord_user.avatar}.png"
          alt="discord profile"
        />
      </a>
    </div>
    <div>
      <p class="text-m text-white">
        <span style="color: {statusColor}"
          ><i class="animate-pulse fa-solid fa-circle" />
        </span>
        {discordData.discord_user.username}#{discordData.discord_user
          .discriminator}
      </p>
      <p class="text-m">
        {#if discordData.discord_status != "offline"}<span
            class="text-white font-semibold">online</span
          >
          <span class="text-m text-gray-200"
            >({discordData.discord_status})</span
          >{:else}<span class="text-white font-semibold">offline</span>{/if}
      </p>
      <p class="text-m">
        {#if discordData.spotify != null}
          <span class="text-white font-semibold text-clip overflow-hidden">
            <i class="fab fa-spotify" />
            <span class="font-normal text-gray-100"
              >listening to
            </span>{discordData.spotify.song}
            <span class="font-normal text-gray-100">by </span>
            {discordData.spotify.artist}
          </span>
        {/if}
      </p>
    </div>
  </div>
{:else}{/if}

<style lang="postcss">
  .discordImg {
    max-width: none;
  }
</style>
