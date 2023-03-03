<template>
    <section class="nav">
        <div class="menu nav__toggler">
            <nav-button @click="menuIS()" :label="'Menu'" ></nav-button>
        </div>
        <section class="grid collapsible--expanded">
            <nav-button 
                v-for="lab in menuTypes"
                :key="lab.menu" 
                @click="menuSelect(lab)" 
                :label="lab" >
            </nav-button>
        </section>
    </section>
</template>



<script>

export default {
    data() {
        return {
            menuTypes: [ 'Restaurant', 'Herberge', 'Veranstaltungen', 'Galerie' ]
        };
    },
    methods: {
        menuIS() {
                document.querySelector('.menu').style.display = 'none'
                document.querySelector('.grid').style.display = 'grid'
        },
        menuSelect(lab) {
            if(document.body.clientWidth < 768)
            {
                document.querySelector('.grid').style.display = 'none'
                document.querySelector('.menu').style.display = 'flex'
            }


            console.log(lab);
            
        }
    }
    
}
</script>


<style scoped>

.nav {
    display: grid;
    grid-gap: 10px;
}

.grid {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
}

.btn {
    color: #666;
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0;
    padding: 2rem;
    border: none;
    border-radius: 40px;
    cursor: pointer;
}




.menu {
    display: none;
    justify-content: center;
}




@media screen and (min-width: 768px) {
    .nav__toggler {
        display: none;
    }

    .grid {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
        margin: 2rem;
    }
}
</style>