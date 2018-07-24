<template>
    <div class="singleGym">
        <h2>{{title}}</h2>
        <h3>Kjede: {{chain}}</h3>
        <!--<div class="gymInMap"></div>-->
        <div class="detailedInfo">
            <p>Åpningstider: {{hours}}</p>
            <!--<p>Tilleggstjenester: </p><div class="iconsOfServices"></div><p></p>-->
            <p>Pris: {{prices}} ,-</p>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['title','chain', 'hours', 'id', 'prices']
}
</script>

<style scoped>
.singleGym {
    color: grey;
    width: 100%;
    margin: 10px 0;
    float: left;
}
h2, h3 {
    display: inline-block;
}
h2 {
    text-align: left;
    float: left;
}
h3 {
    text-align: left;
    float: right;
}
div.detailedInfo {
    width: 100%;
    display: block;
    float: left;
    text-align: left;
}

div.detailedInfo p {
    display: inline;
    margin: 0 10px;
}

div.detailedInfo p:first-child {
    margin-left: 0;
}
</style>