<script setup></script>
<template>
  <div class="card-width">
    <q-card class="my-card" flat>
      <q-card-section horizontal>
        <q-card-section>
          <q-img class="col studio-image" src="../assets/person.png" />
        </q-card-section>
        <q-separator vertical />
        <q-card-section>
          <div class="middle-text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus officiis temporibus provident incidunt ea reprehenderit
              aperiam excepturi quia, at autem praesentium vitae blanditiis! Ab
              error quod consequuntur vitae odit exercitationem
            </p>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.studio-image {
  width: 15rem;
  height: 15rem;
}
.card-width {
  width: 50%;
  padding-top: 10rem;
}
.middle-text {
  padding-top: 3.5rem;
}
</style>
