<template>
    <section id="howtodownload" :class="{'dark-mode': store.theme}">
        <h3>{{ $t("content.title") }}</h3>
        <ol>
            <li>{{ $t("content.list[0].content") }}</li>
            <li>{{ $t("content.list[1].content") }}</li>
            <li>{{ $t("content.list[2].content") }}</li>
            <li>{{ $t("content.list[3].content") }}</li>
        </ol>
        <button><a href="/despertagoat.apk" download="despertagoat">{{ $t("content.button") }}</a></button>
    </section>
</template>

<script setup>
    import { useThemeStore } from '../store/themeStore'

    const store = useThemeStore()
</script>

<style scoped>
    h3{
        text-align: center;
        padding: 20px;
    }
    section{
        padding: 25px;
        width: 75%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    li{
        margin-top: 10px;
    }
    button {
        background: #F6F6F7; 
        outline: none;
        border: none;
        padding: 10px;
        border-radius: 5px;
        transition: border 0.5s ease;
    }
    button a{
        text-decoration: none;
        color: #3c3c44;
    }
    .dark-mode h3, .dark-mode li, .dark-mode button a{
        color: #DFDFD6;
    }
    .dark-mode button{
        background: #49494f;
    }
</style>