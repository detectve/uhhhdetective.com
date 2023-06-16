<script>
import DiscordStatus from '../components/DiscordStatus.svelte'
</script>

<svelte:head>
	<title>destination - uhhhdetective.com</title>
</svelte:head>

<body>
	<main class="mx-6">
		<section class="mx-auto">
			<div class="text-center">
				<h1 class="text-grey text-3xl font-bold">uhhhdetective.com</h1>
			</div>
			<div>
				<p class="text-grey text-2xl">
					Hi, I'm Em. I'm a 16 year old student from and based in the UK. I'm currently
					going on to study graphic design, photography, videography, etc. I enjoy being
					creative and using technology to make my ideas a reality.
				</p>
			</div>
			<div>
				<p class="text-grey text-2xl">
					Outside of coding and studies, I enjoy travelling around the UK, predominantly
					on trains and the railway.
				</p>
			</div>
			<div class="my-2">
				<p class="text-grey text-2xl">
					If you have any enquiries, please do not hesitate to contact me via the
					following methods:
					<br />
					<a href="https://github.com/detectve">
						<i class="fab fa-github"></i> detectve</a> - where you can see projects I've
					worked on and my contributions to other projects.
				</p>
				<p class="text-grey text-2xl">
					<a href="https://twitter.com/detectve">
						<i class="fab fa-twitter"></i> uhhhdetective</a> - where I keep up with railways
					and people within the community.
				</p>
				<p class="text-grey text-2xl">
					<a href="https://discord.com/users/327462128061069056">
						<i class="fab fa-discord"></i> uhhhdetective#1337</a> - where I can be contacted
					for more casual enquiries or just to have a conversation.
				</p>
				<p class="text-grey text-2xl">
					<a href="mailto:uhhhdetective@protonmail.com">
						<i class="fas fa-envelope"></i> uhhhdetective@protonmail.com</a> - where I can
					be contacted for more formal enquiries and/or conversations.
				</p>
			</div>
			<div class="my-2">
				<p class="text-grey text-2xl">I am currently:</p>
				<DiscordStatus />
			</div>
		</section>
	</main>
</body>
