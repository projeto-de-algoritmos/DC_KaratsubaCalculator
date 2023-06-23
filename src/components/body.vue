<template>
  <vue-command
    id="terminal-id"
    show-help
    :yargs-options="{ alias: { color: ['colour'] } }"
    title="Karatsuba"
    :commands="commands"
  />
</template>

<style scoped>
#terminal-id{
  width: 900px;
  margin: 50px auto 0 auto;
  height: 400px;
}
</style>
<script>
import VueCommand, { createStdout } from "vue-command";
import "vue-command/dist/vue-command.css";
import { Karatsuba } from "../utils/karatsuba";
let karatsuba = new Karatsuba();

export default {
  components: {
    VueCommand,
  },
  data() {

    return {
      x: "",
      y: "",
      saida: "",
      commands: {
        "./karatsuba": async (args) => {
          if(!args[1] && !args[1]) return createStdout("Parametros invalidos")
          karatsuba.execute(args[1], args[2]);
          return createStdout(`${karatsuba.getLog()} ${karatsuba.getFormula()} \n ${karatsuba.getResultado()}`)
        },
      }
      
    }
  },
  methods: {
    calcula() {
      karatsuba.execute(this.x, this.y);
      this.saida = karatsuba.getResultado();
    },
  },
};
</script>
