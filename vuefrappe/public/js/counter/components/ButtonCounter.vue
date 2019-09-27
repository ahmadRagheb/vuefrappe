<template>
        <div>
                <p >{{ count }}</p>

        <button class="btn" v-on:click="count++">Click count — </button>
        <button class="btn" v-on:click="count--">Click Incount — </button>
        </div>
</template>

<script>
        export default {
                props: ['count'],
                data: function () {
                        return {
                                count: 0
                        }
                }
        }
</script>
