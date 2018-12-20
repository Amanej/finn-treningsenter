<template>
<div class="header">
    <!-- Logo -->
    <h2>
        <app-logo/>
        <span>Finn Ditt Treningsenter</span>
    </h2>
    <!-- Slogan -->
</div>

</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
    components: {
        AppLogo
    }
}
</script>

<style lang="scss" scoped>
div.header {
    padding-left: 10px;
    h2 {
        span {
            position: relative;
            top: -20px;        
        }
    }
}
</style>