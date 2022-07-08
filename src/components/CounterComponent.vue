<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Counter</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          exercitationem natus, dolores animi reprehenderit, voluptate iste
          consectetur accusamus odit veritatis aliquam pariatur optio numquam,
          tenetur cum suscipit blanditiis! Quam, praesentium!
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{ count }}</p>
            <button class="btn btn-success m-1" @click="increment">
              Increment
            </button>
            <button class="btn btn-warning m-1" @click="decrement">
              Decrement
            </button>
            <button class="btn btn-danger m-1" @click="incrementBy(5)">
              Increment By
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CounterComponent",
  data: () => {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    incrementBy(val) {
        console.log('clicked')
     this.count= this.count + val;
    },
  },
};
</script>


<style scoped></style>