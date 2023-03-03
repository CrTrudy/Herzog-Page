


<template>
    <panorama-banner></panorama-banner>
    <nav-bar></nav-bar>

</template>

<script>
import PanoramaBanner from './components/PanoramaBanner.vue'
import NavBar from './components/NavBar.vue'



export default {
  components: 
    {
     PanoramaBanner, 
     NavBar
    },
}
</script>


<style>
:root {
    --color-primary: #2584ff;
    --color-secondary: #00d9ff;
    --color-accent: #ff3400;
    --color-headings: #cccbce;
    --color-body: #918ca4;
    --color-body-darker: #45405a;
    --color-border: #ccc;
    --border-radius: 30px;
    --padding-vertical: 6rem;

}

*,
*::after,
*::before {
    box-sizing: border-box;
}


/*Typographie */

html {
    font-size: 62.5%;
}

body {
    display: flex;
    font-family: Inter, Arial, Helvetica, sans-serif;
    font-size: 2.4rem;
    line-height: 1.5;
    color: var(--color-body)
}

/* Headings */
h1, h2, h3 {
    color: var(--color-headings);
    margin-bottom: 1rem;
    line-height: 1.1;

}
h1 {
    font-size: 7rem;
}
h2 {
    font-size: 4rem;
}
h3 {
    font-size: 3rem;
}

p {
    margin-top: 0;
}

@media screen and (min-width: 1024px) {
    body {
        font-size: 1.8rem;
    }
    h1 {
        font-size: 8rem;
    }
    h2 {
        font-size: 4rem;
    }
    h3 {
        font-size: 2.4rem;
    }
}

</style>