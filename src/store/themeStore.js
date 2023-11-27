import { defineStore } from 'pinia'

export const useThemeStore = defineStore('useThemeStore', {
    state: () => {
        return {
            theme: false
        }
    },
    actions: {
        toggleTheme() {
            this.theme = !this.theme;
        },
    },
    persist: true
});