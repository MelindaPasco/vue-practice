<template>
    <div class="col-md-3">
        <p class="jumbotron">
            {{ name }}
            <button v-on:click= "skill_choice(name)">Can do !</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'SkillsList',
    props: {
        name: String
    },
    methods: {
        skill_choice(skill) {
            this.$emit("chosen", skill);
        }
    }
}
</script>

<style scoped>

</style>