<template>
	<div :class="{'dark-mode': store.theme}">
	<section class="main">
		<button @click="store.toggleTheme()">
            <v-icon :name="store.theme === true ? 'md-lightmode-round' : 'md-darkmode-round'"></v-icon>
        </button>
		<select v-model="$i18n.locale">
			<option value="es">Español</option>
			<option value="en">English</option>
			<option value="fr">Français</option>
			<option value="zh">中国人</option>
		</select>
	</section>
	<img :src="leoImage" alt="DespertaGOAT">
	<DownloadComponent></DownloadComponent>
	</div>
</template>

<script setup>
	import DownloadComponent from './components/DownloadComponent.vue'
	import leoImage from './assets/leo.png';
	import { useThemeStore } from './store/themeStore'

	const store = useThemeStore()
</script>

<style scoped>
	img{
		transition: filter 0.5s ease;
		margin: 10px auto;
		display: block;
	}
	img:hover{
		filter: drop-shadow(0 0 2em #1690C8);
	}
	select{
		padding: 7px 40px 7px 12px;
		width: 200px;
		border: 1px solid #E8EAED;
		border-radius: 5px;
		background: white;
		box-shadow: 0 1px 3px -2px #9098A9;
		cursor: pointer;
		font-family: inherit;
		font-size: 16px;
		transition: all 150ms ease;
		margin: 20px
	}
	.main{
		width: 100%;
		display: flex;
		justify-content: end;
	}
	button{
		border: none;
		background: none;
	}
	.dark-mode{
		background: #1B1B1F;
		min-height: 100vh;
	}
	.dark-mode button{
		color: #DFDFD6;
	}
	.dark-mode select{
		background: #1B1B1F;
		color: #DFDFD6;
		border: 1px solid #49494f;
	}
</style>
