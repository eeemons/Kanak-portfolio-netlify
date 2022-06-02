<script setup></script>
<template>
  <div class="card-width">
    <q-card class="my-card" flat>
      <q-card-section horizontal>
        <q-card-section>
          <q-img class="col studio-image" src="../assets/0.jpg" />
        </q-card-section>

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
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap");
* {
  font-family: "Lato", sans-serif;
}
.studio-image {
  width: 300px;
  height: 400px;
}
.card-width {
  width: 50%;
  margin-top: 10%;
}

.my-card {
  transform: translate(44%, 0);
  margin-bottom: 60%;
}
.team-members {
  transform: translate(30%, 0);
  overflow-x: auto;
  width: 150%;
}
.team-image {
  width: 200px;
  height: 300px;
}
.team-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  margin: 0;
  padding: 0 4px 0 0;
  font-weight: 800;
  text-align: center;
}
.designation {
  margin: 0;
  padding: 0;
  text-align: center;
  color: rgb(105, 105, 105);
}
.social {
  width: 15px;
  height: 15px;
  text-align: center;
  display: block;
  margin-left: 6px;
  margin-top: 3px;
}
.social-align {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.middle-text {
  margin-top: 30%;
}
</style>
