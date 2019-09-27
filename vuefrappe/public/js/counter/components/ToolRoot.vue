<template>
        <div>{{ title }}<br /><ButtonCounter :count="10"></ButtonCounter></div>
</template>

<script>
        import ButtonCounter from './ButtonCounter.vue'

        export default {
                name: "ToolRoot",
                data: function () {
                        return {
                                title: 'Simple application to test vue with react ',
                        }
                },
                components: {
                        ButtonCounter
                },
        }
</script>
