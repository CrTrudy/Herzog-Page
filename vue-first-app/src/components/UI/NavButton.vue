<template>
    <button>{{ label }}</button>
</template>

<script>
export default {
    props: 
    {
        label: {
            type: String,
            required: true
        } 
    },
    data() {
        return { };
    },

    
}


</script>

<style scoped>
    
    button {
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
</style>