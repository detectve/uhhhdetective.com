<style lang="postcss">
.discordImg {
	max-width: none;
}
</style>

<script>
// TODO: edit this whole component
import axios from 'axios'
import { onMount } from 'svelte'
let discordData = ''
let statusColor = ''
async function getDiscordData() {
	try {
		let response = await axios
			.get('https://api.lanyard.rest/v1/users/718798976211484724')
			.then(function (response) {
				console.log(response.data)
				discordData = response.data.data
				const statusColors = {
					online: '#34D399',
					idle: '#FACC15',
					dnd: '#F87171',
					offline: '#9CA3AF'
				}
				statusColor = statusColors[discordData.discord_status]
			})
	} catch (e) {
		console.log('Error fetching data')
	}
	setTimeout(getDiscordData, 25000) // refreshes every 25 seconds
}
onMount(() => {
	getDiscordData()
})
</script>

{#if discordData.discord_status != undefined}
	<div class="mb-6 flex items-center">
		<div class="p-5">
			<a href="https://discord.com/users/{discordData.discord_user.id}">
				<img
					class="discordImg delay-50 inline h-32 w-32 rounded-md object-left transition duration-300 ease-in-out hover:-rotate-[5deg] hover:scale-105"
					src="https://cdn.discordapp.com/avatars/{discordData.discord_user
						.id}/{discordData.discord_user.avatar}.png"
					alt="discord profile" />
			</a>
		</div>
		<div>
			<p class="text-grey text-3xl">
				<span style="color: {statusColor}"
					><i class="fa-solid fa-circle animate-pulse"></i>
				</span>
				{discordData.discord_user.username}#{discordData.discord_user.discriminator}
			</p>
			<p class="text-m">
				{#if discordData.discord_status != 'offline'}<span
						class="text-grey text-2xl font-semibold">Online</span>
					<span class="text-m text-gray-200">({discordData.discord_status})</span
					>{:else}<span class="text-grey text-2xl font-semibold">Offline</span>{/if}
			</p>
			<p class="text-m">
				{#if discordData.spotify != null}
					<span class="text-grey overflow-hidden text-clip font-semibold">
						<i class="fab fa-spotify"></i>
						<span class="text-grey-100 font-normal">Listening to </span>{discordData
							.spotify.song}
						<span class="text-grey-100 font-normal">by </span>
						{discordData.spotify.artist}
					</span>
				{/if}
			</p>
		</div>
	</div>
{:else}<!-- svelte-ignore empty-block -->
{/if}
