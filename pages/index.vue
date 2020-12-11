<template>
  <div class="container">
    <h1>Вентилятор</h1>
    <div class="row">
      <div class="section-label"><h4>Мощность</h4></div>
      <div class="section-input">
        <div class="rowNested">
          <input
            @input="sendToBackend"
            v-model="power"
            style="width: 100px"
            type="text"
            id="power"
            name="power"
          />
          <label for="power">кВт</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="section-label"><h4>Управление</h4></div>
      <div class="section-input">
        <div class="rowNested">
          <input
            @change="sendToBackend"
            v-model="control"
            type="radio"
            id="controlD"
            name="control"
            value="direct"
          />
          <label for="control">Прямой пуск</label>
        </div>
        <div class="rowNested">
          <input
            v-model="control"
            @change="sendToBackend"
            type="radio"
            id="controlT"
            name="control"
            value="transform"
          />
          <label for="control">Преобразователь частоты</label>
        </div>
      </div>
    </div>
    <h1>Общие</h1>

    <div class="row">
      <div class="section-label"><h4>Корпус</h4></div>
      <div class="section-input">
        <div class="rowNested">
          <input
            @change="sendToBackend"
            v-model="body"
            type="radio"
            id="bodyP"
            name="body"
            value="plastic"
          />
          <label for="body">Пластик</label>
        </div>
        <div class="rowNested">
          <input
            @change="sendToBackend"
            v-model="body"
            type="radio"
            id="bodyM"
            name="body"
            value="metal"
          />
          <label for="body">Металл</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="section-label"><h4>Доп. опции</h4></div>
      <div class="section-input">
        <div class="rowNested">
          <input
            @change="sendToBackend"
            v-model="extra.fire"
            type="checkbox"
            id="extra1"
            name="extra"
            value="fire"
          />
          <label for="extra">Сигнал Пожар</label>
        </div>
        <div class="rowNested">
          <input
            @change="sendToBackend"
            v-model="extra.led"
            type="checkbox"
            id="extra2"
            name="extra"
            value="led"
          />
          <label for="extra">LED-индикация</label>
        </div>
        <div class="rowNested">
          <input
            @change="sendToBackend"
            v-model="extra.dispatch"
            type="checkbox"
            id="extra3"
            name="extra"
            value="dispatch"
          />
          <label for="extra">Диспетчеризация</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      power: "",
      control: "",
      body: "",
      extra: {
        fire: false,
        led: false,
        dispatch: false,
      },
    };
  },
  methods: {
    async sendToBackend() {
      var vm = this;
      console.log("he");
      await axios.post("http://localhost:3000/api/", {
        power: vm.power,
        control: vm.control,
        body: vm.body,
        extra: vm.extra,
      });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-bottom: 10px;
}

.section-label {
  flex: 1;
}

.section-input {
  flex: 1;
}

.rowNested {
  white-space: nowrap;
}

input[type="radio"],
label {
  vertical-align: baseline;
  margin: 1px;
}
</style>
