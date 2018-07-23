<template>
    <section class="sentre">
        <div class="senter">
            <div class="singleGym">
                <h2>Bjorvika</h2>
                <h3>Kjede: Sats/Elixia</h3>
                <!--<div class="gymInMap"></div>-->
                <div class="detailedInfo">
                    <p>Åpningstider: 06:00 - 23:00</p>
                    <p>Tilleggstjenester: </p><div class="iconsOfServices"></div><p></p>
                    <p>Pris: 349 ,-</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    components: {

    },
    /*asyncData() {
        return new Promise((resolve, reject) => {
            // Get WP data 

        })
    }*/
}
</script>


<style scoped>
.sentre {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
</style>