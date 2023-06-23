<template>
  <vue-command
    show-help
    :yargs-options="{ alias: { color: ['colour'] } }"
    title="Karatsuba"
    :commands="commands"
  />
  <div class="line">
    <input class="habilitado" v-model="x" placeholder="Coloque aqui o valor X" />
    <input class="habilitado" v-model="y" placeholder="Coloque aqui o valor Y" />
  </div>
  <div class="line">
    <input class="desabilitado" disabled v-model="saida" placeholder="Resultado" />
  </div>
  <div class="line">
    <button v-on:click="calcula">Calcular</button>
  </div>
</template>

<style scoped>
.habilitado {
  background-color: #fff;
  width: 16rem;
  height: 1.75rem;
  font-size: 1.25rem;
  border: 1px solid black;
  margin: 10px;
  outline: none;
}

.desabilitado {
  background-color: #fff;
  outline: none;
  width: 500px;
  height: 1.75rem;
  font-size: 1.25rem;
  border: none;
}

.line {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
  flex-direction: row;
  color: #fff;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  flex-direction: row;
}

.block {
  margin: 10px;
}

.vue-number-input {
  margin-top: 10px;
  justify-content: inline;
}

vue-select {
  margin: 10px;
}

button {
  background-color: white;
  width: 150px;
  height: 40px;
}

button:hover {
  background-color: #52b8ef;
  transition: 0.7s;
  text-align: center;
}

textarea {
  border-radius: 4px;
}

#term {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;

  .cont {
    min-height: 300px;
  }
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
        "./karatsuba": (s) => {
          console.log(s);
          createStdout(`sdds`);
        },
      },
    };
  },
  methods: {
    calcula() {
      karatsuba.execute(this.x, this.y);
      this.saida = karatsuba.getResultado();
    },
  },
};
</script>
