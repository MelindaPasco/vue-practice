<template>
    <div>
        <h2>Directives & Methods</h2>

        <div class="container">
          
            <div class="row">
                <SkillsList v-for="skill in skills" :key= "skill" 
                v-bind:name= "skill"
                v-on:chosen= "work" />  
            </div>
        </div>
        <br>

        <div class="container">
            <div class="jumbotron" v-if= "knowledge.length > 0">
                  <p>I know how to use:</p>
                  <ul>
                    <li v-for= "know in knowledge" :key= "know">{{ know }}</li>
                  </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SkillsList from '../components/SkillsList.vue'

export default {
  name: 'Abilities',
  methods: {
    work: function(skill){
      this.knowledge.push(skill);
    }
  },
  data() {
    return {
      skills: ["Binding", "Directives", "Rooting", "Other"],
      knowledge: [],
    }
  },
  components: {
    SkillsList
  }
}
</script>